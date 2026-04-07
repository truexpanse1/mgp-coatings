import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "driveway-coatings")!;

export const metadata: Metadata = {
  title: "Driveway Coatings SLO County | Hot Tire Resistant | MGP Coatings",
  description: service.description,
  keywords: ["driveway coatings", "polyaspartic driveway", "concrete driveway sealer", "san luis obispo", "paso robles", "atascadero", "curb appeal"],
  openGraph: {
    title: "Driveway Coatings | MGP Coatings",
    description: service.description,
    images: [service.image],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/driveway-coatings/" },
};

export default function DrivewayCoatingsPage() {
  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} url={"https://mgpcoatings.solutions/" + service.slug + "/"} />
      <FAQPageJsonLd faqs={service.faqs} />
      <ServicePageTemplate {...service} />
    </>
  );
}
