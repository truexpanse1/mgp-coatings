import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact MGP Coatings | Free Estimate in San Luis Obispo County",
  description:
    "Get a free, no-obligation estimate for concrete coatings or epoxy flooring in San Luis Obispo County. Call (805) 952-5301 or submit our online form. Response within 24 hours.",
  keywords: [
    "contact mgp coatings",
    "free estimate concrete coatings",
    "san luis obispo coating contractor",
    "805 952 5301",
    "paso robles epoxy estimate",
    "atascadero coating quote",
  ],
  openGraph: {
    type: "website",
    url: "https://mgpcoatings.solutions/contact/",
    title: "Contact MGP Coatings | Free Estimate",
    description: "Get a free estimate for concrete coatings or epoxy flooring in SLO County. Call (805) 952-5301.",
    siteName: "MGP Coatings",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Contact MGP Coatings — Free Estimate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MGP Coatings | Free Estimate",
    description: "Free estimate for concrete coatings in SLO County. Call (805) 952-5301.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-8 bg-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="Contact Us" />
            <h1 className="font-playfair text-5xl md:text-6xl text-cream mt-3">
              Get Your Free Estimate
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              Ready to transform your space? Reach out today — most estimates are
              provided within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
