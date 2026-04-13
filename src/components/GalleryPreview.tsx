"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const galleryImages = [
  { src: "/images/gallery/garage-001-ocean-1.jpg", label: "Metallic Ocean Garage Floor" },
  { src: "/images/gallery/pool-036-summer-1.jpg", label: "Pool Deck Coating" },
  { src: "/images/gallery/patio-042-wow-2.jpg", label: "Front Porch Coating" },
  { src: "/images/gallery/epoxy-003-commercial-1.jpg", label: "Commercial Epoxy Floor" },
  { src: "/images/gallery/counter-010-earth-1.jpg", label: "Epoxy Countertop" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel label="Our Work" />
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mt-3">
              Recent Projects
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.08}>
              <Link href="/results/" className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer block">
                <div className="absolute inset-0 bg-surface" />
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center">
                  <span className="font-montserrat text-xs uppercase tracking-[0.15em] text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label} →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/results"
              className="font-montserrat text-xs uppercase tracking-[0.15em] border border-gold text-gold px-8 py-4 rounded hover:bg-gold hover:text-primary transition-all duration-300 inline-block"
            >
              View Full Gallery
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
