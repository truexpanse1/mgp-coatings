"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const points = [
  "No chipping or peeling",
  "Installed in a single day",
  "30+ years professional experience",
  "Endless color and finish options",
];

export default function WhyMGP() {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-surface" />
              <Image
                src="/images/why-mgp.jpg"
                alt="Professional garage floor coating by MGP Coatings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <div className="gold-line mb-6" />
              <SectionLabel label="Why MGP Coatings" />
              <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3 leading-tight">
                Professional Results.
                <br />
                One Day Installation.
              </h2>
              <p className="text-muted mt-6 leading-relaxed">
                With over three decades of hands-on experience, Matt Gifford delivers
                coatings that don&apos;t just look incredible — they perform for years.
                Every project is completed with precision, using professional-grade
                materials that resist wear, stains, and the California elements.
              </p>
              <ul className="mt-8 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="text-cream/90 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block mt-10 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-8 py-4 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
              >
                Get Started Today
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
