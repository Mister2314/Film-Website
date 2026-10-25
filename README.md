# Leitmotif — Film Trailers Site

A poster-driven landing page for a fictional film trailer platform, rebuilt around its own cinematic identity: projection-black surfaces, editorial letterboxed frames, and type doing the heavy lifting.

**Live demo:** https://film-website-mister2314.vercel.app/

<div align="center">

<img src="docs/demo.gif" alt="Leitmotif — Film Trailers Site — animated demo" width="700">

| Desktop | Mobile |
|---|---|
| <img src="docs/shot-desktop.png" alt="Desktop view" width="700"> | <img src="docs/shot-mobile.png" alt="Mobile view" width="290"> |

<details>
<summary>More screenshots</summary>

| Desktop | Mobile |
|---|---|
| <img src="docs/preview.png" alt="Desktop, alternate view" width="700"> | <img src="docs/preview-mobile.png" alt="Mobile, alternate view" width="290"> |

</details>

</div>

## What it is

Five trailers, five full-bleed stills. Each film is a letterboxed 16:9 frame beside an editorial text column: a giant outlined index numeral, a condensed headline, and a mono metadata row (year · cut · platform). Hover a frame and the letterbox bars slide in from top and bottom, the still breathes to 1.04×, and a play glyph fades up under a faint marquee-amber glow. On touch devices the composition drops to a single column with the metadata always visible — no hover tax.

## Tech stack

React 19 · TypeScript · Vite — zero runtime animation libraries. All motion is CSS transitions with three easing curves: `expo.out` for arrivals, a short state ease for hovers, linear for the letterbox bars.

## Features

- **Letterbox hover choreography** — cinema bars, image scale and play glyph on `pointer: fine` devices only
- **Film index with filter** — chip filters over the local catalogue (trailers / festival cuts / director's cuts) with a live count and a real empty state; no API, no keys
- **Detail views** — a keyboard-closable dialog per film (runtime, cut notes, watch link), Escape to close, focus restored on exit
- **Dark / light themes** — system default with a persisted toggle; a pre-paint bootstrap script means no first-paint flash; the light "matinee" theme is designed, not inverted
- **Upgraded reveals** — film slots and sections arrive once with a 700 ms expo-out ease; under `prefers-reduced-motion` content simply shows
- **Newsletter with real states** — inline validation error, sending spinner, done confirmation (kept on-device; a static host has no backend, and the copy says so)
- **Real about section** — `#production` is an actual studio page now, not a footer anchor; honest contact mailto
- **Lazy media pipeline** — every still is `loading="lazy"` + `decoding="async"` with explicit dimensions (no CLS); only the hero logo loads eagerly with `fetchpriority="high"`
- **Mobile as its own composition** — single column, full-bleed frames, no fixed-viewport heights, no horizontal scroll at 390 px, ≥44 px touch targets
- **Keyboard-first** — skip link, amber focus outlines, focus-visible states on every interactive element, descriptive link labels
- **Reduced-motion fallback** — under `prefers-reduced-motion` the static page is the complete page

## Accessibility

Contrast-checked palettes in both themes, labelled controls, decorative SVGs hidden from the tree, email field with a real label and `aria-invalid` + `role="alert"` on errors, a labelled `role="dialog"` for details, and visible focus states on every interactive element.

## Research basis

- DappaSol, "Cinematic Website Design: 10 Examples That Feel Like Film" (Sep 2026) — Locomotive/Obys show typography-led pacing beats WebGL for film sites at this scale; chose scroll-triggered motion over 3D.
- Motion guidance from current micro-interaction practice (web.dev / community guides, 2026): transform/opacity only, short state eases, visible press feedback, hover variants gated to `pointer: fine`.
- FreeAPI.watch movie-API comparison (2026) — all free film metadata APIs need keys, which must be server-side; for a free static site the catalogue is curated local data instead, with client-side filtering.

## Run locally

```bash
git clone https://github.com/Mister2314/Film-Website.git
cd Film-Website
npm install
npm run dev
```

## Build

```bash
npm run build   # tsc -b && vite build
npm run preview
```
