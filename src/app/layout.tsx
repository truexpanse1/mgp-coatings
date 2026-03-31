import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MGP Coatings | Premium Concrete Coatings in San Luis Obispo County",
  description:
    "30+ years of professional concrete coatings, epoxy flooring, and painting services across SLO County. Garage floors, pool decks, patios, driveways. One-day installation.",
  openGraph: {
    title: "MGP Coatings | Premium Concrete Coatings in SLO County",
    description:
      "Transform your surfaces with 30+ years of professional coating expertise. Garage floors, pool decks, patios, and more.",
    url: "https://mgpcoatings.solutions",
    siteName: "MGP Coatings",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-primary text-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
