import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Project Gallery - See Our Work",
  description:
    "Browse our gallery of completed concrete coating, epoxy flooring, and painting projects across San Luis Obispo County. Real results from real projects.",
  openGraph: {
    title: "Project Gallery | MGP Coatings",
    description: "Browse completed concrete coating and painting projects across SLO County.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://mgpcoatings.solutions/results/" },
};

const galleryItems = [
  { src: "/images/garage.jpg", label: "Garage Floor Coating", category: "Garage" },
  { src: "/images/gallery-2.jpg", label: "Patio with Pool View", category: "Pool Deck" },
  { src: "/images/gallery-3.jpg", label: "Hilltop Patio Transformation", category: "Patio" },
  { src: "/images/gallery-4.jpg", label: "Driveway Coating", category: "Driveway" },
  { src: "/images/gallery-5.jpg", label: "Home Exterior", category: "Painting" },
  { src: "/images/gallery-7.jpg", label: "Commercial Epoxy Hallway", category: "Epoxy" },
  { src: "/images/gallery-8.jpg", label: "Residential Garage", category: "Garage" },
  { src: "/images/pool.jpg", label: "Interior Flooring", category: "Epoxy" },
  { src: "/images/gallery-extra/penntek-garage.jpg", label: "Flake Coating Close-Up", category: "Garage" },
  { src: "/images/gallery-extra/job-1.webp", label: "Exterior Painting Project", category: "Painting" },
  { src: "/images/gallery-extra/job-2.webp", label: "Residential Repaint", category: "Painting" },
  { src: "/images/gallery-extra/job-3.webp", label: "Curb Appeal Makeover", category: "Painting" },
  { src: "/images/gallery-extra/job-4.jpg", label: "MGP Coatings Ribbon Cutting", category: "Community" },
  { src: "/images/gallery-extra/matt-onsite.jpeg", label: "Covered Patio Project", category: "Patio" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 bg-primary">
        <div className="max-w-site mx-auto px-6">
          <FadeIn>
            <SectionLabel label="Our Work" />
            <h1 className="font-playfair text-5xl md:text-6xl text-cream mt-3">
              Project Gallery
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              Real projects. Real results. Every photo represents a satisfied client
              and a surface transformed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary pb-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <FadeIn key={item.src} delay={i * 0.05}>
                <div className="group relative aspect-square rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-surface" />
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex flex-col items-center justify-center">
                    <span className="font-playfair text-lg text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
                    <span className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                      {item.category}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
