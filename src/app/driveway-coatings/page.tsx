import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "driveway-coatings")!;
const PAGE_URL = "https://mgpcoatings.solutions/driveway-coatings/";

export const metadata: Metadata = {
  title: "Driveway Coatings SLO County | Hot Tire Resistant | MGP Coatings",
  description: service.description,
  keywords: ["driveway coatings", "polyaspartic driveway", "concrete driveway sealer", "san luis obispo", "paso robles", "atascadero", "curb appeal", "slo county"],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Driveway Coatings SLO County | MGP Coatings",
    description: service.description,
    siteName: "MGP Coatings",
    images: [{ url: service.image, width: 1200, height: 630, alt: "Driveway coatings by MGP Coatings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Driveway Coatings SLO County | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: PAGE_URL },
};

export default function DrivewayCoatingsPage() {
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
