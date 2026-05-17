# AGENTS.md

Entry point for coding agents (Codex, Claude Code, OpenCode, Pi, et al.).

Read in this order:

1. **`README.md`** — local dev, env vars, build commands. Operational.
2. **`PRODUCT.md`** — audiences, positioning, brand voice, anti-references. Canonical strategy source.
3. **`DESIGN.md`** — visual system: tokens, type pairing, components, do's and don'ts. Canonical visual source. The accompanying `.impeccable/design.json` carries shadows, motion, breakpoints, and live-renderable component snippets that don't fit the Stitch frontmatter schema.
4. **`CODING.md`** — branch flow, tooling, hard quality bars, when to ask before doing.

If any of those four files conflict with each other, the order above is the precedence. Older notes outside this repo (e.g. in `primus-sb/`) are *not* canonical for this project; if they conflict with the files in this repo, the files in this repo win.

## Quick start

```sh
npm install
cp .env.example .env       # fill SMTP_* if you want to send mail locally; otherwise leave empty (logs to console)
npm run dev                # http://localhost:4321
npm run check              # type + Astro diagnostics — clean before declaring work done
npm run build              # production build
```

## Working branch

`dev`. **Never push directly to `main`** — `main` is the Coolify auto-deploy branch.

## Hard bars (from `CODING.md`)

- Lighthouse ≥ 95 on Performance / Accessibility / Best Practices / SEO (mobile profile).
- WCAG AA contrast, full keyboard nav, visible focus states.
- Respect `prefers-reduced-motion`.
- Transitions only on `transform` and `opacity`.
- No CSS framework. No third font. No `#000` / `#fff`. No em dashes in new UI copy.

## When to stop and ask

See the "Ask before doing" section in `CODING.md`. Short version: IA changes, new dependencies, `astro.config.mjs`, legal page text, SMTP flow, pricing copy — all need confirmation.

## Done definition

`npm run check` clean, `npm run build` clean, click-through in `npm run preview`, DE+EN both updated, Lighthouse spot-check on a changed route, screenshot in the handover if visual.
