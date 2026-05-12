# benjamin.noessler.at

Personal website. Astro 6, Node standalone adapter, DE/EN bilingual, minimal JS.

## Local dev

```sh
npm install
cp .env.example .env   # fill in keys (see below)
npm run dev            # http://localhost:4321
```

For the contact form to work end-to-end you need an **SMTP relay** for
`benjamin@noessler.at`. The server authenticates against your existing mailbox
and sends through it (no transactional API like Resend involved).
Required vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`.
IONOS defaults: `smtp.ionos.de` on port `587` with `SMTP_SECURE=false` (STARTTLS).

Spam protection is a hidden honeypot field plus a per-IP rate limit (5/hour) —
no third-party CAPTCHA. If that gets abused, add Turnstile or similar later.

**Local-only shortcut:** leave `SMTP_HOST` (or `SMTP_USER`, or `SMTP_PASS`) empty
and the API route will log the submission to the console instead of sending.

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

- [x] **Impressum / Datenschutz (DE + EN)** — filled post-WKO (Gewerbe, GISA-Zahl,
      Kleinunternehmer-Status, Aufsichtsbehörde). The `.todo-placeholder` infra was
      removed once the last chip was filled.
- [x] **OG image** — `public/og-image.png` regenerated; source layout in
      `public/og-image.svg`. Regenerate the PNG by rasterising a styled 1200×630
      HTML card with the real General Sans / Commit Mono webfonts.
- [ ] **Call-booking link** — set `PUBLIC_CAL_URL` in Coolify (Build Variable) once
      a Cal.com slot picker exists; until then the call-booking block is hidden.
- [ ] **Server-log retention line** — `datenschutz.astro` / `en/privacy.astro` state
      "max. 14 Tage". Verify against the actual Coolify/Docker log config and adjust
      if different.

## Deployment

Deployed via Coolify on Hetzner. The repo ships a multi-stage `Dockerfile`
(node:22-alpine, ~150 MB final image) that Coolify auto-detects.

Required env vars in Coolify (`PUBLIC_*` must be marked as **Build Variable**
so Vite inlines them into the client bundle):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
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
