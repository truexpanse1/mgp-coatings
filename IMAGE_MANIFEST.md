# MGP Coatings — Image Manifest

**Last audited:** 2026-04-07
**Status:** Site stripped of all unverified/mismatched images. Awaiting real photos from Matt.

---

## Audit Findings

The 10X rebuild on 2026-04-07 contained widespread image misuse: stock real-estate photos (interior hardwood floors, outdoor wicker furniture, generic dusk house exteriors) were assigned to coating service pages, and before/after sliders paired completely unrelated images. Examples found:

- **Patio Coatings hero/before-after:** showed an empty interior room with hardwood floors (file `scraped-patio-1.jpg`)
- **Pool Deck Coatings hero:** showed a garage interior with an ATV (file `scraped-pool-deck-1.jpg`)
- **All `scraped-garage-moderno-*.jpg` files:** actually contained outdoor patio furniture and a generic house exterior — not garages
- **Before/after sliders:** every pair was two unrelated stock images, not the same project

All offending images have been removed from the codebase references. The site is now honest but thin on photos for several services.

---

## Verified Real Images (kept on site)

These images are confirmed to show real MGP coating/painting work or Matt himself:

| Path | What it shows | Used on |
|------|---------------|---------|
| `/images/garage.jpg` | Residential garage with white sports car, red/grey flake epoxy floor | Garage hero, WhyMGP, Hero Slider, Gallery Preview |
| `/images/gallery-8.jpg` | Residential garage with ATV and blue car, flake epoxy floor | Garage gallery, Hero Slider, Gallery Preview |
| `/images/gallery-7.jpg` | Commercial flake epoxy hallway with cove base | Epoxy Flooring hero, Hero Slider, Gallery Preview |
| `/images/gallery-extra/garage-scaled.webp` | Same as garage.jpg (white car flake epoxy) | Garage gallery, Results page |
| `/images/gallery-extra/job-1.webp` | Real exterior painting — white ranch with shutters | Painting hero, Hero Slider, Gallery Preview, Results |
| `/images/gallery-extra/job-2.webp` | Real exterior painting — white ranch with dark trim and garage door | Painting gallery, Gallery Preview, Results |
| `/images/gallery-extra/job-3.webp` | Real exterior painting — white ranch with brick accents | Painting gallery, Results |
| `/images/gallery-extra/job-4.jpg` | MGP Coatings ribbon-cutting team photo | Results page |
| `/images/gallery-extra/matt-onsite.jpeg` | Real covered patio/awning project, table and chairs | Patio hero/gallery, Gallery Preview, Results |
| `/images/matt-headshot.jpg` | Matt Gifford headshot (same as scraped/scraped-matt-headshot.png) | About page, MeetMatt section |

---

## Banned / Removed Images

These files are still in `/public/images/` but **must not be referenced** anywhere in the codebase. They are stock photos that do not represent MGP's actual work and would mislead visitors:

| Path | Why banned |
|------|------------|
| `/images/patio.jpg`, `/images/gallery-2.jpg`, `/images/gallery-9.jpg`, `/images/hero-1.jpg`, `/images/why-mgp.jpg`, `/images/scraped/scraped-garage-moderno-2.jpg` | Stock outdoor wicker furniture set — no coating work visible |
| `/images/driveway.jpg`, `/images/gallery-3.jpg`, `/images/gallery-10.jpg`, `/images/hero-2.jpg`, `/images/scraped/scraped-garage-moderno-1.jpg` | Stock outdoor pergola with umbrellas — no driveway coating |
| `/images/epoxy.jpg`, `/images/gallery-4.jpg`, `/images/hero-3.jpg`, `/images/scraped/scraped-garage-moderno-3.jpg` | Stock house exterior with bare concrete driveway — not Matt's work |
| `/images/painting.jpg`, `/images/gallery-5.jpg`, `/images/gallery-11.jpg` | Stock dusk house exterior — no actual painting visible |
| `/images/pool.jpg`, `/images/gallery-6.jpg`, `/images/gallery-12.jpg`, `/images/scraped/scraped-patio-1.jpg` | Empty interior room with **hardwood floor** — not even a coating job |
| `/images/scraped/scraped-pool-deck-1.jpg` | Garage interior, **not** a pool deck (mislabeled) |
| `/images/scraped/scraped-painting.png` | Commercial epoxy hallway, **not** painting (mislabeled) — duplicate of gallery-7.jpg |
| `/images/matt-real-1.jpg`, `/images/matt-real-2.jpg` | Marketing flyers, not project photos |

