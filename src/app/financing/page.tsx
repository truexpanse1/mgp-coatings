import type { Metadata } from "next";
import { CreditCard, Shield, Clock, CheckCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Financing Options - Affordable Payment Plans",
  description:
    "Flexible financing options for concrete coatings and painting projects in San Luis Obispo County. Get the floors you want with payments that work for you.",
  openGraph: {
    title: "Financing Options | MGP Coatings",
    description: "Flexible financing for concrete coatings and painting in SLO County.",
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
              Flexible Payment Options
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              Don&apos;t let budget hold you back from the floors you deserve. We
              offer flexible financing to make your project affordable.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CreditCard,
                title: "Easy Application",
                text: "Quick online application with instant decisions. No impact on your credit score to check rates.",
              },
              {
                icon: Clock,
                title: "Flexible Terms",
                text: "Choose from 6, 12, 24, or 36-month payment plans that fit your monthly budget.",
              },
              {
                icon: Shield,
                title: "Competitive Rates",
                text: "Low interest rates starting from 0% APR for qualified applicants on select promotions.",
              },
              {
                icon: CheckCircle,
                title: "Fast Approval",
                text: "Get approved in minutes so your project can start on schedule without delays.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-surface rounded-xl p-8 border border-white/5 h-full text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <item.icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-lg text-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 bg-surface rounded-xl p-10 border border-white/5 text-center max-w-2xl mx-auto">
              <h3 className="font-playfair text-2xl text-cream">
                Ready to Explore Your Options?
              </h3>
              <p className="text-muted mt-4 leading-relaxed">
                Call us to discuss financing for your project. We&apos;ll walk you
                through the options and find a plan that works for your budget.
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
