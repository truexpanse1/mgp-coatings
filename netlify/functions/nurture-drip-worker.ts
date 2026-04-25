/**
 * /netlify/functions/nurture-drip-worker
 *
 * Scheduled Netlify function — runs every 15 minutes.
 * Picks up rows from ghl_nurture_schedule where scheduled_for <= now()
 * AND status = 'pending', and fires each email via GHL's
 * /conversations/messages endpoint. Marks sent/failed in the row.
 *
 * Env required:
 *   GHL_LOCATION_PIT, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Configured via the `schedule` export below (Netlify reads it at deploy time).
 */

export const config = {
  schedule: "*/15 * * * *",
};

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const MAX_PER_RUN = 30; // rate-limit friendly

interface DueRow {
  id: string;
  location_id: string;
  contact_id: string;
  contact_email: string;
  sequence_key: string;
  email_index: number;
  subject: string;
  html_body: string;
}

export const handler = async () => {
  const pit = process.env.GHL_LOCATION_PIT;
  const supaUrl = process.env.SUPABASE_URL;
  const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!pit || !supaUrl || !supaKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "missing env" }),
    };
  }

  const nowIso = new Date().toISOString();

  // Fetch due pending rows
  const listRes = await fetch(
    `${supaUrl}/rest/v1/ghl_nurture_schedule?status=eq.pending&scheduled_for=lte.${encodeURIComponent(
      nowIso
    )}&order=scheduled_for.asc&limit=${MAX_PER_RUN}&select=id,location_id,contact_id,contact_email,sequence_key,email_index,subject,html_body`,
    {
      headers: {
        apikey: supaKey,
        Authorization: `Bearer ${supaKey}`,
      },
    }
  );

  if (!listRes.ok) {
    const text = await listRes.text();
    console.error("[drip-worker] Supabase list failed:", text);
    return { statusCode: 502, body: JSON.stringify({ error: text }) };
  }

  const rows = (await listRes.json()) as DueRow[];
  if (rows.length === 0) {
    return {
      statusCode: 200,
      body: JSON.stringify({ processed: 0, message: "nothing due" }),
    };
  }

  const ghlHeaders = {
    Authorization: `Bearer ${pit}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  let sent = 0;
  let failed = 0;
  const failures: Array<{ id: string; error: string }> = [];

  for (const row of rows) {
    try {
      const sendRes = await fetch(`${GHL_BASE}/conversations/messages`, {
        method: "POST",
        headers: ghlHeaders,
        body: JSON.stringify({
          type: "Email",
          contactId: row.contact_id,
          subject: row.subject,
          html: row.html_body,
          emailFrom: "Matt Gifford <matt@mgpcoatings.solutions>",
        }),
      });

      const nowStamp = new Date().toISOString();
      if (sendRes.ok) {
        await updateRow(supaUrl, supaKey, row.id, {
          status: "sent",
          sent_at: nowStamp,
          error: null,
        });
        sent++;
      } else {
        const errText = await sendRes.text();
        await updateRow(supaUrl, supaKey, row.id, {
          status: "failed",
          error: errText.slice(0, 500),
        });
        failed++;
        failures.push({ id: row.id, error: errText.slice(0, 300) });
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      await updateRow(supaUrl, supaKey, row.id, {
        status: "failed",
        error: msg.slice(0, 500),
      });
      failed++;
      failures.push({ id: row.id, error: msg });
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      processed: rows.length,
      sent,
      failed,
      failures,
    }),
  };
};

async function updateRow(
  supaUrl: string,
  supaKey: string,
  id: string,
  patch: Record<string, unknown>
) {
  const body = JSON.stringify({ ...patch, updated_at: new Date().toISOString() });
  const res = await fetch(
    `${supaUrl}/rest/v1/ghl_nurture_schedule?id=eq.${id}`,
    {
      method: "PATCH",
      headers: {
        apikey: supaKey,
        Authorization: `Bearer ${supaKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body,
    }
  );
  if (!res.ok) {
    console.warn("[drip-worker] row update failed", id, await res.text());
  }
}
