# Legal pages — handoff context

Read this first when picking up the legal-pages task. It captures the current state of the four legal pages, what's still pending, and the constraints behind each remaining decision.

Last updated after the 2026-04-27 session.

## Current state

The four legal pages live at:

- `src/pages/impressum.astro` (DE, primary)
- `src/pages/datenschutz.astro` (DE, primary)
- `src/pages/en/imprint.astro` (EN mirror)
- `src/pages/en/privacy.astro` (EN mirror)

What's filled in:

- **Business address (all four pages):** `Fasangasse 26/4, 1030 Wien` / `Vienna`. This satisfies §5 ECG (geographic address that accepts service of process — not a PO box, not a virtual mailbox).
- **Contact-form SMTP processor:** confirmed as 1&1 IONOS SE. The Datenschutz processor entry already lists IONOS with the correct legal address and privacy-policy link — no change needed unless the email provider changes.
- **Datenschutz pages:** no remaining placeholder chips, no intro warning. Both DE and EN are publish-ready as far as content goes.

What's still flagged in the Impressum pages (orange `todo-placeholder` chips, three per language, all labeled `(post-WKO 2026-05)`):

1. Unternehmensgegenstand / business activity
2. UID-Status / VAT status
3. Aufsichtsbehörde + Gewerberechtsstatus

These three are deferred because they all depend on decisions Benjamin will only have after his WKO appointment.

## WKO appointment — weekend of 2026-05-02 / 2026-05-03

Benjamin scheduled a Wirtschaftskammer (WKO) meeting to clarify his commercial setup. The three pending items are coupled — the answer to one constrains the others — so they're best filled in a single pass after the meeting. The questions to come back with concrete answers to:

### 1. Gewerbe vs. Neue Selbständige

This is the upstream decision that drives the other two. The two paths look like this on the Impressum:

**If Gewerbe** (Gewerbeschein, free or regulated trade, WKO chamber membership applies):

- Unternehmensgegenstand line: copy the activity wording from the Gewerbeschein verbatim. The standard ÖNACE 62 wording for freelance dev work is `Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik` (a *freies Gewerbe*, no Befähigungsnachweis). If multiple Gewerbe are registered, list each.
- Aufsichtsbehörde line: the Bezirksamt for the Gewerbestandort. For 1030 Wien this is `Magistratisches Bezirksamt für den 3. Bezirk` (or the more generic `Magistrat der Stadt Wien` if the meeting confirms that's how it should be worded). Keep the WKO chamber-membership link in place.

**If Neue Selbständige** (no Gewerbeschein, just SVA registration, no WKO chamber):

- Unternehmensgegenstand line: a self-described activity, e.g. `Software- und Webentwicklung als Neue Selbständige Tätigkeit`. There's no authority-mandated wording.
- Aufsichtsbehörde line: drop the WKO chamber-membership link entirely. The relevant authority for Neue Selbständige is the Sozialversicherungsanstalt der Selbständigen (SVS), and there's no Gewerbebehörde involvement. Adjust the section heading and link accordingly.

### 2. UID-Status

Two outcomes:

- **Kleinunternehmer-Regelung** (annual revenue under €35k net, no VAT charged): write `Nicht UID-pflichtig (Kleinunternehmer gem. §6 Abs. 1 Z 27 UStG)` in the UID line.
- **VAT-registered:** insert the actual `ATU########` number.

This is independent of Gewerbe vs. Neue Selbständige — both paths can be either VAT-registered or Kleinunternehmer.

### 3. Unternehmensgegenstand wording

Driven by #1. See the wordings above under each path.

## Coolify reverification — server-log retention

The Datenschutz pages currently state server access logs are deleted "nach maximal 14 Tagen" / "after a maximum of 14 days". As of 2026-04-27 the Coolify instance for this site is **not yet provisioned**, so the actual retention is unknown.

Once Coolify is set up:

- Check the Docker logging driver and host logrotate config for the container.
- If 14 days is accurate, leave the line as-is.
- If it's something else (commonly closer to "until the container is recycled" with `json-file` defaults, or a host-managed window), update the line in both `datenschutz.astro` and `en/privacy.astro`.

## How to finish post-WKO

1. Search the Impressum files for `(post-WKO 2026-05)` chips:

   ```sh
   grep -n "post-WKO" src/pages/impressum.astro src/pages/en/imprint.astro
   ```

2. Replace each chip with the final wording. Keep DE and EN in sync — translate by hand, don't run them through a machine translator without review.

3. Remove the line-17 intro warning (`<p class="todo-placeholder">TODO Benjamin: Nach dem WKO-Termin …`) from both Impressum files once the last chip is filled.

4. Run dev and visit `/impressum`, `/datenschutz`, `/en/imprint`, `/en/privacy`. Confirm zero orange `todo-placeholder` chips render anywhere.

5. Final grep — should return only the `.todo-placeholder` class definition in `global.css`, no `<span>` or `<p>` matches in `src/pages/`:

   ```sh
   grep -rn "todo-placeholder" src/pages/
   ```

6. Cross-check the address still appears identically in both Impressum and Datenschutz (and EN mirrors). Have a non-lawyer friend read the pages aloud — if any sentence sounds wrong or contradicts another, fix before launch.

## Out of scope

- Don't rewrite the privacy scaffold from scratch. The structure follows Austrian/EU norms and the processor disclosures (Hetzner, IONOS, Cloudflare Turnstile) are already correct for the current stack.
- If the stack changes later — analytics added (Plausible/Umami), captcha provider swapped, email host changed — those processor entries must be updated, but that's a separate task.
- Cookie banner is not currently needed (no cookies set, no tracking, no analytics). If Plausible/Umami is added later, both are cookieless under their default configs and still don't require a banner. Google Analytics would.
