import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "patio-coatings")!;

export const metadata: Metadata = {
  title: "Patio Coatings SLO County | Designer Decorative Concrete | MGP Coatings",
  description: service.description,
  keywords: ["patio coatings", "decorative concrete", "patio resurfacing", "san luis obispo", "paso robles", "atascadero"],
  openGraph: {
    title: "Patio Coatings | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/patio-coatings/" },
};

export default function PatioCoatingsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <FAQPageJsonLd faqs={service.faqs} />
      <ServicePageTemplate {...service} />
    </>
  );
}
