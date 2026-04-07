"use client";

import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import offers from "@/data/offers.json";

interface IrresistibleOfferProps {
  variant?: "band" | "card" | "inline";
  className?: string;
}

/**
 * Site-wide irresistible offer component. Renders the current offer from
 * offers.json in three styles:
 *  - "band":   Full-width horizontal band (homepage, between sections)
 *  - "card":   Boxed card (service pages, sidebars)
 *  - "inline": Compact inline strip (above CTA forms)
 */
export default function IrresistibleOffer({ variant = "band", className = "" }: IrresistibleOfferProps) {
  const o = offers.current;

  if (variant === "inline") {
    return (
      <div className={`bg-gold/10 border border-gold/30 rounded-lg px-5 py-3 flex items-center gap-3 ${className}`}>
        <Sparkles size={18} className="text-gold shrink-0" />
        <p className="text-cream text-sm">
          <span className="font-bold">{o.headline}</span>
          <span className="text-cream/70"> — {o.subheadline}</span>
        </p>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <FadeIn>
        <div className={`bg-gradient-to-br from-gold/15 via-gold/5 to-transparent border-2 border-gold/40 rounded-2xl p-6 md:p-8 ${className}`}>
          <div className="flex items-start gap-3 mb-3">
            <Sparkles size={22} className="text-gold shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                Limited Time Offer
              </p>
              <h3 className="font-playfair text-2xl md:text-3xl text-cream mt-1 leading-tight">
                {o.headline}
              </h3>
              <p className="text-cream/70 text-sm mt-1">{o.subheadline}</p>
            </div>
          </div>
          <p className="text-cream/80 text-sm leading-relaxed mb-5">{o.valueProposition}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-7 py-3 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
            >
              {o.ctaText}
            </Link>
            <a
              href="tel:8059525301"
              className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] border border-cream/30 text-cream px-7 py-3 rounded hover:border-gold hover:text-gold transition-all duration-300"
            >
              <Phone size={14} />
              (805) 952-5301
            </a>
          </div>
          <p className="text-cream/40 text-[10px] mt-4 italic">{o.fineprint}</p>
        </div>
      </FadeIn>
    );
  }

  // band (default)
  return (
    <section className={`bg-gradient-to-r from-gold/15 via-gold/5 to-gold/15 border-y border-gold/30 py-10 ${className}`}>
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="flex items-start gap-4">
              <Sparkles size={32} className="text-gold shrink-0 hidden md:block mt-1" />
              <div>
                <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                  {o.expiresLabel}
                </p>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-cream mt-1 leading-tight">
                  {o.headline}
                </h2>
                <p className="text-cream/70 text-sm md:text-base mt-1">{o.subheadline}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-8 py-4 rounded hover:bg-gold/90 transition-all duration-300 font-bold whitespace-nowrap"
              >
                {o.ctaText}
              </Link>
              <a
                href="tel:8059525301"
                className="inline-flex items-center gap-2 font-montserrat text-xs uppercase tracking-[0.15em] border border-cream/30 text-cream px-6 py-4 rounded hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap"
              >
                <Phone size={14} />
                (805) 952-5301
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
