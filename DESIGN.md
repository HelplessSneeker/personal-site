---
name: benjamin.noessler.at
description: Personal site — Austrian small-business landing pages with recurring hosting & care
colors:
  bg-light: "oklch(98.5% 0.004 248)"
  surface-light: "oklch(96.2% 0.005 248)"
  surface-sunk-light: "oklch(94.5% 0.006 248)"
  text-light: "oklch(18% 0.015 248)"
  text-muted-light: "oklch(44% 0.012 248)"
  text-subtle-light: "oklch(50% 0.012 248)"
  border-light: "oklch(88.5% 0.008 248)"
  border-strong-light: "oklch(78% 0.010 248)"
  rule-light: "oklch(92% 0.006 248)"
  accent-light: "oklch(34% 0.12 248)"
  accent-hover-light: "oklch(27% 0.12 248)"
  accent-subtle-light: "oklch(93% 0.03 248)"
  bg-dark: "oklch(15.5% 0.010 248)"
  surface-dark: "oklch(19% 0.012 248)"
  surface-sunk-dark: "oklch(13% 0.010 248)"
  text-dark: "oklch(92% 0.010 248)"
  text-muted-dark: "oklch(72% 0.010 248)"
  text-subtle-dark: "oklch(64% 0.010 248)"
  border-dark: "oklch(28% 0.010 248)"
  border-strong-dark: "oklch(38% 0.010 248)"
  rule-dark: "oklch(22% 0.010 248)"
  accent-dark: "oklch(78% 0.12 248)"
  accent-hover-dark: "oklch(86% 0.10 248)"
  accent-subtle-dark: "oklch(25% 0.05 248)"
  danger-light: "oklch(50% 0.180 28)"
  danger-dark: "oklch(74% 0.140 28)"
typography:
  display:
    fontFamily: "'General Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.55rem + 2.2vw, 2.875rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "'General Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1.1vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.022em"
  title:
    fontFamily: "'General Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.55vw, 1.375rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'General Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "'General Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.06em"
    fontVariant: "all-small-caps"
  mono:
    fontFamily: "'Commit Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.92em"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'kern', 'liga', 'calt', 'tnum', 'ss01'"
rounded:
  sm: "3px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4rem"
  9: "6rem"
  10: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.bg-light}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover-light}"
    textColor: "{colors.bg-light}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-light}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  link:
    textColor: "{colors.accent-light}"
  section-label:
    textColor: "{colors.text-subtle-light}"
    typography: "{typography.label}"
---

# Design System: benjamin.noessler.at

## 1. Overview

**Creative North Star: "An engineer's notebook crossed with a Viennese craftsman's business card."**

A self-hosted personal site for an Austrian freelance developer whose primary offer is recurring hosting & care for small-business landing pages. Every choice must read as *calm, precise, trustworthy* — the visual layer of an engagement that's meant to last years, not a one-night project. European editorial sensibility, not Silicon-Valley dev-portfolio. The page rewards skim readers and survives a peer's close inspection.

The system rejects three nearby aesthetic families that would be cheap reflexes: **agency-flashy** (cursor blobs, animated gradients, scroll-jacked hero, "we craft experiences"), **corporate consultancy bland** (stock-photo cool, navy-and-gray bullet grids, "trusted by" logo walls), and **generic dev portfolio** (dark-on-cyan, icon-above-every-heading, feature-card-grid, "built with Next.js" tells). The Geist + Geist Mono pairing was specifically rejected for becoming the AI-template default; General Sans Variable + Commit Mono carries the same precision with European warmth.

**Key Characteristics:**
- Typographic-first. Hierarchy is carried by type weight, size, tracking, and mono treatment — almost never by color, gradient, or shadow.
- Asymmetric layout where content earns it (hero 1.3fr / 1fr grid; service blocks with leading numerals + ledger rules). Centering is the safe default rejected on purpose.
- Generous vertical rhythm in three named modes (`default` / `continued` / `pause`), with inner spacing varying by content density.
- Metadata-as-craft: small mono labels (years, role, stack, availability) signal "labelled by someone who notices details."
- Both themes deliberately tuned. Dark mode is not an inverse of light; it's a separately-designed companion.
- Recurring-relationship voice: the Hosting & Care offer leads; one-shot project is the entry point. Every section carries one beat of continuity.

