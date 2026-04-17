"use client";

import { Star, Shield, Award, Clock } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import googleData from "@/data/google-reviews.json";

type DisplayReview = {
  name: string;
  rating: number;
  text: string;
  platform: string;
  avatar?: string | null;
  relativeTime?: string | null;
};

// Shape of the JSON that scripts/fetch-ghl-reviews.mjs or
// scripts/fetch-google-reviews.mjs writes into src/data/google-reviews.json
// at build time. Loose typing on purpose — the UI degrades gracefully.
type GoogleReviewsData = {
  source?: string;
  fetchedAt?: string | null;
  rating?: number | null;
  total?: number;
  reviews?: Array<{
    name: string;
    rating?: number;
    text: string;
    platform?: string;
    avatar?: string | null;
    relativeTime?: string | null;
  }>;
};

const google = googleData as GoogleReviewsData;

const realReviews: DisplayReview[] = Array.isArray(google?.reviews)
  ? google.reviews.map((r) => ({
      name: r.name,
      rating: r.rating ?? 5,
      text: r.text,
      platform: r.platform ?? "Google",
      avatar: r.avatar ?? null,
      relativeTime: r.relativeTime ?? null,
    }))
  : [];

const hasRealReviews = realReviews.length >= 3;
const overallRating = google?.rating ?? null;
const totalRatings = google?.total ?? null;

export default function Reviews() {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-site mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel label="Client Reviews" />
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mt-3">
              {hasRealReviews ? "What People Are Saying" : "Trusted Across the Central Coast"}
            </h2>
            {hasRealReviews && totalRatings ? (
              <p className="text-muted text-sm mt-3">
                {(overallRating ?? 5).toFixed(1)}★ average from {totalRatings} Google reviews
              </p>
            ) : null}
          </div>
        </FadeIn>

        {hasRealReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realReviews.slice(0, 6).map((review, i) => (
              <FadeIn key={`${review.name}-${i}`} delay={i * 0.15}>
                <div className="bg-surface rounded-xl p-8 border border-white/5 h-full flex flex-col">
                  <span className="font-playfair text-5xl text-gold/30 leading-none mb-4">
                    &ldquo;
                  </span>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-cream/80 text-sm leading-relaxed flex-1">{review.text}</p>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <p className="text-cream font-medium text-sm">{review.name}</p>
                    <p className="text-muted text-xs mt-1">
                      via {review.platform}
                      {review.relativeTime ? ` · ${review.relativeTime}` : ""}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Award, label: "BBB A+ Rated", sub: "Accredited since 2024" },
                { icon: Shield, label: "Licensed, Bonded & Insured", sub: "CA License #1061424" },
                { icon: Clock, label: "30+ Years Experience", sub: "Central Coast craftsmanship" },
              ].map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.15}>
                  <div className="bg-surface rounded-xl p-8 border border-white/5 h-full flex flex-col items-center text-center">
                    <item.icon className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
                    <p className="text-cream font-playfair text-xl mb-2">{item.label}</p>
                    <p className="text-muted text-sm">{item.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-cream/80 text-base mb-6 max-w-2xl mx-auto">
                  Read verified reviews from real MGP Coatings customers on our Google, Facebook, and BBB profiles.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://www.google.com/search?q=MGP+Coatings+Atascadero+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-medium rounded-lg hover:bg-gold/90 transition-colors"
                  >
                    Read Reviews on Google
                  </a>
                  <a
                    href="https://www.facebook.com/MGPcoatings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream font-medium rounded-lg hover:border-gold/60 hover:text-gold transition-colors"
                  >
                    Facebook Reviews
                  </a>
                  <a
                    href="https://www.bbb.org/us/ca/atascadero/profile/general-contractor/mgp-coatings-llc-1236-92088370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-cream/20 text-cream font-medium rounded-lg hover:border-gold/60 hover:text-gold transition-colors"
                  >
                    BBB Profile
                  </a>
                </div>
              </div>
            </FadeIn>
          </>
        )}

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
