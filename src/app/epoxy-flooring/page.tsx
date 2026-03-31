import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "epoxy-flooring")!;

export const metadata: Metadata = {
  title: "Epoxy Flooring San Luis Obispo | MGP Coatings",
  description: service.description,
  openGraph: {
    title: "Epoxy Flooring | MGP Coatings",
    description: service.description,
  },
};

export default function EpoxyFlooringPage() {
  return <ServicePageTemplate {...service} />;
}
