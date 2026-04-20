import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "patio-coatings")!;
const PAGE_URL = "https://mgpcoatings.solutions/patio-coatings/";

export const metadata: Metadata = {
  title: "Patio Coatings SLO County | Designer Decorative Concrete | MGP Coatings",
  description: service.description,
  keywords: ["patio coatings", "decorative concrete", "patio resurfacing", "outdoor living", "san luis obispo", "paso robles", "atascadero", "templeton"],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Patio Coatings SLO County | MGP Coatings",
    description: service.description,
    siteName: "MGP Coatings",
    images: [{ url: service.image, width: 1200, height: 630, alt: "Patio coatings by MGP Coatings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patio Coatings SLO County | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: PAGE_URL },
};

export default function PatioCoatingsPage() {
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
