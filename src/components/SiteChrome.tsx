"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const isLandingPage = pathname.startsWith("/lp");

  if (isLandingPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