**Recommendation:** Once Matt's real photos are dropped in, delete these banned files entirely so future agents can't accidentally re-reference them.

---

## What's Still Needed

These services currently have a **temporary placeholder** hero (`/images/garage.jpg` or `/images/gallery-7.jpg`) and an **empty gallery**. They need real photos URGENTLY.

### Pool Deck Coatings — `/pool-deck-coatings/`
- **Hero (1):** wide shot of a finished cool-touch pool deck, ideally textured/flake finish around an actual pool
- **Gallery (3–6):** close-up texture shots, full deck shots, before/after pairs from same project
- **Currently using:** `/images/garage.jpg` as placeholder (close-up garage flake — does NOT show a pool deck)

### Patio Coatings — `/patio-coatings/`
- **Hero:** currently using `/images/gallery-extra/matt-onsite.jpeg` (real Matt patio shot, but the patio itself appears bare — doesn't show a coating)
- **Need:** wide shot of a finished decorative patio coating (flake, metallic, or stained), ideally with outdoor furniture for context
- **Gallery (3–6):** finished patios, multiple finishes (flake, metallic, stained), before/after if available

### Driveway Coatings — `/driveway-coatings/`
- **Hero (1):** wide shot of a finished coated driveway, ideally with curb appeal context
- **Gallery (3–6):** close-up texture, full driveway shots, hot-tire-resistant areas
- **Currently using:** `/images/garage.jpg` as placeholder

### Epoxy Countertops — `/epoxy-countertops/`
- **Hero (1):** beautiful hand-poured epoxy countertop (granite-look or marble-look) in a kitchen, bath, or outdoor bar
- **Gallery (3–6):** close-up of veining/finish, multiple installs, indoor + outdoor examples
- **Currently using:** `/images/gallery-7.jpg` as placeholder (commercial floor — completely wrong product)

### Painting — `/painting-slocounty/`
- **Status:** Hero and 3 gallery images are real exterior paint jobs ✅
- **Nice to have:** Interior painting examples, commercial repaints, before/after if available

### Garage Floor Coatings — `/garage-floor-coatings/`
- **Status:** Hero and 3 gallery images are real garage floor coatings ✅
- **Nice to have:** more variety — different colors/flakes/finishes, before/after pairs

### Epoxy Flooring — `/epoxy-flooring/`
- **Status:** Hero is a real commercial flake hallway. Gallery shows commercial + residential. ✅
- **Nice to have:** more commercial variety (warehouse, retail, food service), residential metallic finishes

---

## Homepage / Site-Wide Image Needs

### Hero Slider (`HeroSlider.tsx`) — currently 4 slides
- Slide 1: garage.jpg (good)
- Slide 2: gallery-8.jpg (good)
- Slide 3: gallery-7.jpg (good)
- Slide 4: job-1.webp (good)
- **Replace any of the above** as better photos arrive

### Gallery Preview (`GalleryPreview.tsx`) — currently 6 thumbnails
- All 6 use verified images
- **Add more variety** as new photos come in

### WhyMGP section (`WhyMGP.tsx`)
- Currently uses `/images/garage.jpg`
- **Could use** a wide-angle "Matt at work on a job site" shot for stronger emotional connection

### MeetMatt section (`MeetMatt.tsx`)
- Currently uses `/images/matt-headshot.jpg` ✅

### Before/After sliders
- **All removed** from the live site (we have zero legitimate same-project before/after pairs)
- **To re-enable on a service page:** add to `services.json` as `"beforeAfter": [{ "before": "/images/path-before.jpg", "after": "/images/path-after.jpg", "label": "Project name" }]` — and the section will automatically reappear

---

## How to Drop in New Photos (for whoever's reading this next)

1. Save photos to `/public/images/real/` (create folder) — keeps them separate from the legacy stock dump
2. Use descriptive filenames: `pool-deck-paso-robles-flake.jpg`, `patio-atascadero-metallic.jpg`, etc.
3. Update `src/data/services.json`:
   - Replace the `image` field for the matching service
   - Populate the `gallery` array
   - (Optional) Add `beforeAfter` entries if real same-job pairs exist
4. Update `src/components/HeroSlider.tsx`, `GalleryPreview.tsx`, `WhyMGP.tsx`, and `src/app/results/page.tsx` to swap in better images for homepage variety
5. Build, deploy, verify each service page in the browser before marking done
6. Once verified, delete the banned files listed above from `/public/images/` so they can't be reused
