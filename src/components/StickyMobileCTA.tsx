"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

/**
 * Sticky bottom CTA bar shown only on mobile (< md). Two equal-width buttons:
 * call (left) and get estimate (right). Massively boosts mobile conversion.
 */
export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary/95 backdrop-blur-md border-t border-gold/30">
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:8059525301"
          className="flex items-center justify-center gap-2 py-4 text-cream font-montserrat text-xs uppercase tracking-[0.1em] border-r border-white/10 hover:bg-white/5 transition-colors"
          aria-label="Call MGP Coatings"
        >
          <Phone size={16} className="text-gold" />
          Call Now
        </a>
        <Link
          href="/contact/"
          className="flex items-center justify-center gap-2 py-4 bg-gold text-primary font-montserrat text-xs uppercase tracking-[0.1em] font-bold hover:bg-gold/90 transition-colors"
          aria-label="Get free estimate"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
