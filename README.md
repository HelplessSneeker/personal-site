# benjamin.noessler.at

Personal website. Astro 6, Node standalone adapter, DE/EN bilingual, minimal JS.

## Local dev

```sh
npm install
cp .env.example .env   # fill in keys (see below)
npm run dev            # http://localhost:4321
```

For the contact form to work end-to-end you need:

- `RESEND_API_KEY` — create at https://resend.com/api-keys and verify the sender domain
- `TURNSTILE_SECRET_KEY` + `PUBLIC_TURNSTILE_SITE_KEY` — create a widget at
  https://dash.cloudflare.com → Turnstile

**Local-only shortcut:** leave `RESEND_API_KEY` empty and the API route will log
the submission to the console instead of sending. Use Cloudflare's documented test
keys for Turnstile in dev:

```
PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

## Build

```sh
npm run build          # builds to ./dist
npm run preview        # preview the built server locally
npm run check          # type + Astro diagnostics
```

The build produces a Node standalone server (`dist/server/entry.mjs`). Start it with:

```sh
node ./dist/server/entry.mjs
```

## Project layout

```
src/
├── components/    # One .astro per section + chrome
├── data/          # projects.ts, experience.ts, social.ts
├── i18n/          # de.json + en.json + util.ts
├── layouts/       # BaseLayout, LegalLayout
├── pages/         # / (DE), /en/, /impressum, /datenschutz, mirrored EN, /api/contact
└── styles/        # global.css — design tokens, reset, utilities
```

Content is separated from markup. To change copy, edit `src/i18n/de.json` and
`src/i18n/en.json`. To change projects, edit `src/data/projects.ts`.

## TODO before launch

Search for `TODO` in the codebase — placeholders render as visible orange chips
in the browser so they can't be missed. Key ones:

- [ ] **scanzy.at** — in `src/data/projects.ts`: replace description + stack + role
- [ ] **Social links** — in `src/data/social.ts`: GitHub + LinkedIn URLs
- [ ] **GitHub repo URL** — in `src/data/projects.ts` (b-cal link) and
      `src/components/Footer.astro` (`viewSource`)
- [ ] **Impressum** — `src/pages/impressum.astro`: Adresse, UID, Gewerbe
- [ ] **Datenschutz** — `src/pages/datenschutz.astro`: Adresse aus Impressum
- [ ] **EN imprint + privacy** — `src/pages/en/imprint.astro` + `privacy.astro`
- [ ] **CV PDF** — drop the real file at `public/cv.pdf` (currently missing, link 404s)
- [ ] **OG image** — `public/og-image.png` is an auto-generated placeholder; replace
      with a real one before launch
- [ ] **Project screenshots** — `ProjectMockup.astro` renders CSS placeholders.
      Replace with real screenshots when available
- [ ] **stream-stash** — add a project card once ready to show publicly

## Deployment (not wired)

Deploy config was deliberately skipped. When ready:

- Build the image with a simple Dockerfile (`FROM node:22-alpine`, `npm ci`,
  `npm run build`, `CMD ["node", "./dist/server/entry.mjs"]`)
- Push to Coolify on the existing Hetzner host
- DNS: `benjamin.noessler.at` CNAME → Coolify endpoint at IONOS
- Set `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `PUBLIC_TURNSTILE_SITE_KEY`,
  `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` as environment variables in Coolify

## Notes

- **No analytics.** If you want to track visits post-launch, drop a Plausible or
  Umami script tag into `BaseLayout.astro`. Both are DSGVO-compatible and will need
  to be disclosed in `datenschutz.astro`.
- **No cookies set.** The site is fully static + one POST endpoint. No cookie
  banner needed as long as analytics stay off.
- **Accent color is a CSS custom property** (`--color-accent` in
  `src/styles/global.css`). Change in one place to retheme.
- **Dark mode follows system preference** via `prefers-color-scheme`.
