import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "pool-deck-coatings")!;
const PAGE_URL = "https://mgpcoatings.solutions/pool-deck-coatings/";

export const metadata: Metadata = {
  title: "Pool Deck Coatings SLO County | Slip-Resistant & Durable | MGP Coatings",
  description: service.description,
  keywords: ["pool deck coatings", "slip resistant pool deck", "cool deck", "pool surround", "san luis obispo", "paso robles", "pismo beach", "central coast"],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Pool Deck Coatings SLO County | MGP Coatings",
    description: service.description,
    siteName: "MGP Coatings",
    images: [{ url: service.image, width: 1200, height: 630, alt: "Pool deck coatings by MGP Coatings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pool Deck Coatings SLO County | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: PAGE_URL },
};

export default function PoolDeckCoatingsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={PAGE_URL} />
      <FAQPageJsonLd faqs={service.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://mgpcoatings.solutions/" },
          { name: service.title, url: PAGE_URL },
        ]}
      />
      <ServicePageTemplate {...service} />
    </>
  );
}
