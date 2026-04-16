#!/usr/bin/env node
/**
 * Fetch Google Reviews from Places API (New) and write them to
 * src/data/google-reviews.json. Intended to be run before `next build`
 * (either locally via `npm run reviews:pull` or as part of the Netlify
 * build command).
 *
 * Environment variables (set locally in .env.local or on Netlify):
 *   GOOGLE_PLACES_API_KEY   Google Cloud API key with "Places API (New)" enabled
 *   GOOGLE_PLACE_ID         MGP Coatings' Place ID (e.g. ChIJ...)
 *
 * If either env var is missing, the script exits 0 without touching the
 * output file — so builds never fail because of a missing key, they just
 * fall back to whatever reviews are already checked in.
 *
 * Google's Places API caps reviews at 5 per request (hard platform limit),
 * so the written JSON will contain at most 5 of the most relevant reviews.
 */

import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "..", "src", "data", "google-reviews.json");

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!apiKey || !placeId) {
  console.log(
    "[reviews:pull] GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set — skipping Google reviews fetch."
  );
  // Ensure the file exists so the import in Reviews.tsx never fails.
  if (!existsSync(OUTPUT_PATH)) {
    writeFileSync(
      OUTPUT_PATH,
      JSON.stringify({ fetchedAt: null, rating: null, total: 0, reviews: [] }, null, 2) + "\n"
    );
    console.log(`[reviews:pull] Seeded empty ${OUTPUT_PATH}`);
  }
  process.exit(0);
}

const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
const fieldMask = "id,displayName,rating,userRatingCount,reviews";

try {
  console.log(`[reviews:pull] Fetching reviews for place ${placeId}…`);
  const res = await fetch(endpoint, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": fieldMask,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Places API ${res.status}: ${body}`);
  }

  const data = await res.json();
  const rawReviews = Array.isArray(data.reviews) ? data.reviews : [];

  const reviews = rawReviews.map((r) => ({
    name: r.authorAttribution?.displayName ?? "Google Reviewer",
    avatar: r.authorAttribution?.photoUri ?? null,
    rating: r.rating ?? 5,
    relativeTime: r.relativePublishTimeDescription ?? null,
    publishTime: r.publishTime ?? null,
    text: r.text?.text ?? r.originalText?.text ?? "",
    platform: "Google",
  }));

  const payload = {
    fetchedAt: new Date().toISOString(),
    placeId,
    displayName: data.displayName?.text ?? null,
    rating: data.rating ?? null,
    total: data.userRatingCount ?? reviews.length,
    reviews,
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2) + "\n");
  console.log(
    `[reviews:pull] Wrote ${reviews.length} review(s) to ${OUTPUT_PATH} ` +
      `(overall ${payload.rating ?? "n/a"}★ from ${payload.total} ratings)`
  );
} catch (err) {
  console.error(`[reviews:pull] Failed to fetch reviews: ${err.message}`);
  // Don't break the build — keep whatever's already there.
  if (!existsSync(OUTPUT_PATH)) {
    writeFileSync(
      OUTPUT_PATH,
      JSON.stringify({ fetchedAt: null, rating: null, total: 0, reviews: [] }, null, 2) + "\n"
    );
  }
  process.exit(0);
}
