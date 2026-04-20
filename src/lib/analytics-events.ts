/**
 * TrueXpanse Standard Event Tracking
 *
 * Pushes events to the GTM dataLayer. GTM then routes them to GA4, Google Ads,
 * Meta Pixel, etc. — configured in the GTM UI, not in code.
 *
 * Standard event set across every TrueXpanse client site:
 *   - phone_click    (tel: link tapped)
 *   - form_submit    (contact form succeeded)
 *   - cta_click      (primary CTA button clicked)
 *   - financing_view (financing page viewed — warm lead)
 *
 * Usage:
 *   import { trackPhoneClick } from "@/lib/analytics-events";
 *   <a href="tel:+18059525301" onClick={() => trackPhoneClick("hero")}>Call</a>
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function pushEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Track a phone number click. `source` identifies where on the page. */
export function trackPhoneClick(source: string) {
  pushEvent("phone_click", { source });
}

/** Track a successful form submission. `form` identifies which form. */
export function trackFormSubmit(form: string) {
  pushEvent("form_submit", { form });
}

/** Track a primary CTA button click. */
export function trackCtaClick(cta: string, location: string) {
  pushEvent("cta_click", { cta, location });
}

/** Track a warm-lead financing page view. Call once on mount. */
export function trackFinancingView() {
  pushEvent("financing_view");
}
