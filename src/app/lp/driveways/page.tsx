import type { Metadata } from "next";
import LandingPage, { LandingPageData } from "@/components/lp/LandingPage";
import landingPages from "@/data/landing-pages.json";

const data = (landingPages as Record<string, LandingPageData>)["driveways"];

export const metadata: Metadata = {
  title: "Driveway Coatings in SLO County | #1 Curb Appeal | MGP Coatings",
  description:
    "Hot tire resistant, oil-proof polyurea + polyaspartic driveway coatings in 1-2 days. Premium workmanship warranty. 94 five-star reviews. Free estimate. (805) 952-5301.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://mgpcoatings.solutions/lp/driveways/" },
};

export default function Page() {
  return <LandingPage data={data} />;
}
