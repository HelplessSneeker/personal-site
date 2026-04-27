# benjamin.noessler.at

Personal website. Astro 6, Node standalone adapter, DE/EN bilingual, minimal JS.

## Local dev

```sh
npm install
cp .env.example .env   # fill in keys (see below)
npm run dev            # http://localhost:4321
```

For the contact form to work end-to-end you need:

- **SMTP relay** for `benjamin@noessler.at`. The server authenticates against your
  existing mailbox and sends through it (no transactional API like Resend involved).
  Required vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`.
  IONOS defaults: `smtp.ionos.de` on port `587` with `SMTP_SECURE=false` (STARTTLS).
- `TURNSTILE_SECRET_KEY` + `PUBLIC_TURNSTILE_SITE_KEY` — create a widget at
  https://dash.cloudflare.com → Turnstile

**Local-only shortcut:** leave `SMTP_HOST` (or `SMTP_USER`, or `SMTP_PASS`) empty
and the API route will log the submission to the console instead of sending. Use
Cloudflare's documented test keys for Turnstile in dev:

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

- [ ] **Impressum** — `src/pages/impressum.astro`: Adresse, UID, Gewerbe
- [ ] **Datenschutz** — `src/pages/datenschutz.astro`: Adresse aus Impressum
- [ ] **EN imprint + privacy** — `src/pages/en/imprint.astro` + `privacy.astro`
- [ ] **OG image** — `public/og-image.png` is an auto-generated placeholder; replace
      with a real one before launch
- [ ] **Call-booking URL** — `src/components/Contact.astro:21` is a placeholder;
      wire to a real Cal.com / SavvyCal slot picker

## Deployment

Deployed via Coolify on Hetzner. The repo ships a multi-stage `Dockerfile`
(node:22-alpine, ~150 MB final image) that Coolify auto-detects.

Required env vars in Coolify (`PUBLIC_*` must be marked as **Build Variable**
so Vite inlines them into the client bundle):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
- `TURNSTILE_SECRET_KEY`, `PUBLIC_TURNSTILE_SITE_KEY` *(build variable)*
- `CONTACT_TO_EMAIL`
- `PUBLIC_CAL_URL` *(optional, build variable)*

`HOST=0.0.0.0` and `PORT=3000` are baked into the Dockerfile — do not override
them in Coolify. DNS: `benjamin.noessler.at` CNAME → `coolify.noessi-storage.at`.

## Notes

- **No analytics.** If you want to track visits post-launch, drop a Plausible or
  Umami script tag into `BaseLayout.astro`. Both are DSGVO-compatible and will need
  to be disclosed in `datenschutz.astro`.
- **No cookies set.** The site is fully static + one POST endpoint. No cookie
  banner needed as long as analytics stay off.
- **Accent color is a CSS custom property** (`--color-accent` in
  `src/styles/global.css`). Change in one place to retheme.
- **Dark mode follows system preference** via `prefers-color-scheme`.
