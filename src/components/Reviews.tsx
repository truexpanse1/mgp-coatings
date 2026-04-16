"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import placeholderReviews from "@/data/reviews.json";
import googleData from "@/data/google-reviews.json";

type DisplayReview = {
  name: string;
  rating: number;
  text: string;
  platform: string;
  avatar?: string | null;
  relativeTime?: string | null;
};

// Shape of the JSON that scripts/fetch-google-reviews.mjs writes into
// src/data/google-reviews.json at build time. Loose typing on purpose —
// the fetch script fills in what Google returns and the Reviews UI
// gracefully degrades if any field is missing.
type GoogleReviewsData = {
  rating?: number;
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

// Prefer real Google reviews when we have them (fetched by
// scripts/fetch-google-reviews.mjs at build time). Fall back to the
// curated placeholder set so the page never looks empty.
const googleReviews: DisplayReview[] = Array.isArray(google?.reviews)
  ? google.reviews.map((r) => ({
      name: r.name,
      rating: r.rating ?? 5,
      text: r.text,
      platform: r.platform ?? "Google",
      avatar: r.avatar ?? null,
      relativeTime: r.relativeTime ?? null,
    }))
  : [];

const usingGoogle = googleReviews.length > 0;
const reviews: DisplayReview[] = usingGoogle ? googleReviews : (placeholderReviews as DisplayReview[]);

const overallRating = google?.rating ?? 5;
const totalRatings = google?.total ?? null;

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
            {usingGoogle && totalRatings ? (
              <p className="text-muted text-sm mt-3">
                {overallRating.toFixed(1)}★ average from {totalRatings} Google reviews
              </p>
            ) : null}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={`${review.name}-${i}`} delay={i * 0.15}>
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
                    {review.relativeTime ? ` · ${review.relativeTime}` : ""}
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
