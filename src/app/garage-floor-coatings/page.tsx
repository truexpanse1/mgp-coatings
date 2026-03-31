import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "garage-floor-coatings")!;

export const metadata: Metadata = {
  title: "Garage Floor Coatings San Luis Obispo | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Garage Floor Coatings | MGP Coatings",
    description: service.description,
  },
};

export default function GarageFloorCoatingsPage() {
  return <ServicePageTemplate {...service} />;
}
