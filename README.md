# Leitmotif — Film Trailers Site

A poster-driven landing page for a fictional film trailer platform.

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

## What it does

A static page built around stills: a logo hero, top navigation, and several grids of film stills that reflow on mobile. The editorial work is done by the type pairing — Barlow Condensed for headlines against Roboto Mono for detail text — and AOS fades the sections in as the page scrolls. There is no actual video despite the subject; that was the constraint.

## Tech stack

React 19 · TypeScript · Vite

## Features

- Poster and still-image grids that reflow to single columns on mobile
- Barlow Condensed / Roboto Mono pairing loaded from Google Fonts
- AOS 2.3.1 scroll-in animations on every section
- Logo hero with top navigation
- Pure static markup — no build step

## Run locally

```bash
git clone https://github.com/Mister2314/Film-Website.git
cd Film-Website
npx serve .
# or just open index.html
```
