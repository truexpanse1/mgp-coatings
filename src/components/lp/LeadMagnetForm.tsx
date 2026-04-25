"use client";

import { useState } from "react";

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
  const [error, setError] = useState<string | null>(null);

  const inputBase =
    "w-full px-4 py-3 rounded-lg text-sm font-inter transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 bg-surface/80 border border-gold/20 text-cream placeholder:text-cream/50";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("first_name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service,
      sourcePage,
      leadMagnetTag,
      leadMagnetTitle,
      leadMagnetFilename,
    };

    try {
      const res = await fetch("/.netlify/functions/lead-magnet-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || "Something went wrong. Please try again.");
      }

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
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-gold text-5xl mb-4">✓</div>
        <h3 className="font-playfair text-2xl text-cream mb-3">
          Your guide is on its way.
        </h3>
        <p className="text-cream/70 text-sm mb-4">
          Check your email in the next 2 minutes. If you don&apos;t see it,
          check your spam folder.
        </p>
        <a
          href={`/downloads/${leadMagnetFilename}`}
          download
          className="inline-block font-montserrat text-xs uppercase tracking-[0.12em] bg-gold text-primary px-6 py-3 rounded-lg hover:bg-gold/90 font-bold"
        >
          Or Download It Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
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
      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full font-montserrat text-sm uppercase tracking-[0.12em] bg-gold text-primary px-6 py-3.5 rounded-lg hover:bg-gold/90 transition-all duration-300 font-bold disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Send Me the Free Guide"}
      </button>
      <p className="text-center text-xs text-cream/50">
        We&apos;ll email the guide and send a few helpful follow-ups. Unsubscribe
        any time.
      </p>
    </form>
  );
}
