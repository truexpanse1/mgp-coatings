#!/usr/bin/env node
/**
 * Fetch reviews from GoHighLevel's Reputation API and write them to
 * src/data/google-reviews.json (same schema as fetch-google-reviews.mjs).
 *
 * Env vars:
 *   GHL_API_KEY       Private Integration key with reputation read scope
 *   GHL_LOCATION_ID   MGP Coatings' GHL sub-account locationId
 *   GHL_API_VERSION   Optional, defaults to "2021-07-28"
 *
 * If either required env var is missing, the script exits 0 without
 * touching the output file — so builds never fail, and fetch-google-reviews.mjs
 * (which runs next) can still try the Places API path.
 *
 * On success, the file is tagged with `source: "ghl"` so the Google Places
 * fallback skips overwriting it.
 */

import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "..", "src", "data", "google-reviews.json");

const apiKey = process.env.GHL_API_KEY;
const locationId = process.env.GHL_LOCATION_ID;
const version = process.env.GHL_API_VERSION || "2021-07-28";

function seedEmpty() {
  if (!existsSync(OUTPUT_PATH)) {
    writeFileSync(
      OUTPUT_PATH,
      JSON.stringify({ fetchedAt: null, rating: null, total: 0, reviews: [] }, null, 2) + "\n"
    );
  }
}

if (!apiKey || !locationId) {
  console.log("[reviews:ghl] GHL_API_KEY or GHL_LOCATION_ID not set — skipping GHL reviews fetch.");
  seedEmpty();
  process.exit(0);
}

const endpoint = `https://services.leadconnectorhq.com/reputation/reviews?locationId=${encodeURIComponent(
  locationId
)}&limit=20`;

try {
  console.log(`[reviews:ghl] Fetching reviews for location ${locationId}…`);
  const res = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: version,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GHL reputation API ${res.status}: ${body.slice(0, 400)}`);
  }

  const data = await res.json();
  const rawReviews = Array.isArray(data.reviews)
    ? data.reviews
    : Array.isArray(data.data)
      ? data.data
      : [];

  const reviews = rawReviews
    .filter((r) => (r.rating ?? 0) >= 4 && (r.reviewBody || r.comment || r.text))
    .map((r) => ({
      name: r.reviewerName || r.reviewer?.name || r.authorName || "Customer",
      avatar: r.reviewerPhoto || r.reviewer?.photoUrl || null,
      rating: r.rating ?? 5,
      relativeTime: r.reviewDate || r.createdAt || r.publishTime || null,
      text: r.reviewBody || r.comment || r.text || "",
      platform: (r.platform || r.source || "Google").toString().replace(/^\w/, (c) => c.toUpperCase()),
    }))
    .slice(0, 12);

  const ratedReviews = reviews.filter((r) => typeof r.rating === "number");
  const avgRating = ratedReviews.length
    ? ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length
    : null;

  const payload = {
    source: "ghl",
    fetchedAt: new Date().toISOString(),
    locationId,
    rating: data.averageRating ?? data.rating ?? avgRating,
    total: data.total ?? data.totalReviews ?? reviews.length,
    reviews,
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2) + "\n");
  console.log(
    `[reviews:ghl] Wrote ${reviews.length} review(s) to ${OUTPUT_PATH} ` +
      `(overall ${payload.rating ?? "n/a"}★ from ${payload.total} ratings)`
  );
} catch (err) {
  console.error(`[reviews:ghl] Failed to fetch reviews: ${err.message}`);
  // Don't break the build — let the Google Places script try next.
  seedEmpty();
  process.exit(0);
}
