import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "pool-deck-coatings")!;

export const metadata: Metadata = {
  title: "Pool Deck Coatings SLO County | Slip-Resistant & Durable | MGP Coatings",
  description: service.description,
  keywords: ["pool deck coatings", "slip resistant pool deck", "san luis obispo", "paso robles", "central coast"],
  openGraph: {
    title: "Pool Deck Coatings | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/pool-deck-coatings/" },
};

export default function PoolDeckCoatingsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <FAQPageJsonLd faqs={service.faqs} />
      <ServicePageTemplate {...service} />
    </>
  );
}
