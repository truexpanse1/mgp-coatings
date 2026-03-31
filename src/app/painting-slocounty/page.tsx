import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "painting-slocounty")!;

export const metadata: Metadata = {
  title: "Professional Painting San Luis Obispo County | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Professional Painting | MGP Coatings",
    description: service.description,
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/painting-slocounty/" },
};

export default function PaintingPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <ServicePageTemplate {...service} />
    </>
  );
}
