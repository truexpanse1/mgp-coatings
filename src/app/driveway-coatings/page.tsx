import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "driveway-coatings")!;

export const metadata: Metadata = {
  title: "Driveway Coatings San Luis Obispo | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Driveway Coatings | MGP Coatings",
    description: service.description,
  },
};

export default function DrivewayCoatingsPage() {
  return <ServicePageTemplate {...service} />;
}
