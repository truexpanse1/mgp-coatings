import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "patio-coatings")!;

export const metadata: Metadata = {
  title: "Patio Coatings San Luis Obispo | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Patio Coatings | MGP Coatings",
    description: service.description,
  },
};

export default function PatioCoatingsPage() {
  return <ServicePageTemplate {...service} />;
}
