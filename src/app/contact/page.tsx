import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact MGP Coatings | Free Estimate in SLO County",
  description:
    "Get a free, no-obligation estimate for concrete coatings, epoxy flooring, or painting in San Luis Obispo County. Call (805) 952-5301 or submit our online form.",
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
