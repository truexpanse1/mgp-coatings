# Build-time scripts

## `fetch-google-reviews.mjs`

Pulls live Google reviews for MGP Coatings from the Places API (New) and writes them to `src/data/google-reviews.json`. Runs automatically before every `next build` (see the `build` script in `package.json`).

### One-time setup

1. **Get a Google Cloud API key**
   - Go to https://console.cloud.google.com
   - Create a project (e.g. `truexpanse-client-sites`)
   - Enable **Places API (New)** under APIs & Services → Library
   - APIs & Services → Credentials → Create Credentials → API key
   - Restrict the key to Places API (New) only for safety

2. **Find MGP Coatings' Place ID**
   - Use Google's Place ID finder: https://developers.google.com/maps/documentation/places/web-service/place-id
   - Search "MGP Coatings Atascadero" (or whichever city GMB is registered to)
   - Copy the Place ID (format: `ChIJ...`)

3. **Set the env vars**

   **Locally** (for testing) — create `.env.local` in the repo root:
   ```
   GOOGLE_PLACES_API_KEY=AIza...
   GOOGLE_PLACE_ID=ChIJ...
   ```

   **On Netlify** — Site settings → Environment variables:
   - `GOOGLE_PLACES_API_KEY` = the key
   - `GOOGLE_PLACE_ID` = the Place ID

### Usage

Refresh reviews locally:
```
npm run reviews:pull
```

On Netlify, reviews refresh automatically on every deploy (the `build` script runs `reviews:pull` first).

### What gets written

`src/data/google-reviews.json`:
```json
{
  "fetchedAt": "2026-04-15T18:30:00.000Z",
  "placeId": "ChIJ...",
  "displayName": "MGP Coatings",
  "rating": 5.0,
  "total": 42,
  "reviews": [ ... up to 5 reviews ... ]
}
```

### Limitations

- **Google Places API returns a maximum of 5 reviews** — this is a hard platform limit. No pagination, no workaround via the official API.
- If the env vars are missing or the API call fails, the script exits gracefully and `Reviews.tsx` falls back to the curated placeholder set in `src/data/reviews.json`.
- Reviews update only when the site is rebuilt — Netlify auto-rebuilds on GitHub pushes, or trigger a deploy manually to refresh.
