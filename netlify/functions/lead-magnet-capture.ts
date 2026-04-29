/**
 * /netlify/functions/lead-magnet-capture
 *
 * Receives lead magnet form submissions from /lp/* landing pages.
 * Creates a contact in Matt's GHL sub-account, tags them, fires email #1
 * immediately, then schedules emails 2-7 in the Supabase nurture queue.
 *
 * Expected JSON body:
 *   {
 *     firstName, email, phone?,
 *     service,              // e.g. "Garage Floor Coatings"
 *     sourcePage,           // e.g. "lp-garage-floors"
 *     leadMagnetTag,        // e.g. "nurture-garage"
 *     leadMagnetTitle,
 *     leadMagnetFilename    // e.g. "mgp-5-questions-installer.html"
 *   }
 *
 * Env required:
 *   GHL_LOCATION_ID            -> ys2OsHHl5P2Q7SZtwmNr
 *   GHL_LOCATION_PIT           -> pit-…
 *   SUPABASE_URL               -> https://ietshbhcugjtnwqnnptg.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY  -> (service role; NEVER expose to client)
 *   SITE_URL                   -> https://mgpcoatings.solutions
 */

import { mgpNurtureSequence } from "../../email-templates/mgp-nurture-sequence";

interface Payload {
  firstName: string;
  email: string;
  phone?: string;
  service: string;
  sourcePage: string;
  leadMagnetTag: string;
  leadMagnetTitle: string;
  leadMagnetFilename: string;
}

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

const ok = (body: Record<string, unknown>) => ({
  statusCode: 200,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(body),
});

const fail = (status: number, message: string, extra?: unknown) => ({
  statusCode: status,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({ error: message, ...(extra ? { details: extra } : {}) }),
});

function interpolate(
  template: string,
  vars: Record<string, string>
): string {
  return template.replace(/\{\{([^}]+)\}\}/g, (_, raw) => {
    const key = String(raw).trim();
    return key in vars ? vars[key] : `{{${key}}}`;
  });
}

