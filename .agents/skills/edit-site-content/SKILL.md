---
name: edit-site-content
description: Add or update releases, photo groups and featured work on chriest.me, including credits, listening links, descriptions and media.
---

For a release, follow an existing file in `content/music/`. Use a stable slug for the Markdown filename. Place its cover in `src/assets/music/` and set `img` to the path relative to the Markdown file. Preserve the supplied artist spellings, credits and listening URLs. The catalog and outline use these fields directly.

For a photograph, place a frameless JPEG export in `src/assets/photography/` with a unique `YYYYMMDD-N.jpg` filename, using its capture date. Limit its long edge to 2560px; the site never shows more than 1920px, and larger sources only slow the build. Do not use exports with a white mat or border. Existing suffixes can have multiple numeric parts. Add a visual description under its filename stem in `content/photography/descriptions.json`. The filename determines ordering and month grouping. The full gallery has no visible captions. An optional caption for the homepage comes from a matching rule in `content/photography/meta.json`.

To change the homepage selection, edit the release IDs and photo stems in `src/pages/index.astro`. Astro generates the AVIF and WebP versions at build time from these sources; do not add pre-sized copies.

Run `pnpm check` and `pnpm build`. For a media change, inspect the built page and its outline, and open the photo viewer when applicable.
