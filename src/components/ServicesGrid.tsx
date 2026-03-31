"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import services from "@/data/services.json";

export default function ServicesGrid() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <SectionLabel label="Our Services" />
          <h2 className="font-playfair text-4xl md:text-5xl text-cream mt-3">
            Concrete Coatings & More
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
              <Link href={`/${service.slug}`} className="group block relative overflow-hidden rounded-xl aspect-[4/3]">
                {/* Image / Placeholder */}
                <div className="absolute inset-0 bg-surface">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-playfair text-xl text-cream group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm mt-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {service.description}
                  </p>
                  <span className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
