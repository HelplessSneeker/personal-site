# WKO meeting — site-wide context

Read this first when picking up *anything* on benjamin.noessler.at that's coupled to the WKO meeting on **2026-05-02 / 2026-05-03**. It's the index — three things across the codebase wait on a single conversation, and they should all be filled in one sweep.

Last updated 2026-04-28.

For the deep legal-page detail (Gewerbe vs. Neue Selbständige paths, exact wording per outcome), see [`legal-context.md`](./legal-context.md). This file is the cross-cutting view; that one is the spec.

## What the meeting unblocks

Three independent surfaces of the site are blocked on outcomes from the same WKO conversation:

| # | Surface                       | Blocker                                                       | Files                                                   |
|---|-------------------------------|---------------------------------------------------------------|---------------------------------------------------------|
| 1 | **Impressum content**         | 3 fields × 2 languages — see legal-context.md                 | `src/pages/impressum.astro`, `src/pages/en/imprint.astro` |
| 2 | **Pricing tax wording**       | "Ab €500 + Hosting" needs a tax-treatment suffix              | `src/i18n/de.json`, `src/i18n/en.json`                  |
| 3 | **`.todo-placeholder` infra** | CSS class + 3 color vars only exist to render the legal chips | `src/styles/global.css`                                 |

All three resolve cleanly once you know:

- **Path**: Gewerbe (with WKO chamber membership) or Neue Selbständige (no chamber, SVS only)
- **VAT status**: Kleinunternehmer-Regelung (under €35k net annual revenue, no USt.) or USt.-pflichtig (ATU number)
- **Aufsichtsbehörde**: Bezirksamt 1030 (if Gewerbe) or no Gewerbebehörde (if Neue Selbständige)

The legal-context.md spec covers what each outcome means for the Impressum. This file covers the other two surfaces.

## Surface 2 — Pricing tax wording

Added 2026-04-28 to the Services landing card:

```jsonc
// src/i18n/de.json
"bullets": [..., "Ab €500 + Hosting"]

// src/i18n/en.json
"bullets": [..., "From €500 + Hosting"]
```

This wording is **deliberately tax-agnostic** until the meeting. After the meeting, decide:

**If Kleinunternehmer-Regelung applies (likely path while starting out):**

- DE: `Ab €500 + Hosting · keine USt.` — or — `Ab €500 + Hosting (Kleinunternehmer)` — or leave as-is and add a fine-print note next to the Trust process step 2 that explains "Kleinunternehmer gem. §6 UStG, daher keine USt.-Ausweisung"
- EN: `From €500 + Hosting · VAT-exempt (Austrian small business scheme)`

The cleanest move is usually to keep the headline price clean (`Ab €500 + Hosting`) and add the tax basis once, in fine print at the Services or Trust section. SMB buyers don't want price math in the bullet list.

**If USt.-pflichtig:**

- DE: `Ab €500 zzgl. 20 % USt. + Hosting` — required, otherwise the price reads as a B2C gross price and creates conflict at invoice time.
- EN: `From €500 + 20% VAT + Hosting`

**Reference**:

- The price line is rendered via `Services.astro` → `services.landing.bullets[3]` in both locale dictionaries.
- Hourly rate (€50) is intentionally **not** disclosed on the page (see memory: lead with project price, not hourly).
- The `Festpreis` claim appears in two more places — `proof.items[0]` ("Festpreis") and `trust.process.steps[1].title` ("Festpreis-Angebot"). Neither carries a number, so neither needs a tax-suffix update; they're qualitative claims about the *posture*, not the number.

## Surface 3 — `.todo-placeholder` cleanup

After the last `(post-WKO 2026-05)` chip is removed from both Impressum files, the entire `.todo-placeholder` infrastructure becomes dead code and can be deleted:

```css
/* src/styles/global.css */
:root {
  --color-todo-bg: oklch(96% 0.040 82);
  --color-todo-border: oklch(70% 0.130 72);
  --color-todo-text: oklch(42% 0.100 62);
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-todo-bg: oklch(26% 0.050 72);
    --color-todo-border: oklch(62% 0.110 72);
    --color-todo-text: oklch(80% 0.100 72);
  }
}

.todo-placeholder { /* whole rule block */ }
```

Both blocks have a comment marking them as legal-page-only. To verify nothing else uses them:

```sh
grep -rn "todo-placeholder\|--color-todo" src/
```

Should return only the global.css definitions and (until step 3) the legal-page chips. If anything else has started using the class in the meantime, remove the new usage first or refactor — don't keep the class alive for a single off-spec consumer.

## The post-WKO sweep — recommended order

1. **Read both contexts before doing anything.** This file gives the surfaces; `legal-context.md` gives the wording per outcome.
2. **Fill Impressum chips** (3 DE + 3 EN). Follow the per-path spec in `legal-context.md`. Remove the line-17 intro warning from both Impressum files once the last chip lands.
3. **Decide pricing tax wording.** Edit `src/i18n/de.json` and `src/i18n/en.json` together. Cross-check: same outcome, both locales, no orphan tax-suffix in only one language.
4. **Run dev**, visit `/`, `/en/`, `/impressum`, `/en/imprint`, `/datenschutz`, `/en/privacy`. Confirm zero orange chips render anywhere on any page.
5. **Delete `.todo-placeholder` infrastructure** from `global.css` (two places — the light + dark color-var blocks, plus the rule). Re-grep to confirm clean.
6. **`npx astro check`** + visual smoke-test. Commit as a single "post-WKO content + cleanup" commit, or split into "fill legal placeholders" + "finalize pricing tax wording" + "remove WKO-pending infrastructure" if you want clean atomic commits in the history.

## Out of scope (don't touch in the WKO sweep)

- Anything else on the site — the design refresh from 2026-04-28 (Hero, Proof bar, Selected Work, Footer) is separate work and unrelated to the WKO outcome.
- Hourly-rate disclosure on the public page (intentionally kept off; project pricing is the public anchor).
- The `b-cal` project's missing screenshot (separate todo — needs a real screenshot from the user's local Coolify deployment when convenient).
