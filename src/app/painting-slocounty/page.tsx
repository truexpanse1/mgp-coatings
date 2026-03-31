import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "painting-slocounty")!;

export const metadata: Metadata = {
  title: "Professional Painting San Luis Obispo County | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Professional Painting | MGP Coatings",
    description: service.description,
  },
};

export default function PaintingPage() {
  return <ServicePageTemplate {...service} />;
}
