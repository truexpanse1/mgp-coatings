import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "pool-deck-coatings")!;

export const metadata: Metadata = {
  title: "Pool Deck Coatings San Luis Obispo | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Pool Deck Coatings | MGP Coatings",
    description: service.description,
  },
};

export default function PoolDeckCoatingsPage() {
  return <ServicePageTemplate {...service} />;
}
