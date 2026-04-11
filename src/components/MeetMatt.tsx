"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

export default function MeetMatt() {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <FadeIn direction="left">
            <div>
              <div className="gold-line mb-6" />
              <SectionLabel label="Meet The Owner" />
              <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
                Matt Gifford
              </h2>
              <p className="text-muted mt-6 leading-relaxed">
                Matt Gifford started Matt Gifford Painting in 2019, bringing over 30
                years of trade experience to every job. In 2024 he expanded into surface
                coatings and became MGP Coatings — built on a simple foundation: do
                excellent work, treat people right, and stand behind every project.
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                Born and raised in Tulare County, Matt moved to the Central Coast two
                and a half years ago — and quickly became one of the area&apos;s most
                in-demand coatings professionals. He knows the unique challenges
                California surfaces face, from UV exposure to coastal moisture, and
                brings decades of hands-on craftsmanship to every project.
              </p>
              <a
                href="/about-us"
                className="inline-flex items-center gap-2 mt-8 font-montserrat text-xs uppercase tracking-[0.15em] text-gold hover:text-cream transition-colors"
              >
                Learn More About Matt &rarr;
              </a>
            </div>
          </FadeIn>

          {/* Photo */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden max-w-md lg:ml-auto">
              <div className="absolute inset-0 bg-surface" />
              <Image
                src="/images/matt-headshot.jpg"
                alt="Matt Gifford - Owner of MGP Coatings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
