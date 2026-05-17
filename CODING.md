# CODING.md — Repo conventions for coding agents

Read this **after** `PRODUCT.md` (strategy & brand) and `DESIGN.md` (visual system). This file is the operational layer: branch flow, tooling, hard quality bars, and when to stop and ask.

> The strategic positioning is canonical in `PRODUCT.md`. Don't re-derive it here, don't override it from chat context, and don't follow older notes in `primus-sb/`. If those conflict with `PRODUCT.md`, `PRODUCT.md` wins.

## Branch flow

- Default working branch: **`dev`**.
- `main` auto-deploys via Coolify on the personal-server VPS.
- **Never push directly to `main`.** Merge from `dev` after preview.
- Don't open PRs on GitHub by reflex — bfn squash-merges manually.

## Tooling

- Astro 6.3.x, Node standalone adapter (`@astrojs/node` 10.1.0 — **pinned**, do not bump without explicit ask).
- Package manager: **npm** (`package-lock.json`). A `pnpm-lock.yaml` exists for historical reasons — ignore it, never regenerate.
- TypeScript strict via `astro check`. Run `npm run check` before declaring work done.

## Repo layout

- One `.astro` per section in `src/components/`.
- Typed data under `src/data/` (TS modules, not JSON).
- i18n via `src/i18n/{de,en}.json` + `util.ts`. New copy goes in **both** locales. EN may be a shortened variant of DE — not a literal translation — per the audience split in `PRODUCT.md`.
- Design tokens live in `src/styles/global.css` (CSS custom properties). See `DESIGN.md` for the token contract.
- Content collections (e.g. case studies) under `src/content/` with schema-validated frontmatter.

## Hard quality bars (non-negotiable)

- **Lighthouse ≥ 95** on Performance, Accessibility, Best Practices, SEO — all routes, mobile profile.
- **WCAG AA contrast** guaranteed. Keyboard nav reaches every interactive element. Focus states visible (no `outline: none` without an equivalent replacement).
- **Respect `prefers-reduced-motion`** — current handling in `global.css` is the reference; don't regress it.
- **Minimal JS.** Astro islands only when interaction genuinely requires it. Static-first.
- **Transitions only on `transform` and `opacity`.** Never on layout properties.
- **Forms**: zod-validated server-side, honeypot field, per-IP rate-limit. SMTP via `nodemailer`. No third-party CAPTCHA, no transactional APIs like Resend.

## Absolute bans

These come from `PRODUCT.md` and the `impeccable` skill. Match-and-refuse:

- `border-left`/`border-right` > 1px as colored accent on cards, callouts, list items, blockquotes.
- Gradient text (`background-clip: text` with a gradient).
- Glassmorphism / glow / neon-on-dark as decoration.
- Icon-above-every-heading.
- Card grids of `icon + heading + text`.
- Hero subtitle that restates the heading.
- Em dashes in copy (use commas, colons, semicolons, periods, or parentheses). Also no `--`.
- Modals when an inline disclosure or dedicated page would do.

## Ask before doing

Stop and confirm with bfn when:

- Changing the IA (homepage section order, new top-level routes, removing or reordering case studies/services).
- Adding any external runtime dependency that isn't already in `package.json`.
- Touching `astro.config.mjs`, the Node adapter version, or build output mode.
- Adding client-side JS that isn't an unavoidable Astro island.
- Editing legal pages (`/impressum`, `/datenschutz`) — content is post-WKO-verified, mechanical edits only.
- Changing SMTP / contact-form flow (it's working; don't refactor opportunistically).
- Pricing copy or service tier definitions (canonical in `PRODUCT.md` — copy changes require strategic review).

Small surgical edits to non-pricing copy, styling, or single-component refactors don't need pre-approval — keep the diff focused.

## Done definition for any task

- `npm run check` clean.
- `npm run build` clean.
- Manual click-through of changed routes in `npm run preview`.
- DE and EN both updated when copy changed.
- Lighthouse spot-check on at least one changed route (no regression vs `main`).
- If visual: a screenshot in the handover message.

## References inside this repo

- `PRODUCT.md` — audiences, positioning, brand voice, aesthetic direction, anti-references. Canonical strategy source.
- `DESIGN.md` — tokens, type pairing, spacing scale, components. Canonical visual-system source.
- `AGENTS.md` — entry-point for Codex-style agents (pointer file).
- `README.md` — local dev, env vars, build commands. Operational only.
