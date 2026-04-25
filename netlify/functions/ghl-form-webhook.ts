/**
 * /netlify/functions/ghl-form-webhook
 *
 * Receives Netlify form submission webhook payloads (registered via
 * Netlify hooks API on the site) and upserts each lead as a GHL contact
 * with appropriate tags.
 *
 * Always returns 200 so Netlify does not retry — failures are logged.
 *
 * Env required:
 *   GHL_LOCATION_ID    -> ys2OsHHl5P2Q7SZtwmNr
 *   GHL_LOCATION_PIT   -> pit-…
 *
 * Webhook setup (one-time per site):
 *   netlify api createHookBySiteId --data '{
 *     "site_id":"<site_id>",
 *     "body":{
 *       "type":"url",
 *       "event":"submission_created",
 *       "data":{"url":"https://<site>/.netlify/functions/ghl-form-webhook"}
 *     }
 *   }'
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

interface NetlifySubmission {
  id?: string;
  form_id?: string;
  form_name?: string;
  site_url?: string;
  data?: Record<string, string | undefined>;
  human_fields?: Record<string, string | undefined>;
}

const ok = (body: Record<string, unknown>) => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

function pick(
  data: Record<string, string | undefined> | undefined,
  ...keys: string[]
): string | undefined {
  if (!data) return undefined;
  for (const k of keys) {
    const v = data[k];
    if (v && String(v).trim()) return String(v).trim();
  }
  return undefined;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildTags(formName: string, data: Record<string, string | undefined>): string[] {
  const tags = new Set<string>(["web-lead", "google-ads"]);

  if (formName.includes("lead-magnet")) {
    tags.add("lead-magnet");
  } else if (formName.includes("estimate")) {
    tags.add("estimate-request");
  }

  const service = pick(data, "service_interest", "service");
  if (service) tags.add(`service-${slugify(service)}`);

  const source = pick(data, "source");
  if (source) tags.add(source);

  const leadMagnet = pick(data, "lead_magnet");
  if (leadMagnet) tags.add(leadMagnet);

  return Array.from(tags);
}

export const handler = async (event: { httpMethod: string; body: string | null }) => {
  if (event.httpMethod !== "POST") {
    return ok({ skipped: "non-POST" });
  }

  const locationId = process.env.GHL_LOCATION_ID;
  const pit = process.env.GHL_LOCATION_PIT;
  if (!locationId || !pit) {
    console.error("[ghl-form-webhook] missing env: GHL_LOCATION_ID or GHL_LOCATION_PIT");
    return ok({ ok: false, error: "server misconfigured" });
  }

  let submission: NetlifySubmission;
  try {
    submission = JSON.parse(event.body || "{}");
  } catch (e) {
    console.warn("[ghl-form-webhook] invalid JSON body", e);
    return ok({ ok: false, error: "invalid JSON" });
  }

  const formName = submission.form_name || "unknown-form";
  const data = submission.data || {};

  const email = pick(data, "email");
  if (!email) {
    console.warn(`[ghl-form-webhook] no email in submission ${submission.id} from form ${formName}`);
    return ok({ ok: false, error: "no email in submission", formName });
  }

  const firstName =
    pick(data, "first_name", "firstName") ||
    pick(data, "name", "full_name", "fullName")?.split(/\s+/)[0] ||
    undefined;
  const lastName =
    pick(data, "last_name", "lastName") ||
    pick(data, "name", "full_name", "fullName")?.split(/\s+/).slice(1).join(" ") ||
    undefined;
  const phone = pick(data, "phone", "phone_number");
  const address = pick(data, "address", "city");
  const message = pick(data, "message", "notes");

  const tags = buildTags(formName, data);

  const customFields: { key: string; field_value: string }[] = [];
  const service = pick(data, "service_interest", "service");
  if (service) customFields.push({ key: "service_interest", field_value: service });
  customFields.push({ key: "lead_source", field_value: "Google Ads" });
  customFields.push({ key: "form_name", field_value: formName });

  const ghlBody: Record<string, unknown> = {
    locationId,
    email,
    tags,
    source: `Web — ${formName}`,
    customFields,
  };
  if (firstName) ghlBody.firstName = firstName;
  if (lastName) ghlBody.lastName = lastName;
  if (phone) ghlBody.phone = phone;
  if (address) ghlBody.address1 = address;

  try {
    const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${pit}`,
        Version: GHL_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(ghlBody),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(
        `[ghl-form-webhook] GHL upsert failed for ${email} from ${formName}: ${res.status} ${text}`
      );
      return ok({ ok: false, status: res.status, formName, email });
    }

    const json = (await res.json()) as { contact?: { id?: string }; new?: boolean };
    if (message && json.contact?.id) {
      try {
        await fetch(`${GHL_BASE}/contacts/${json.contact.id}/notes`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${pit}`,
            Version: GHL_VERSION,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: message, userId: "" }),
        });
      } catch (e) {
        console.warn(`[ghl-form-webhook] note attach failed for ${email}:`, e);
      }
    }

    console.log(
      `[ghl-form-webhook] upserted ${email} (${json.contact?.id}) from ${formName} new=${json.new ?? false}`
    );
    return ok({
      ok: true,
      contactId: json.contact?.id,
      isNew: json.new ?? null,
      formName,
      tags,
    });
  } catch (e) {
    console.error(`[ghl-form-webhook] exception for ${email}:`, e);
    return ok({ ok: false, error: String(e) });
  }
};
