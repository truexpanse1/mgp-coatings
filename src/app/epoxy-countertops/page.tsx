import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "epoxy-countertops")!;

export const metadata: Metadata = {
  title: "Custom Epoxy Countertops SLO County | Granite-Look at Half the Cost | MGP Coatings",
  description: service.description,
  keywords: ["epoxy countertops", "custom countertops", "kitchen countertops", "outdoor bar", "granite alternative", "san luis obispo", "paso robles", "atascadero"],
  openGraph: {
    title: "Custom Epoxy Countertops | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/epoxy-countertops/" },
};

export default function EpoxyCountertopsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <FAQPageJsonLd faqs={service.faqs} />
      <ServicePageTemplate {...service} />
    </>
  );
}
