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
  leadMagnetTag: string;
  leadMagnetTitle: string;
  leadMagnetFilename: string;
  className?: string;
}

export default function LeadMagnetForm({
  service,
  sourcePage,
  leadMagnetTag,
  leadMagnetTitle,
  leadMagnetFilename,
  className = "",
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inputBase =
    "w-full px-4 py-3 rounded-lg text-sm font-inter transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 bg-surface/80 border border-gold/20 text-cream placeholder:text-cream/50";

  const downloadUrl = `/downloads/${leadMagnetFilename}`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_magnet_download",
        service,
        lead_magnet: leadMagnetTag,
        source: sourcePage,
      });
      window.dataLayer.push({
        event: "conversion",
        conversion_type: "lead_magnet",
        service,
      });
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
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
  }

  if (submitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-gold text-5xl mb-4">✓</div>
        <h3 className="font-playfair text-2xl text-cream mb-3">
          Your guide is open in a new tab.
        </h3>
        <p className="text-cream/70 text-sm mb-4">
          Matt will follow up personally within 2 business days. If you&apos;d
          like to talk sooner, call{" "}
          <a href="tel:+18059525301" className="text-gold underline">
            (805) 952-5301
          </a>
          .
        </p>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-montserrat text-xs uppercase tracking-[0.12em] bg-gold text-primary px-6 py-3 rounded-lg hover:bg-gold/90 font-bold"
        >
          Open the Guide Again
        </a>
      </div>
    );
  }

  return (
    <form
      name="mgp-lead-magnet"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={`space-y-3 ${className}`}
    >
      <input type="hidden" name="form-name" value="mgp-lead-magnet" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="source" value={sourcePage} />
      <input type="hidden" name="service_interest" value={service} />
      <input type="hidden" name="lead_magnet" value={leadMagnetTag} />
      <input type="hidden" name="lead_magnet_title" value={leadMagnetTitle} />
      <input type="hidden" name="lead_magnet_file" value={leadMagnetFilename} />
      <input
        type="text"
        name="first_name"
        placeholder="First Name *"
        required
        className={inputBase}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address *"
        required
        className={inputBase}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className={inputBase}
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full font-montserrat text-sm uppercase tracking-[0.12em] bg-gold text-primary px-6 py-3.5 rounded-lg hover:bg-gold/90 transition-all duration-300 font-bold disabled:opacity-70"
      >
        {submitting ? "Opening..." : "Download My Free Guide"}
      </button>
      <p className="text-center text-xs text-cream/50">
        Your guide opens immediately. Matt personally follows up within 2
        business days.
      </p>
    </form>
  );
}
