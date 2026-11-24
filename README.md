# chriest.me

The site builds three static pages with Astro. Use Node 24 and pnpm 9.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
```

`pnpm dev` starts local development. `pnpm preview` serves the built site from `dist/`. Netlify uses the build settings in `netlify.toml`. Set `PUBLIC_GTAG_ID` or the existing `NUXT_PUBLIC_GTAG_ID` at build time to enable Google Analytics.

See the [content editing skill](.agents/skills/edit-site-content/SKILL.md) for release and photography updates.
