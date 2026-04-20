import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Service Areas | Coatings Across San Luis Obispo County, CA",
  description:
    "MGP Coatings serves all of San Luis Obispo County — San Luis Obispo, Paso Robles, Atascadero, Templeton, Pismo Beach, Morro Bay, Los Osos, Cayucos, Cambria, Santa Margarita, San Miguel, and Avila Beach.",
  keywords: [
    "slo county coating contractor",
    "san luis obispo service area",
    "paso robles epoxy",
    "atascadero concrete coatings",
    "templeton garage floors",
    "morro bay pool deck",
    "pismo beach patio coatings",
    "central coast california",
  ],
  openGraph: {
    type: "website",
    url: "https://mgpcoatings.solutions/service-areas/",
    title: "Service Areas | MGP Coatings",
    description: "Serving all of SLO County — SLO, Paso Robles, Atascadero, Pismo Beach, and more.",
    siteName: "MGP Coatings",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "MGP Coatings service areas in SLO County" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | MGP Coatings",
    description: "Serving all of San Luis Obispo County, CA.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/service-areas/" },
};

const cities = [
  "San Luis Obispo",
  "Paso Robles",
  "Atascadero",
  "Templeton",
  "Pismo Beach",
  "Morro Bay",
  "Los Osos",
  "Cayucos",
  "Cambria",
  "Santa Margarita",
  "San Miguel",
  "Avila Beach",
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="Service Areas" />
            <h1 className="font-playfair text-5xl md:text-6xl text-cream mt-3">
              Serving All of SLO County
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              From Paso Robles to Pismo Beach, we bring 30+ years of coating expertise
              to every corner of San Luis Obispo County.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel label="Communities We Serve" />
              <h2 className="font-playfair text-3xl text-cream mt-3">
                Find Us in Your Neighborhood
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <FadeIn key={city} delay={i * 0.05}>
                <div className="bg-surface rounded-xl p-5 border border-white/5 flex items-center gap-3 hover:border-gold/30 transition-colors">
                  <MapPin size={16} className="text-gold shrink-0" />
                  <span className="text-cream text-sm">{city}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-muted">
                Don&apos;t see your area listed? We may still be able to help.
              </p>
              <a
                href="tel:8059525301"
                className="inline-block mt-4 font-montserrat text-xs uppercase tracking-[0.15em] text-gold hover:text-cream transition-colors"
              >
                Call to check availability &rarr;
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
