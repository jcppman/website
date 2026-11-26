# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone who wants to see Chriest Yu's work. No audience comes first: musicians checking the recording catalog, people evaluating Chriest as a software engineer, and friends or followers who come for new photographs and releases are all equal visitors.

## Product Purpose

chriest.me is a personal portfolio: a record of the software Chriest builds, the records Chriest makes, and the photographs Chriest takes. A visit succeeds when the visitor looks at the work. There is no conversion goal, contact form, or booking path; outbound links to listening services and profiles are enough.

## Positioning

One person's work across three crafts, shown as the work itself. The catalog is real: named bands, the roles Chriest held on each record (tracking, mixing, mastering, and others), and photographs from specific dates and places.

## Operating Context

- Three static pages: Home (`/`), Music (`/portfolio/music/`), and Photography (`/portfolio/photography/`).
- The homepage shows a lead photograph, two featured releases, and two featured photographs, each section linking to its full page.
- The sidebar carries the name, the one-line introduction ("I build software, make records and take photographs."), page navigation, and outbound links: GitHub, Audiorective, Molten Steel Studios, Personal YouTube, Instagram, LinkedIn.
- The photography gallery groups photographs by month and opens them in a viewer.
- Music entries link out to Bandcamp and other listening services; the site does not host audio.

## Capabilities and Constraints

- Astro static site on Node 24 and pnpm 9, deployed on Netlify. Optional Google Analytics through a build-time tag ID.
- Content lives in plain files edited by agent skills, not by an admin UI: releases in `content/music/*.md`, photograph descriptions in `content/photography/descriptions.json`, homepage captions in `content/photography/meta.json`, originals in `src/assets/`. Do not add a CMS or admin editor; keep content files easy for a skill to edit.
- Photograph filenames (`YYYYMMDD-N.jpg`) determine ordering and month grouping. Astro generates responsive images from the originals at build time.
- The full gallery has no visible captions. Homepage captions are optional and come from rules in `meta.json`.
- `content/videography/` and `public/YUNJUIYU_Chriest.pdf` are leftovers. Future work does not plan a videography page or a resume link around them.

## Brand Commitments

- Name: Chriest Yu. Site title pattern: `Chriest Yu` on Home, `<Page> · Chriest Yu` elsewhere.
- Introduction copy: "I build software, make records and take photographs."
- Preserve supplied artist spellings, credits, and listening URLs exactly.
- Photograph captions may be in Japanese or Chinese (for example 茅山, 沖縄の色); keep them as written.

## Evidence on Hand

- Eleven releases with covers in `content/music/` and `src/assets/music/`.
- Photographs in `src/assets/photography/` with visual descriptions.
- No testimonials, client quotes, press, or rates exist. Do not invent them.

## Product Principles

1. The work leads. Photographs, covers, and credits carry the site; the interface stays out of the way.
2. Equal weight to every visitor. No section is framed as a sales pitch to one audience.
3. Facts as supplied. Credits, roles, dates, and captions appear exactly as recorded in the content files.
4. Content stays file-based and skill-editable.
