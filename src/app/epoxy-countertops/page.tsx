import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "epoxy-countertops")!;
const PAGE_URL = "https://mgpcoatings.solutions/epoxy-countertops/";

export const metadata: Metadata = {
  title: "Custom Epoxy Countertops SLO County | Granite-Look at Half the Cost | MGP Coatings",
  description: service.description,
  keywords: ["epoxy countertops", "custom countertops", "kitchen countertops", "outdoor bar top", "granite alternative", "san luis obispo", "paso robles", "atascadero", "templeton"],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Epoxy Countertops SLO County | MGP Coatings",
    description: service.description,
    siteName: "MGP Coatings",
    images: [{ url: service.image, width: 1200, height: 630, alt: "Custom epoxy countertops by MGP Coatings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Epoxy Countertops SLO County | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: PAGE_URL },
};

export default function EpoxyCountertopsPage() {
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
