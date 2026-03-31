"use client";

import FadeIn from "./FadeIn";

const stats = [
  { number: "30+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "5\u2605", label: "Rated on Google & Yelp" },
  { number: "10+", label: "Regions Served" },
];

export default function StatsBar() {
  return (
    <section className="bg-secondary border-y border-white/5">
      <div className="max-w-site mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} direction="up">
              <div
                className={`text-center ${
                  i < stats.length - 1
                    ? "md:border-r md:border-gold/20"
                    : ""
                }`}
              >
                <div className="font-playfair text-3xl md:text-4xl text-gold font-bold">
                  {stat.number}
                </div>
                <div className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-muted mt-2">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
