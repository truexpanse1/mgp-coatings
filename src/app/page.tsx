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

export const metadata: Metadata = {
  title: "MGP Coatings | Premium Concrete Coatings & Painting in SLO County",
  description:
    "MGP Coatings delivers premium concrete coatings, epoxy flooring, and professional painting across San Luis Obispo County. 30+ years experience. One-day installation. Call (805) 952-5301 for a free estimate.",
  alternates: {
    canonical: "https://mgpcoatings.solutions",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Visually hidden h1 for SEO — visible headline is in HeroSlider */}
      <h1 className="sr-only">
        MGP Coatings — Premium Concrete Coatings and Painting in San Luis Obispo County
      </h1>
      <HeroSlider />
      <StatsBar />
      <ServicesGrid />
      <WhyMGP />
      <ProcessSteps />
      <MeetMatt />
      <GalleryPreview />
      <Reviews />
      <Partners />
      <CTASection />
    </>
  );
}
