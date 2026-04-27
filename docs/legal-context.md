# Legal pages — handoff context

Read this first when picking up the legal-pages task in a fresh session. It documents the goal, the legal context, the exact placeholders to fill, and the constraints that aren't obvious from the code alone.

## Goal

Make `benjamin.noessler.at` legally publishable in Austria by filling out the four legal pages:

- `src/pages/impressum.astro` (DE, primary)
- `src/pages/datenschutz.astro` (DE, primary)
- `src/pages/en/imprint.astro` (EN mirror)
- `src/pages/en/privacy.astro` (EN mirror)

All four currently render with visible orange `todo-placeholder` chips. Placeholders MUST be replaced before the site goes public — not because something will break technically, but because the imprint and privacy policy carry real legal weight under Austrian law.

## Legal context

Austrian websites operated commercially or with ad-revenue intent are subject to three overlapping disclosure regimes. Benjamin's freelance positioning makes this a commercial site, even if revenue is modest.

### §5 E-Commerce-Gesetz (ECG)
Requires anyone offering services electronically to disclose: full name, geographic address (no PO box), email, business activity, UID (VAT) ID or note that none applies, regulatory authority, and chamber membership (WKO for most trades). The Impressum page is where this lives.

### §25 Mediengesetz (MedienG)
Adds: imprint must include the publisher and editorial responsibility for the content. For a personal/business site this is just Benjamin himself; the Impressum already names him as `<address>`.

### DSGVO (GDPR) + österreichisches DSG
Requires a privacy policy disclosing: who the controller is, what data is collected, on what legal basis, who the processors are, where data is transferred, retention period, and the data subject's rights. The Datenschutz page covers this.

If Benjamin invokes the Kleinunternehmer-Regelung (annual revenue under €35,000 net) he is **not** VAT-liable and the UID line should say "Nicht UID-pflichtig (Kleinunternehmer gem. §6 Abs. 1 Z 27 UStG)" or similar, rather than leaving it blank.

## What needs to be filled

Each placeholder is a `<span class="todo-placeholder">TODO: …</span>` in the source. Search by the labels below.

### Both Impressum files (`impressum.astro` + `en/imprint.astro`)

| Placeholder | What to put |
|---|---|
| `Straße und Hausnummer` / `Street and number` | Geographic address (no PO box). Must match the address registered for the Gewerbe / business if applicable. Vienna address. |
| `PLZ und Wien` / `Postcode and Vienna` | e.g. `1010 Wien` / `1010 Vienna` |
| `z. B. „Dienstleistungen in der Informationstechnologie"` / `e.g. "Information technology services"` | The business activity as registered. For freelance dev work this is typically `Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik` (the standard ÖNACE 62.0 wording) — confirm whatever wording was used on the WKO/Gewerbe registration. |
| `UID oder Hinweis "nicht UID-pflichtig"` / `VAT ID or "not VAT-liable"` | Either the actual UID (`ATU…`) if VAT-registered, or `Nicht UID-pflichtig (Kleinunternehmer gem. §6 Abs. 1 Z 27 UStG)`. |
| `Bezirkshauptmannschaft / Magistrat gemäß Gewerbestandort` / `District authority / municipal authority based on business location` | For Vienna: `Magistratisches Bezirksamt für den [N.] Bezirk` corresponding to the Gewerbestandort. Or: `Magistrat der Stadt Wien` if not yet bezirklich differentiated. |

### Both Datenschutz files (`datenschutz.astro` + `en/privacy.astro`)

| Placeholder | What to put |
|---|---|
| `Adresse aus Impressum` / `Address from imprint` | Same address as in the Impressum — keep both pages in sync. |

The processor disclosures in Datenschutz are already filled in correctly:
- **Hetzner Online GmbH** (German hoster, Industriestr. 25, 91710 Gunzenhausen)
- **1&1 IONOS SE** (German SMTP relay used by the contact form to deliver email)
- **Cloudflare, Inc.** (US, Turnstile captcha on the contact form)

The IONOS entry assumes `noessler.at` email is hosted at IONOS. **Verify this matches reality** — if the email is actually with another provider (Migadu, Fastmail, Posteo, Mailbox.org, etc.), update the entry to the correct legal entity, address, and privacy-policy link.

If anything else changes about the stack — analytics added, captcha provider swapped, etc. — those processor entries must be updated too. They are the "what data goes where" disclosure that GDPR Art. 13 requires.

## Considerations Benjamin needs to confirm

These are decisions the legal pages encode but only Benjamin knows the answers to:

1. **Which address to use.** A residential address is required by §5 ECG (no PO box, no virtual office that doesn't accept service). If Benjamin doesn't want his home address public, options are:
   - Rent a coworking space and register the Gewerbe there (legitimate)
   - Use a "Geschäftsadresse" service (e.g. Regus, Yelda) that accepts legal service of process
   - Accept that the home address goes public — many freelancers do this
2. **Gewerbe vs. neue Selbständige.** If Benjamin operates as a "Neue Selbständige" (no Gewerbeschein, just SVA registration), the Aufsichtsbehörde and WKO chamber sections look different — neue Selbständige don't have a WKO chamber membership. The current scaffold assumes Gewerbe; adjust if not.
3. **Server-Logs retention.** The privacy page currently says "maximum 14 days". Confirm what Coolify/Hetzner actually retains by default — this needs to match reality.
4. **Cookie banner.** Currently NOT needed because the site sets no cookies (no analytics, no tracking). If Benjamin adds Plausible/Umami later, the privacy page needs an analytics section, and a cookie banner may or may not be required depending on the analytics tool's cookie policy. Plausible is cookieless = no banner; Umami self-hosted = no banner; Google Analytics = banner required.

## Verification after filling in

1. `npm run dev`, navigate to `/impressum`, `/datenschutz`, `/en/imprint`, `/en/privacy`. Confirm zero orange `todo-placeholder` chips visible.
2. `grep -rn "todo-placeholder" src/pages/` should return no `<span>` matches in the legal pages (only the `.todo-placeholder` class definition in `global.css`).
3. Cross-check the address appears identically in both Impressum and Datenschutz (and EN mirrors).
4. Have a non-lawyer friend read the pages aloud — if any sentence sounds wrong or contradicts another page, fix it before launch.

## Out of scope here

Do NOT attempt to write a privacy policy from scratch in a fresh session — the existing scaffold is already structured per Austrian/EU norms. Only fill the placeholders. If Benjamin wants a more polished version after launch, retain a lawyer or use a generator like `e-recht24.de` for an Austrian template.

The Impressum and Datenschutz copy are translated by hand between DE and EN — keep them in sync if either is edited.

## Suggested fresh-session prompt

> Read `docs/legal-context.md` first. Then walk me through filling in the placeholders in the four legal pages. Ask me for the address, UID status, and Gewerbe details one at a time so we don't have to revisit.
