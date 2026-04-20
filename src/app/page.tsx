import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyMGP from "@/components/WhyMGP";
import ProcessSteps from "@/components/ProcessSteps";
import MeetMatt from "@/components/MeetMatt";
import GalleryPreview from "@/components/GalleryPreview";
import Reviews from "@/components/Reviews";
import Partners from "@/components/Partners";
import CTASection from "@/components/CTASection";
import IrresistibleOffer from "@/components/IrresistibleOffer";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "MGP Coatings | Premium Concrete Coatings & Epoxy Flooring in SLO County",
  description:
    "MGP Coatings delivers premium concrete coatings, epoxy flooring, and epoxy countertops across San Luis Obispo County. 30+ years experience. Most projects completed in 1-2 days. Free on-site estimate. Call (805) 952-5301.",
  openGraph: {
    type: "website",
    url: "https://mgpcoatings.solutions/",
    title: "MGP Coatings | Premium Concrete Coatings in SLO County",
    description:
      "Garage floors, pool decks, patios, driveways, epoxy flooring and countertops. 30+ years of experience. Free on-site estimate. Call (805) 952-5301.",
    siteName: "MGP Coatings",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "MGP Coatings — Premium Concrete Coatings in SLO County" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MGP Coatings | Premium Concrete Coatings in SLO County",
    description: "Garage floors, pool decks, patios, driveways, epoxy flooring. 30+ years experience.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mgpcoatings.solutions/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Visually hidden h1 for SEO — visible headline is in HeroSlider */}
      <h1 className="sr-only">
        MGP Coatings — Premium Concrete Coatings, Epoxy Flooring, and Epoxy Countertops in San Luis Obispo County, California
      </h1>
      <HeroSlider />
      <StatsBar />
      <IrresistibleOffer variant="band" />
      <ServicesGrid />
      <WhyMGP />
      <ProcessSteps />
      <MeetMatt />
      <GalleryPreview />
      <Reviews />
      <Partners />
      <CTASection />
      <RelatedLinks />
    </>
  );
}
