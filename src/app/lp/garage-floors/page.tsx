import type { Metadata } from "next";
import LandingPage, { LandingPageData } from "@/components/lp/LandingPage";
import landingPages from "@/data/landing-pages.json";

const data = (landingPages as Record<string, LandingPageData>)["garage-floors"];

export const metadata: Metadata = {
  title: "Garage Floor Coatings in SLO County | Premium Warranty | MGP Coatings",
  description:
    "Transform your garage in 1-2 days. Polyurea + polyaspartic systems. 94 five-star reviews. Premium workmanship warranty. Free estimate. (805) 952-5301.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://mgpcoatings.solutions/lp/garage-floors/" },
};

export default function Page() {
  return <LandingPage data={data} />;
}
