---
name: edit-site-content
description: Add or update releases, photo groups and featured work on chriest.me, including credits, listening links, descriptions and media.
---

For a release, follow an existing file in `content/music/`. Use a stable slug for the Markdown filename. Place its cover in `src/assets/music/` and set `img` to the path relative to the Markdown file. Preserve the supplied artist spellings, credits and listening URLs. The catalog and outline use these fields directly.

For a photograph, place the original JPEG in `src/assets/photography/` with a unique `YYYYMMDD-N.jpg` filename, using its capture date. Existing suffixes can have multiple numeric parts. Add a visual description under its filename stem in `content/photography/descriptions.json`. The filename determines ordering and month grouping. The full gallery has no visible captions. An optional caption for the homepage comes from a matching rule in `content/photography/meta.json`.

To change the homepage selection, edit the release IDs and photo stems in `src/pages/index.astro`. Keep original images as the source; Astro generates responsive versions at build time.

Run `pnpm check` and `pnpm build`. For a media change, inspect the built page and its outline, and open the photo viewer when applicable.
