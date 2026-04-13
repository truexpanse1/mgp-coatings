"use client";

import { useState } from "react";

interface ContactFormProps {
  className?: string;
  dark?: boolean;
}

export default function ContactForm({ className = "", dark = true }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const inputBase = `w-full px-4 py-3 rounded-lg text-sm font-inter transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
    dark
      ? "bg-surface border border-white/10 text-cream placeholder:text-muted/50"
      : "bg-white/5 border border-white/10 text-cream placeholder:text-muted/50"
  }`;

  if (submitted) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-gold text-4xl mb-4">&#10003;</div>
        <h3 className="font-playfair text-2xl text-cream mb-2">Thank You!</h3>
        <p className="text-muted">
          We&apos;ve received your request and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      name="mgp-estimate"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
        })
          .then(() => setSubmitted(true))
          .catch(() => setSubmitted(true));
      }}
      className={className}
    >
      <input type="hidden" name="form-name" value="mgp-estimate" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          className={inputBase}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          className={inputBase}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className={`${inputBase} mt-4`}
      />
      <select name="service" className={`${inputBase} mt-4`} defaultValue="">
        <option value="" disabled>
          Service Interested In
        </option>
        <option value="Garage Floor Coatings">Garage Floor Coatings</option>
        <option value="Pool Deck Coatings">Pool Deck Coatings</option>
        <option value="Patio Coatings">Patio Coatings</option>
        <option value="Driveway Coatings">Driveway Coatings</option>
        <option value="Epoxy Flooring">Epoxy Flooring</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="message"
        placeholder="Tell us about your project..."
        rows={4}
        className={`${inputBase} mt-4 resize-none`}
      />
      <button
        type="submit"
        className="mt-6 w-full font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-8 py-4 rounded-lg hover:bg-gold/90 transition-all duration-300 font-bold"
      >
        Request Free Estimate
      </button>
    </form>
  );
}
