import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery | See Real MGP Coatings Work in SLO County",
  description:
    "Browse our gallery of completed concrete coating, epoxy flooring, and epoxy countertop projects across San Luis Obispo County. Real results from real projects — garages, pool decks, patios, driveways, and more.",
  keywords: [
    "mgp coatings gallery",
    "epoxy flooring before after",
    "garage floor project gallery",
    "san luis obispo coating projects",
    "paso robles epoxy portfolio",
    "atascadero coating examples",
  ],
  openGraph: {
    type: "website",
    url: "https://mgpcoatings.solutions/results/",
    title: "Project Gallery | MGP Coatings",
    description: "Browse completed concrete coating and epoxy flooring projects across SLO County.",
    siteName: "MGP Coatings",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "MGP Coatings completed project gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | MGP Coatings",
    description: "Real coating projects across SLO County.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/results/" },
};

const galleryProjects = [
  {
    category: "Garage Floor Coatings",
    slug: "garage",
    projects: [
      {
        title: "Ocean Metallic Floor",
        location: "Atascadero, CA",
        images: [
          { src: "/images/gallery/garage-001-ocean-1.jpg", alt: "Metallic ocean blue epoxy garage floor" },
          { src: "/images/gallery/garage-001-ocean-2.jpg", alt: "Swirling blue metallic epoxy floor detail" },
          { src: "/images/gallery/garage-001-ocean-3.jpg", alt: "Completed ocean metallic garage floor" },
        ],
      },
      {
        title: "Granite Chip Garage",
        location: "Paso Robles, CA",
        images: [
          { src: "/images/gallery/garage-007-granite-1.jpg", alt: "Granite chip system garage floor" },
          { src: "/images/gallery/garage-007-granite-2.jpg", alt: "Granite chip garage floor detail" },
        ],
      },
      {
        title: "Domino Chip Man Cave",
        location: "San Luis Obispo, CA",
        images: [
          { src: "/images/gallery/garage-005-domino-1.jpg", alt: "Domino chip garage floor coating" },
          { src: "/images/gallery/garage-005-domino-2.jpg", alt: "Domino chip system detail" },
        ],
      },
    ],
  },
  {
    category: "Pool Deck Coatings",
    slug: "pool-deck",
    projects: [
      {
        title: "Summer-Ready Pool Deck",
        location: "Atascadero, CA",
        images: [
          { src: "/images/gallery/pool-036-summer-1.jpg", alt: "Chip coated pool deck with pool" },
          { src: "/images/gallery/pool-036-summer-2.jpg", alt: "Pool deck coating detail" },
          { src: "/images/gallery/pool-036-summer-3.jpg", alt: "Pool deck surrounding backyard pool" },
        ],
      },
      {
        title: "Two-Tone Quartz Pool Deck",
        location: "Paso Robles, CA",
        images: [
          { src: "/images/gallery/pool-008-quartz-1.jpg", alt: "Two-tone quartz pool deck" },
          { src: "/images/gallery/pool-008-quartz-2.jpg", alt: "Quartz pool deck border detail" },
          { src: "/images/gallery/pool-008-quartz-3.jpg", alt: "Quartz coated pool walkway" },
        ],
      },
    ],
  },
  {
    category: "Patio Coatings",
    slug: "patio",
    projects: [
      {
        title: "Front Porch & Back Patio Makeover",
        location: "Templeton, CA",
        images: [
          { src: "/images/gallery/patio-042-wow-1.jpg", alt: "Coated front porch with Adirondack chairs" },
          { src: "/images/gallery/patio-042-wow-2.jpg", alt: "Chip coated front porch close-up" },
          { src: "/images/gallery/patio-042-wow-3.jpg", alt: "Back patio with chip coating" },
        ],
      },
      {
        title: "Covered Back Porch — Flint Chip",
        location: "Templeton, CA",
        images: [
          { src: "/images/gallery/patio-038-flint-1.jpg", alt: "Flint chip covered back porch" },
          { src: "/images/gallery/patio-038-flint-2.jpg", alt: "Flint chip porch sitting area" },
        ],
      },
    ],
  },
  {
    category: "Driveway Coatings",
    slug: "driveway",
    projects: [
      {
        title: "Custom Chip Driveway & Carport",
        location: "Pismo Beach, CA",
        images: [
          { src: "/images/gallery/driveway-029-chips-1.jpg", alt: "Custom chip driveway coating" },
          { src: "/images/gallery/driveway-029-chips-2.jpg", alt: "Glossy chip coated carport surface" },
          { src: "/images/gallery/driveway-029-chips-3.jpg", alt: "Custom chip driveway detail" },
        ],
      },
      {
        title: "Drab to Rad — Smoke Chip",
        location: "Pismo Beach, CA",
        images: [
          { src: "/images/gallery/driveway-037-rad-1.jpg", alt: "Smoke chip driveway with MGP truck" },
          { src: "/images/gallery/driveway-037-rad-2.jpg", alt: "Smoke chip driveway coating detail" },
        ],
      },
    ],
  },
  {
    category: "Epoxy Flooring",
    slug: "epoxy",
    projects: [
      {
        title: "Commercial Space — Morro Bay",
        location: "Morro Bay, CA",
        images: [
          { src: "/images/gallery/epoxy-003-commercial-1.jpg", alt: "Commercial epoxy chip floor" },
          { src: "/images/gallery/epoxy-003-commercial-2.jpg", alt: "Commercial chip floor with roll-up door" },
          { src: "/images/gallery/epoxy-003-commercial-3.jpg", alt: "Commercial hallway chip floor" },
        ],
      },
      {
        title: "Jet Engine Testing Facility",
        location: "San Luis Obispo, CA",
        images: [
          { src: "/images/gallery/epoxy-002-sleek-1.jpg", alt: "Sleek solid-color epoxy industrial floor" },
          { src: "/images/gallery/epoxy-002-sleek-2.jpg", alt: "Dark epoxy floor in testing facility" },
        ],
      },
    ],
  },
  {
    category: "Epoxy Countertops",
    slug: "countertops",
    projects: [
      {
        title: "Earth Tone Kitchen Island",
        location: "Paso Robles, CA",
        images: [
          { src: "/images/gallery/counter-010-earth-1.jpg", alt: "Epoxy kitchen island in earth tones" },
          { src: "/images/gallery/counter-010-earth-2.jpg", alt: "Earth tone epoxy countertop edge" },
          { src: "/images/gallery/counter-010-earth-3.jpg", alt: "Full kitchen countertop with epoxy finish" },
        ],
      },
      {
        title: "Grey Marble Countertops",
        location: "Santa Margarita, CA",
        images: [
          { src: "/images/gallery/counter-011-marble-1.jpg", alt: "Grey marble epoxy on white cabinets" },
          { src: "/images/gallery/counter-011-marble-2.jpg", alt: "Grey marble countertop detail" },
        ],
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="Our Work" />
            <h1 className="font-playfair text-5xl md:text-6xl text-cream mt-3">
              Project Gallery
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              Real projects. Real results. Browse by service to see the quality
              of work MGP Coatings delivers across San Luis Obispo County.
            </p>
          </FadeIn>
        </div>
      </section>

      <GalleryGrid categories={galleryProjects} />

      <CTASection />
    </>
  );
}
