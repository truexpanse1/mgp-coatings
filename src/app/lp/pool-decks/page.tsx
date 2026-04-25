import type { Metadata } from "next";
import LandingPage, { LandingPageData } from "@/components/lp/LandingPage";
import landingPages from "@/data/landing-pages.json";

const data = (landingPages as Record<string, LandingPageData>)["pool-decks"];

export const metadata: Metadata = {
  title: "Pool Deck Coatings in SLO County | Safer. Cooler. | MGP Coatings",
  description:
    "Slip-resistant, cool-touch pool deck coatings installed in 1-2 days. 15-year warranty. 94 five-star reviews. Free estimate. (805) 952-5301.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://mgpcoatings.solutions/lp/pool-decks/" },
};

export default function Page() {
  return <LandingPage data={data} />;
}
