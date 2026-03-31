import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "garage-floor-coatings")!;

export const metadata: Metadata = {
  title: "Garage Floor Coatings San Luis Obispo | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Garage Floor Coatings | MGP Coatings",
    description: service.description,
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/garage-floor-coatings/" },
};

export default function GarageFloorCoatingsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <ServicePageTemplate {...service} />
    </>
  );
}
