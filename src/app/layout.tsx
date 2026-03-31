import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

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

const siteUrl = "https://mgpcoatings.solutions";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MGP Coatings | Premium Concrete Coatings in San Luis Obispo County",
    template: "%s | MGP Coatings",
  },
  description:
    "30+ years of professional concrete coatings, epoxy flooring, and painting services across SLO County. Garage floors, pool decks, patios, driveways. One-day installation. Call (805) 952-5301.",
  keywords: [
    "concrete coatings",
    "epoxy flooring",
    "garage floor coatings",
    "pool deck coatings",
    "patio coatings",
    "driveway coatings",
    "painting",
    "San Luis Obispo",
    "SLO County",
    "Paso Robles",
    "Atascadero",
    "Central Coast",
    "MGP Coatings",
    "Matt Gifford",
  ],
  authors: [{ name: "MGP Coatings" }],
  creator: "TrueXpanse",
  openGraph: {
    title: "MGP Coatings | Premium Concrete Coatings in SLO County",
    description:
      "Transform your surfaces with 30+ years of professional coating expertise. Garage floors, pool decks, patios, and more. Call (805) 952-5301.",
    url: siteUrl,
    siteName: "MGP Coatings",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MGP Coatings - Premium Concrete Coatings in San Luis Obispo County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MGP Coatings | Premium Concrete Coatings in SLO County",
    description:
      "Transform your surfaces with 30+ years of professional coating expertise. Call (805) 952-5301.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add Google Search Console verification when ready
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${inter.variable}`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="font-inter antialiased bg-primary text-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