## 2. Colors

A single ink-blue hue (`248°`) carries the entire system. The neutral scale is tinted toward the same hue (chroma 0.004–0.015) so the page feels cohesive even where the accent is absent. The accent itself is rare — used only on links, focus rings, the availability pulse, the `§` section-marker, and the primary button.

### Primary

- **Fountain-Pen Ink Blue** (light: `oklch(34% 0.12 248)` — code; PRODUCT.md target `oklch(38% 0.11 248)`): the only saturated color in the system. Reads as ink on paper, not as a primary-button blue. Used on links, focus rings, primary CTA, the `§` section marker, and the availability dot. Hover: `oklch(27% 0.12 248)` — deeper, never lighter.
- **Parchment Blue** (dark: `oklch(78% 0.12 248)`): the dark-mode companion, soft and never neon. Hover lightens to `oklch(86% 0.10 248)`.
- **Accent Subtle**: a faint tint of the accent (`oklch(93% 0.03 248)` light, `oklch(25% 0.05 248)` dark) for soft accent backgrounds where a full color would be too loud.

### Neutral

- **Background, Warm Off-White** (light: `oklch(98.5% 0.004 248)`): page background. Never `#fff`.
- **Background, Warm Charcoal** (dark: `oklch(15.5% 0.010 248)`): paired counterpart, deliberately warmer than `#0f0f10` defaults.
- **Surface** and **Surface-Sunk**: subtle tonal layers for cards, panels, dl-rows. Tonal layering only — no shadows.
- **Text, Deep Ink** (light: `oklch(18% 0.015 248)`) / **Text, Warm Parchment** (dark: `oklch(92% 0.010 248)`): body text. Never `#000` or `#fff`.
- **Muted / Subtle text** for metadata, captions, label-meta.
- **Border / Border-Strong / Rule**: three weights for hierarchical separation. Section dividers use `rule` (the lightest).

### Danger

A single warm red (`oklch(50% 0.180 28)` light / `oklch(74% 0.140 28)` dark) reserved strictly for form errors. Never used decoratively.

### Named Rules

**The Ink-Blue Rule.** The accent appears on ≤10% of any given viewport. Its rarity is the signal. Every additional use weakens the previous one.

**The No-Pure Rule.** No `#000`, no `#fff`. Every neutral is tinted toward `248°` at chroma 0.004–0.015. Pure black or pure white is a bug.

**The Selection Rule.** `::selection` inverts to the accent. Tiny detail, deliberate.

## 3. Typography

**Display + Body Font:** General Sans Variable (Indian Type Foundry / Fontshare), self-hosted via `woff2`. Single neo-grotesk family carries both display and body voices — single workhorse over a pair, fewer moving parts, less weight on the wire. Long-considered alternative: Funnel Display + Hanken Grotesk.

**Mono Font:** Commit Mono 400/500 via `@fontsource/commit-mono`. Warm humanist monospace; reads as precise rather than terminal-hacky. The `ss01` alternate set is enabled so the mono feels deliberate. Tabular figures (`tnum`) align numerics across every mono usage.

**Character:** Both fonts read as European, considered, and slightly dry. Neither carries the "AI template" tells of Geist / JetBrains Mono / Inter. The pairing is the visual signal of "tool made by someone who uses tools."

### Hierarchy

- **Display** (500 weight, `clamp(2rem → 2.875rem)`, line-height 1.08, tracking `-0.028em`): hero headline only. The page overture.
- **Headline** (500, `clamp(1.5rem → 2rem)`, line-height 1.08, tracking `-0.022em`): top-level section headings on dedicated pages.
- **Title** (500, `clamp(1.1875rem → 1.375rem)`, line-height 1.25, tracking `-0.015em`): article / service titles inside sections.
- **Body** (400, `1.0625rem` **fixed — no clamp**, line-height 1.55): reading text. Body deliberately doesn't fluid-scale because reading sizes should not move with viewport. Prose containers capped at `--container-prose` (38rem ≈ 65–75ch).
- **Label** (500, `0.875rem`, all-small-caps, tracking `0.06em`): the `.label-meta` and `.section-label` pattern. Carries the "engineered" signal — used for kickers, section labels, role labels, dl labels, byline meta.

