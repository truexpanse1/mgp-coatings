"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import reviews from "@/data/reviews.json";

export default function Reviews() {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel label="Client Reviews" />
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mt-3">
              What People Are Saying
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.15}>
              <div className="bg-surface rounded-xl p-8 border border-white/5 h-full flex flex-col">
                {/* Gold quote mark */}
                <span className="font-playfair text-5xl text-gold/30 leading-none mb-4">
                  &ldquo;
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-cream/80 text-sm leading-relaxed flex-1">
                  {review.text}
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-cream font-medium text-sm">{review.name}</p>
                  <p className="text-muted text-xs mt-1">
                    via {review.platform}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Platform badges */}
        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-8 mt-12">
            {["Google", "Yelp", "Facebook"].map((platform) => (
              <span
                key={platform}
                className="font-montserrat text-[10px] uppercase tracking-[0.15em] text-muted/50 hover:text-muted transition-colors"
              >
                {platform}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
