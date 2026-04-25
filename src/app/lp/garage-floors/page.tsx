import type { Metadata } from "next";
import LandingPage, { LandingPageData } from "@/components/lp/LandingPage";
import landingPages from "@/data/landing-pages.json";

const data = (landingPages as Record<string, LandingPageData>)["garage-floors"];

export const metadata: Metadata = {
  title: "Garage Floor Coatings in SLO County | 15-Year Warranty | MGP Coatings",
  description:
    "Transform your garage in 1-2 days. Polyaspartic + epoxy systems. 94 five-star reviews. 15-year warranty. Free estimate. (805) 952-5301.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://mgpcoatings.solutions/lp/garage-floors/" },
};

export default function Page() {
  return <LandingPage data={data} />;
}