### Named Rules

**The Mono-as-Metadata Rule.** Mono never carries body copy or headlines. It carries metadata: project years, role labels, stack tags, kbd, code, the `§` marker. Every mono appearance is a small "this was labelled with care" signal.

**The Section-Marker Rule.** `.section-label` ALWAYS prefixes with `§ ` in the accent color. This is the page's recurring editorial signature; do not remove or replace with an icon.

**The Tracking-by-Size Rule.** Heading tracking forms a graded scale (`-0.028em` → `-0.005em`) tighter as size grows. Body and label letter-spacing handle themselves; do not tweak per-instance.

**The Balance + Pretty Rule.** Headings use `text-wrap: balance`. Body and list items use `text-wrap: pretty`. Don't disable.

## 4. Elevation

**Flat by default, tonal layering for depth.** The system uses zero shadows. Depth is conveyed via the surface palette (`bg` → `surface` → `surface-sunk`), via 1px rules in `--color-rule`, and via the section-rhythm vocabulary (vertical whitespace). Cards live almost entirely on `bg` with a `--color-border` outline; sunk surfaces appear only on specific contained panels.

### Named Rules

**The No-Shadow Rule.** Box-shadow is forbidden as a decorative or hierarchical signal. The only sanctioned `box-shadow` usage anywhere on the site is the focus-visible outline equivalent — and even that uses `outline: 2px solid var(--color-accent)`, not a shadow. If a UI moment seems to need elevation, reach for tonal contrast or a rule first.

**The Section-Rhythm Rule.** Vertical separation between sections is the depth system. Three modes (mobile baselines, widened on ≥48rem): `default` 6rem, `continued` 3rem (reads as continuation of the prior section), `pause` 8rem (closing chord / conversion moment, currently Contact). Every section picks one; exceptions carry a comment naming the reason. Adjacent sections separate with a single `1px solid var(--color-rule)` line — never a heavier border.

## 5. Components

### Buttons

- **Shape:** 3px radius (`--radius-sm`). Soft-cornered, not pill, not square. Min-height 44px for touch.
- **Primary** (`.btn-primary`): solid `--color-accent` background with `--color-bg` text. The single saturated UI element on most viewports. Padding `0.75rem 1.5rem`. Transitions on background, border, color, transform — never on layout.
- **Secondary** (`.btn-secondary`): transparent background, 1px `--color-border-strong` outline, body text color. Hover swaps the border to `--color-accent` and tints the text accent.
- **Hover:** Color shift only — no transform, no shadow lift.
- **Focus-visible:** 2px solid `--color-accent` outline at 3px offset. Identical treatment on all interactive elements.

### Section labels

The recurring editorial signature. Inline-block small-caps `.section-label` heading with a `§ ` glyph in the accent color, body 0.875rem, tracking 0.06em, `--color-text-subtle`. Always followed by either the section content directly or a `.section-lede` paragraph (1.4 line-height, max 44rem, larger than body, no clamp). Lede appears on Services-style sections that need an editorial intro; quieter continuation sections omit it.

### Metadata labels (`.label-meta`)

`font-variant-caps: all-small-caps`, 0.06em tracking, weight 500. Used for hero kickers, service kickers, list labels (`Enthalten` / `Nicht enthalten`), table dt elements. Color and margin are per-call-site; the base utility carries only the small-caps voice.

### Service block (numbered editorial entry)

The Services section's distinctive pattern. Leading mono numeral (`01`, `02`, `03`) inside `.service-index`, followed by a thin horizontal `.rule` running to the column edge. Below it: kicker (label-meta) → title (Title size) → description → price-callout (large mono numeral) → cadence note → two lists (`is-included` ✓ + `is-excluded` ✗, both small-caps labels). Reads as a ledger entry, not a card. **Specifically not bordered or boxed.**

