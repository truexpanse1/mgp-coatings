"use client";

import { useState } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

interface Props {
  service: string;
  sourcePage: string;
  className?: string;
  buttonLabel?: string;
}

export default function EstimateFormLP({
  service,
  sourcePage,
  className = "",
  buttonLabel,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inputBase =
    "w-full px-4 py-3 rounded-lg text-sm font-inter transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 bg-white/5 border border-white/20 text-cream placeholder:text-cream/50";

  if (submitted) {
    return (
      <div className={`text-center py-10 ${className}`}>
        <div className="text-gold text-5xl mb-4">✓</div>
        <h3 className="font-playfair text-2xl text-cream mb-2">
          Got it. Matt will be in touch within 24 hours.
        </h3>
        <p className="text-cream/70 text-sm">
          You&apos;ll get a confirmation text shortly. If it&apos;s urgent, call{" "}
          <a href="tel:+18059525301" className="text-gold underline">
            (805) 952-5301
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      name="mgp-estimate"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "estimate_form_submit",
            service,
            source: sourcePage,
          });
          window.dataLayer.push({
            event: "conversion",
            conversion_type: "estimate_request",
            service,
          });
        }
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(
            formData as unknown as Record<string, string>
          ).toString(),
        })
          .then(() => setSubmitted(true))
          .catch(() => setSubmitted(true));
      }}
      className={`space-y-4 ${className}`}
    >
      <input type="hidden" name="form-name" value="mgp-estimate" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="source" value={sourcePage} />
      <input type="hidden" name="service_interest" value={service} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name *"
          required
          className={inputBase}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name *"
          required
          className={inputBase}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          required
          className={inputBase}
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          className={inputBase}
        />
      </div>
      <input
        type="text"
        name="address"
        placeholder="Project Address (City, CA)"
        className={inputBase}
      />
      <textarea
        name="notes"
        placeholder={`Briefly describe your ${service.toLowerCase()} project...`}
        rows={3}
        className={`${inputBase} resize-none`}
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full font-montserrat text-sm uppercase tracking-[0.12em] bg-gold text-primary px-8 py-4 rounded-lg hover:bg-gold/90 transition-all duration-300 font-bold disabled:opacity-70"
      >
        {submitting
          ? "Sending..."
          : buttonLabel || `Get My Free ${service} Estimate`}
      </button>
      <p className="text-center text-xs text-cream/50">
        No spam. No sales pressure. Matt personally calls every lead.
      </p>
    </form>
  );
}
