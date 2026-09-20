/**
 * TrueXpanse Standard Event Tracking
 *
 * Dual-path by design: every event is sent to GA4 directly via gtag AND pushed
 * to the GTM dataLayer. Direct gtag is what records today; the dataLayer push
 * means a GTM container can be dropped in later without touching code.
 *
 * (Earlier versions pushed to the dataLayer only. With no GTM container on the
 * site, nothing was ever recorded — see the 2026-09-19 entry in status.md.)
 *
 * Standard event set across every TrueXpanse client site:
 *   - generate_lead     (form succeeded — GA4 recommended lead-gen event)
 *   - phone_call_click  (tel: link tapped)
 *   - cta_click         (primary CTA clicked)
 *   - scroll_depth      (25 / 50 / 75 / 90)
 *   - outbound_click / file_download / engaged_time
 *
 * Most events bind automatically via <AutoTracking />. Call these helpers only
 * for things a click listener cannot infer.
 */

type GtagFn = (command: string, target: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: GtagFn;
  }
}

export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

/** Track a phone number click. `source` identifies where on the page. */
export function trackPhoneClick(source: string) {
  pushEvent("phone_call_click", { link_placement: source });
}

/** Track a successful form submission. `form` identifies which form. */
export function trackFormSubmit(form: string) {
  pushEvent("generate_lead", {
    form_id: form,
    lead_type: form.includes("magnet") || form.includes("guide") ? "lead_magnet" : "quote_request",
  });
}

/** Track a primary CTA button click. */
export function trackCtaClick(cta: string, location: string) {
  pushEvent("cta_click", { cta, link_placement: location });
}

/** Track a warm-lead financing page view. Call once on mount. */
export function trackFinancingView() {
  pushEvent("financing_view");
}
