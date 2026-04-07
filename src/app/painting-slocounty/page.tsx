import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "painting-slocounty")!;

export const metadata: Metadata = {
  title: "Professional Painters SLO County | 30+ Years Experience | MGP Coatings",
  description: service.description,
  keywords: ["interior painting", "exterior painting", "house painting", "commercial painting", "san luis obispo", "paso robles", "atascadero", "central coast painters"],
  openGraph: {
    title: "Professional Painting | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/painting-slocounty/" },
};

export default function PaintingPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <FAQPageJsonLd faqs={service.faqs} />
      <ServicePageTemplate {...service} />
    </>
  );
}
