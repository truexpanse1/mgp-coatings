import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "garage-floor-coatings")!;

export const metadata: Metadata = {
  title: "Garage Floor Coatings San Luis Obispo County | Fast Professional Install | MGP Coatings",
  description: service.description,
  keywords: ["garage floor coatings", "epoxy garage floor", "polyaspartic", "san luis obispo", "paso robles", "atascadero", "metallic epoxy"],
  openGraph: {
    title: "Garage Floor Coatings | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/garage-floor-coatings/" },
};

export default function GarageFloorCoatingsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <FAQPageJsonLd faqs={service.faqs} />
      <ServicePageTemplate {...service} />
    </>
  );
}