### Hero

Asymmetric `minmax(0, 1.3fr) minmax(12rem, 1fr)` grid on ≥48rem. Left column: kicker → display headline (with `text-wrap: balance`) → body → CTA pair. Right column: availability pill (dot + label) and mono colophon list. Mobile collapses to single column with metadata stacked beneath body. The hero is deliberately the only section without a top border (it owns the page top).

### Availability pill

The page's distinctive "calm signal" element. Small-caps text, accent dot, no card chrome. Used in hero meta and reused in footer. Renders the recurring-relationship beat ("Verfügbar ab …") as a quiet status, not as a sales push.

### Inputs (contact form)

Stroke style with 1px `--color-border-strong`, no fill. Focus shifts the border to `--color-accent` plus the 2px outline. Error state uses the warm-red palette on border + helper text. Honeypot is `display: none` plus `aria-hidden`.

### Links

Solid `--color-accent` color. Underline at 25% accent-mix opacity, 1px thickness, 0.18em underline-offset. Hover: underline color goes to currentColor (full contrast); color shifts to `--color-accent-hover`. No icon, no chevron, no external-link badge.

## 6. Do's and Don'ts

### Do

- **Do** use OKLCH for every color. Hex is forbidden in the source.
- **Do** carry one ink-blue hue (`248°`) across accent + every neutral. Chroma drops toward 0 as neutrals approach the surface.
- **Do** let typography carry the design. Before reaching for color, gradient, shadow, or illustration, try weight / size / tracking / mono.
- **Do** label every section with the `§` small-caps `.section-label` pattern. The `§` is the recurring editorial signature.
- **Do** break the grid intentionally in one or two places per page (e.g. the asymmetric hero, the leading-numeral service entries). Don't break it everywhere.
- **Do** use `text-wrap: balance` on headings, `text-wrap: pretty` on body and lists.
- **Do** use tabular figures (`tnum`) wherever mono touches numerics — prices, years, dates, version strings.
- **Do** respect `prefers-reduced-motion` rigorously. The scroll-reveal pattern is the reference; never regress.
- **Do** keep the page-load orchestration restrained — one stagger sequence, ~400–600ms, ease-out-quart. Worth more than scattered hover micro-interactions.
- **Do** use `--color-rule` (the lightest border) for section dividers, never `--color-border` and never `--color-border-strong`.

### Don't

- **Don't** use `#000` or `#fff` anywhere. Every neutral is tinted toward `248°`.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, callouts, list items, blockquotes. Use full borders, leading numerals/metadata, or nothing. Specifically not the SaaS-callout pattern.
- **Don't** use gradient text (`background-clip: text` with a gradient). Solid colors only, ever. Emphasis via weight or size.
- **Don't** introduce glassmorphism, glow, neon, or animated gradient.
- **Don't** place an icon above every heading. Sections live without icons.
- **Don't** build card grids of `icon + heading + text`. Project entries are editorial entries with metadata, not tiled cards.
- **Don't** write a hero subtitle that restates the headline. The body paragraph carries the next beat, not a paraphrase.
- **Don't** use modals where a dedicated page or an inline disclosure would do.
- **Don't** use em dashes (`—`) in any new UI copy. Use commas, colons, semicolons, periods, or parentheses. Existing copy with em dashes is grandfathered; new copy is not.
- **Don't** add a "trusted by" logo wall or friend-network testimonials.
- **Don't** scroll-jack, parallax, or animate on scroll progress beyond the existing one-shot fade-in.
- **Don't** add a CSS framework (Tailwind, Bootstrap, etc.). The system is hand-written CSS custom properties.
- **Don't** transition layout properties. `transform` and `opacity` only.
- **Don't** introduce a third font. Two families is the ceiling — General Sans Variable + Commit Mono.
- **Don't** add a third-party CAPTCHA. The honeypot + per-IP rate-limit is the policy.