function lpSlugFromSourcePage(sourcePage: string): string {
  // sourcePage = "lp-garage-floors" -> "garage-floors"
  return sourcePage.replace(/^lp-/, "");
}

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return fail(405, "Method not allowed");
  }

  let payload: Payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return fail(400, "Invalid JSON body");
  }

  const required: (keyof Payload)[] = [
    "firstName",
    "email",
    "service",
    "sourcePage",
    "leadMagnetTag",
    "leadMagnetTitle",
    "leadMagnetFilename",
  ];
  const missing = required.filter((k) => !payload[k]);
  if (missing.length) {
    return fail(400, `Missing required fields: ${missing.join(", ")}`);
  }

  const locationId = process.env.GHL_LOCATION_ID;
  const pit = process.env.GHL_LOCATION_PIT;
  const supaUrl = process.env.SUPABASE_URL;
  const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const siteUrl = process.env.SITE_URL || "https://mgpcoatings.solutions";

  if (!locationId || !pit || !supaUrl || !supaKey) {
    return fail(500, "Server misconfigured — missing env vars", {
      hasLocation: Boolean(locationId),
      hasPit: Boolean(pit),
      hasSupaUrl: Boolean(supaUrl),
      hasSupaKey: Boolean(supaKey),
    });
  }

  const ghlHeaders = {
    Authorization: `Bearer ${pit}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // 1. Upsert contact in GHL
  const tags = [
    "web-lead",
    "google-ads",
    payload.leadMagnetTag,
    `service-${payload.service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    payload.sourcePage,
  ];

  const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: ghlHeaders,
    body: JSON.stringify({
      locationId,
      firstName: payload.firstName,
      email: payload.email,
      phone: payload.phone || undefined,
      tags,
      source: "Google Ads — Landing Page",
      customFields: [
        { key: "service_interest", field_value: payload.service },
        { key: "lead_source", field_value: "Google Ads" },
      ],
    }),
  });

  if (!contactRes.ok) {
    const text = await contactRes.text();
    return fail(502, "Failed to create GHL contact", {
      status: contactRes.status,
      body: text,
    });
  }

  const contactJson = (await contactRes.json()) as {
    contact?: { id: string; email: string };
    new?: boolean;
  };
  const contactId = contactJson.contact?.id;
  if (!contactId) {
    return fail(502, "GHL returned no contact id", contactJson);
  }

  // 2. Build per-email interpolation context
  const lpSlug = lpSlugFromSourcePage(payload.sourcePage);
  const leadMagnetUrl = `${siteUrl}/downloads/${payload.leadMagnetFilename}`;
  const vars: Record<string, string> = {
    "contact.first_name": payload.firstName,
    "contact.email": payload.email,
    lead_magnet_title: payload.leadMagnetTitle,
    lead_magnet_url: leadMagnetUrl,
    lp_slug: lpSlug,
    unsubscribe_url: `${siteUrl}/unsubscribe?email=${encodeURIComponent(payload.email)}`,
  };

  // 3. Send email #1 immediately via GHL conversations/messages
  const email1 = mgpNurtureSequence[0];
  const email1Subject = interpolate(email1.subject, vars);
  const email1Html = interpolate(email1.body, vars);

  const sendRes = await fetch(`${GHL_BASE}/conversations/messages`, {
    method: "POST",
    headers: ghlHeaders,
    body: JSON.stringify({
      type: "Email",
      contactId,
      subject: email1Subject,
      html: email1Html,
      emailFrom: "Matt Gifford <matt@mgpcoatings.solutions>",
    }),
  });

  let email1Status: "sent" | "failed" = "sent";
  let email1Error: string | undefined;
  if (!sendRes.ok) {
    email1Status = "failed";
    email1Error = await sendRes.text();
    console.warn(`[lead-magnet-capture] Email #1 send failed:`, email1Error);
  }

  // 4. Queue emails 2-7 in Supabase for the scheduled worker
  const now = Date.now();
  const rows = mgpNurtureSequence.slice(1).map((email) => ({
    location_id: locationId,
    contact_id: contactId,
    contact_email: payload.email,
    sequence_key: `mgp-${payload.leadMagnetTag}`,
    email_index: email.day,
    subject: interpolate(email.subject, vars),
    html_body: interpolate(email.body, vars),
    scheduled_for: new Date(now + email.day * 24 * 60 * 60 * 1000).toISOString(),
    status: "pending",
  }));

  const supaRes = await fetch(`${supaUrl}/rest/v1/ghl_nurture_schedule`, {
    method: "POST",
    headers: {
      apikey: supaKey,
      Authorization: `Bearer ${supaKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(rows),
  });

  let scheduleStatus: "queued" | "failed" = "queued";
  let scheduleError: string | undefined;
  if (!supaRes.ok) {
    scheduleStatus = "failed";
    scheduleError = await supaRes.text();
    console.error(
      `[lead-magnet-capture] Failed to queue nurture rows:`,
      scheduleError
    );
  }

  // 5. Also log to email #1 record in Supabase for completeness
  await fetch(`${supaUrl}/rest/v1/ghl_nurture_schedule`, {
    method: "POST",
    headers: {
      apikey: supaKey,
      Authorization: `Bearer ${supaKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify([
      {
        location_id: locationId,
        contact_id: contactId,
        contact_email: payload.email,
        sequence_key: `mgp-${payload.leadMagnetTag}`,
        email_index: 0,
        subject: email1Subject,
        html_body: email1Html,
        scheduled_for: new Date(now).toISOString(),
        sent_at: email1Status === "sent" ? new Date().toISOString() : null,
        status: email1Status,
        error: email1Error || null,
      },
    ]),
  }).catch((e) => console.warn("[lead-magnet-capture] audit log failed:", e));

  return ok({
    ok: true,
    contactId,
    isNewContact: contactJson.new ?? null,
    email1: { status: email1Status, error: email1Error },
    drip: {
      status: scheduleStatus,
      scheduledEmails: rows.length,
      error: scheduleError,
    },
    downloadUrl: leadMagnetUrl,
  });
};
