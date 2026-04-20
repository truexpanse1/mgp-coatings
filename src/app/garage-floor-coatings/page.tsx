import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "garage-floor-coatings")!;
const PAGE_URL = "https://mgpcoatings.solutions/garage-floor-coatings/";

export const metadata: Metadata = {
  title: "Garage Floor Coatings San Luis Obispo County | Fast Professional Install | MGP Coatings",
  description: service.description,
  keywords: ["garage floor coatings", "epoxy garage floor", "polyaspartic", "polyurea garage coating", "san luis obispo", "paso robles", "atascadero", "metallic epoxy", "slo county"],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Garage Floor Coatings SLO County | MGP Coatings",
    description: service.description,
    siteName: "MGP Coatings",
    images: [{ url: service.image, width: 1200, height: 630, alt: "Garage floor coatings by MGP Coatings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Floor Coatings SLO County | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: PAGE_URL },
};

export default function GarageFloorCoatingsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={PAGE_URL} />
      <FAQPageJsonLd faqs={service.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mgpcoatings.solutions/" },
          { name: service.title, url: PAGE_URL },
        ]}
      />
      <ServicePageTemplate {...service} />
    </>
  );
}
