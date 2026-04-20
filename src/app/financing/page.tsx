import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Financing | Payment Options for Coating Projects",
  description:
    "Financing options may be available for concrete coatings and epoxy flooring projects in San Luis Obispo County. Contact MGP Coatings to discuss what works for your budget.",
  keywords: [
    "epoxy flooring financing",
    "concrete coating payment options",
    "san luis obispo home improvement financing",
    "coating project budget",
  ],
  openGraph: {
    type: "website",
    url: "https://mgpcoatings.solutions/financing/",
    title: "Financing May Be Available | MGP Coatings",
    description: "Financing may be available for concrete coatings and epoxy flooring in SLO County. Contact us to learn more.",
    siteName: "MGP Coatings",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "MGP Coatings financing options" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financing May Be Available | MGP Coatings",
    description: "Financing may be available for coating projects in SLO County.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/financing/" },
};

export default function FinancingPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="Financing" />
            <h1 className="font-playfair text-5xl md:text-6xl text-cream mt-3">
              Financing May Be Available
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              We understand that home improvement projects are an investment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="bg-surface rounded-xl p-10 border border-white/5 text-center max-w-2xl mx-auto">
              <h3 className="font-playfair text-2xl text-cream">
                Let&apos;s Talk About Your Project
              </h3>
              <p className="text-muted mt-4 leading-relaxed">
                Financing options may be available depending on your project.
                Contact us to discuss what options might work for your budget.
              </p>
              <a
                href="tel:8059525301"
                className="inline-block mt-6 font-montserrat text-xs uppercase tracking-[0.15em] bg-gold text-primary px-8 py-4 rounded hover:bg-gold/90 transition-all duration-300 font-bold"
              >
                Call (805) 952-5301
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
