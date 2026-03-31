import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import ServicesGrid from "@/components/ServicesGrid";
import WhyMGP from "@/components/WhyMGP";
import ProcessSteps from "@/components/ProcessSteps";
import MeetMatt from "@/components/MeetMatt";
import GalleryPreview from "@/components/GalleryPreview";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <ServicesGrid />
      <WhyMGP />
      <ProcessSteps />
      <MeetMatt />
      <GalleryPreview />
      <Reviews />
      <CTASection />
    </>
  );
}
