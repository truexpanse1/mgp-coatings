"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const partners = [
  { src: "/images/partners/slo-chamber.png", name: "SLO Chamber of Commerce" },
  { src: "/images/partners/atascadero-chamber.png", name: "Atascadero Chamber of Commerce" },
  { src: "/images/partners/paso-robles-chamber.png", name: "Paso Robles Chamber of Commerce" },
  { src: "/images/partners/white-wave-wellness.webp", name: "White Wave Wellness" },
  { src: "/images/partners/charles-paddock-zoo.png", name: "Charles Paddock Zoo" },
  { src: "/images/partners/whats-up-north-county.png", name: "What's Up North County" },
  { src: "/images/partners/le-vigne-winery.webp", name: "Le Vigne Winery" },
  { src: "/images/partners/805-customs.jpeg", name: "805 Customs" },
  { src: "/images/partner-peek-painting.png", name: "Peek Painting" },
  { src: "/images/partner-peek-realty.jpg", name: "Peek Realty" },
  { src: "/images/partners/airflow-filter-service.jpg", name: "Airflow Filter Service" },
  { src: "/images/partners/avila-wireless-normile.webp", name: "Avila Wireless & Normile Construction" },
];

export default function Partners() {
  return (
    <section className="bg-[#0a0a0a] py-20 overflow-hidden">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel label="Our Trusted Partners" />
            <h2 className="font-playfair text-3xl md:text-4xl text-cream mt-3">
              Proudly Working With
            </h2>
          </div>
        </FadeIn>

        {/* Scrolling logo marquee */}
        <div className="relative">
          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          <div className="flex animate-scroll">
            {/* Double the logos for seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center bg-white rounded-xl px-6 py-4 hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
                style={{ minWidth: "160px", maxWidth: "200px" }}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={160}
                  height={90}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation for infinite scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
