import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "epoxy-flooring")!;
const PAGE_URL = "https://mgpcoatings.solutions/epoxy-flooring/";

export const metadata: Metadata = {
  title: "Epoxy Flooring SLO County | Commercial & Residential | MGP Coatings",
  description: service.description,
  keywords: ["epoxy flooring", "commercial epoxy", "industrial flooring", "warehouse floor", "san luis obispo", "paso robles", "metallic epoxy", "polyurea flooring", "slo county"],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Epoxy Flooring SLO County | MGP Coatings",
    description: service.description,
    siteName: "MGP Coatings",
    images: [{ url: service.image, width: 1200, height: 630, alt: "Epoxy flooring by MGP Coatings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring SLO County | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: PAGE_URL },
};

export default function EpoxyFlooringPage() {
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
