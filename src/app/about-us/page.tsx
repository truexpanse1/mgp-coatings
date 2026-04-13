import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Matt Gifford - 30+ Years of Excellence",
  description:
    "Meet Matt Gifford — 30+ years of professional concrete coatings and epoxy flooring experience across San Luis Obispo County. Licensed, insured, and trusted.",
  openGraph: {
    title: "About Matt Gifford | MGP Coatings",
    description: "30+ years of professional concrete coatings and epoxy flooring across SLO County.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/about-us/" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="About Us" />
            <h1 className="font-playfair text-5xl md:text-6xl text-cream mt-3">
              Meet Matt Gifford
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              Over three decades of transforming surfaces across the Central Coast.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bio section */}
      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden max-w-lg">
                <div className="absolute inset-0 bg-surface" />
                <Image
                  src="/images/matt-headshot.jpg"
                  alt="Matt Gifford — Owner of MGP Coatings"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="gold-line mb-6" />
                <h2 className="font-playfair text-3xl text-cream">
                  A Lifetime of Craftsmanship
                </h2>
                <div className="mt-6 space-y-4 text-muted leading-relaxed">
                  <p>
                    Matt Gifford was born and raised in Tulare County. In 2019 he
                    launched MGP Coatings, building a reputation for quality
                    craftsmanship over more than 30 years in the trade. Two and a half
                    years ago he moved to the Central Coast, and in 2024 expanded into
                    surface coatings — becoming MGP Coatings, one of San Luis Obispo
                    County&apos;s most trusted names in concrete coatings and epoxy flooring.
                  </p>
                  <p>
                    Every project Matt takes on reflects his commitment to quality. From
                    the initial consultation to the final walk-through, he&apos;s
                    personally involved — ensuring every surface meets his exacting
                    standards.
                  </p>
                  <p>
                    Matt&apos;s deep knowledge of California&apos;s unique climate
                    challenges — intense UV, coastal salt air, temperature swings — means
                    he selects the right materials and techniques for lasting results, not
                    just a good first impression.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-24">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel label="Our Values" />
              <h2 className="font-playfair text-4xl text-cream mt-3">
                What Sets Us Apart
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Over Quantity",
                text: "We take on a limited number of projects to ensure each one gets the attention it deserves. No assembly-line work — ever.",
              },
              {
                title: "Honest Communication",
                text: "Straight talk, accurate quotes, and realistic timelines. We tell you what needs to be done, not what you want to hear.",
              },
              {
                title: "Stand Behind Our Work",
                text: "We use professional-grade materials and proven techniques. If something isn't right, we make it right — period.",
              },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.15}>
                <div className="bg-surface rounded-xl p-8 border border-white/5 h-full">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Check size={18} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-xl text-cream mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
