import type { Metadata } from "next";
import LandingPage, { LandingPageData } from "@/components/lp/LandingPage";
import landingPages from "@/data/landing-pages.json";

const data = (landingPages as Record<string, LandingPageData>)["garage-floors"];

export const metadata: Metadata = {
  title: "Garage Floor Coatings in SLO County | 1-Day Polyaspartic | MGP Coatings",
  description:
    "Transform your garage in 1-2 days. Polyurea basecoat + UV-stable polyaspartic topcoat — the floor that won't yellow, peel, or lift. Simiron-authorized. 101 five-star reviews. We stand behind our work. Flexible financing. Free estimate. (805) 952-5301.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://mgpcoatings.solutions/lp/garage-floors/" },
};

export default function Page() {
  return <LandingPage data={data} />;
}
