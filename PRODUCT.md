## Design Context

### Users

> **2026-08-07 — Portfolio-First-Pivot.** This section was rewritten. The page is no longer a recurring-revenue acquisition page; it is a portfolio that also sells. Rationale and alternatives in `bfn-wiki/decisions/2026-08-07 - Personal-Site-Portfolio-First.md` — that decision, not this file, is the source of truth for *why*.

**The traffic changed, so the page changes.** With cold outreach stopped (30.06.2026), LinkedIn / Malt / Freelancermap act as discovery surfaces, and every real lead so far arrived through a referral. Nobody lands here cold anymore. This site is the **verification surface** — what someone opens *after* they already heard the name. That visitor asks "is this person real?", not "what does it cost?". A page that opens with a monthly price answers the wrong question first.

1. **The verifier (primary)** — a referral contact, a recruiter, an agency lead, or a peer who just heard Benjamin's name or found him on a platform. They are 30 seconds into deciding whether he is worth a conversation. They want: what has he actually built, does it still run, does he have judgement, is he interesting. They are skeptical of claims and receptive to evidence. Anything that reads as a sales page *lowers* their trust; anything that reads as "here's the thing, here's how long it's been running" raises it.
2. **SMB prospects (secondary, still converting)** — Austrian and German small-business owners evaluating Benjamin for a redesign plus ongoing hosting & maintenance. They are no longer served by the homepage hero; they are served by a calm closing block on the homepage that leads to `/bundle`, which stays complete and unchanged. They're reading for *"would this person finish the job, not ghost me, and still be there in two years."* Likely on a phone, likely skimming, suspicious of web-designer fluff.

**Positioning posture (explicit)**: **evidence over claims, running systems over skill lists.** The strongest sentence on this site is not "I do reliable hosting" — it is a line of mono metadata reading `invoice.bfnoessler.at · running since 05/2026 · Hetzner / Coolify`. Never state a capability the page can't point at. This resolves the guardrail in `bfn-wiki/strategie/positionierung.md`: skills get pitched once they are *visible*, so making infrastructure visible is what earns the right to pitch it.

**Hard prohibition**: no skill grid, no technology logo wall, no proficiency bars, no "my stack" icon rows. That format is interchangeable, and it is self-assessment dressed as proof. Capability is expressed through named things with dates on them.

The offer still exists and still matters — it just lives on `/bundle` instead of the hero. Canonical Phase-1 storefront-bundle (per `bfn-wiki/angebot/bundle.md`, Stand 16.05.2026):

- **Base — Website + Invoice Ninja**: 1.800 € Setup (Website) + 390 € Setup (Invoice Ninja with EN16931 + EPC-QR + KU-Klausel) + **89 €/Monat** Wartung & Hosting.
- **Add-ons** (jederzeit zubuchbar): Cal.com (+10 €/M), Umami Analytics (+5 €/M), Listmonk Newsletter (+10 €/M). Setups einmalig 50–90 €.
- **Pro-Bundle** (alle drei Add-ons gemeinsam): **+20 €/Monat** statt 25 — der Anker, der die Bundle-Decision triggert.
- **Vollpaket** (Base + Pro-Bundle): 2.390 € Setup + **109 €/Monat**.
- **Standalone option**: nur Invoice Ninja Hosting ohne Website-Setup → 49 €/Monat. Existiert für Bestandskunden, ist NICHT die Headline.
- **Stundensatz** für Erweiterungen: 60 €/h.

Reframe wording so this reads as *"one point of contact, predictable monthly cost, you don't have to think about your site again"* — never as "subscription as gatekeeper" or generic SaaS lock-in. Invoice Ninja with EN16931-Hybrid-PDF is a real B2B differentiator (e-invoicing pflicht is incoming), not a side-feature; treat it as load-bearing in the pitch.

**Context of use**: Daylight, mixed devices, low attention. No one is here for a tour — they want to decide in under 90 seconds whether to keep reading, bookmark, or reach out. The site must reward skimmers *and* survive close inspection.

**Job to be done**:
- Verifier (primary): "Who is this, what has he actually built and does it still run, and is the work interesting enough to talk to him?"
- SMB prospect (secondary): "Would this person redesign my site and then keep it running — and what does that cost per month?"

**Source of truth for pricing, scope, and offer composition**: `bfn-wiki/angebot/bundle.md` and `bfn-wiki/strategie/`. If this file conflicts with the wiki, the wiki wins. Mirror wiki updates here when they affect site copy or IA.

### Information Architecture

Four surfaces, in descending priority:

| Route (DE / EN) | Role |
|---|---|
| `/` · `/en/` | Portfolio-first entry: who, what got built, what is running. No price above the fold. Closing block leads to `/bundle`. |
| `/portfolio` · `/en/portfolio` | Three tracks (below). The substance of the site. |
| `/lab` · `/en/lab` | Prose surface: homelab, infrastructure, debugging write-ups, the agent fleet. Own rhythm, no CTA. |
| `/bundle` · `/en/bundle` | Unchanged. Stays in the nav, no longer the first item. |

**The three portfolio tracks** — this is the central new structure. Not a mixed chronological list; three distinct tracks, because each answers a different question:

1. **Built for clients** (*Für Kunden gebaut*) — Vordermann, FoundersGroup, SCANZY. Answers "does he ship for real people." Existing case studies feed this track.
2. **Built for myself** (*Selbst gebaut*) — immo-radar, b-leads, b-cal, backup-guard, this site. Answers "does he build when nobody pays him."
3. **Operated** (*Betrieben*) — the Hetzner VPS, the home server, the Tailscale network, Invoice Ninja, Uptime Kuma. Answers "can he actually run infrastructure over time."

**Track 3 is the load-bearing one.** It is the reason the hosting offer is credible, and it works *because* it isn't selling. Its defining element is a **`running since` metadatum** on every entry, set in mono with tabular figures — this is the single most persuasive detail on the site. Never write track-3 entries as feature bullets; write them as facts with dates.

**Lab is deliberately separate from Portfolio.** Portfolio is structure (entries, metadata, scannable); Lab is prose (narrative, unfinished, personal). Merging them would blunt both. Link between them where a portfolio entry has a matching write-up, never mirror content.

**Lab is bilingual** (DE + EN), matching the rest of the site. Content lives as Markdown; every entry needs a DE and an EN file. An entry ships only when both exist — a half-translated Lab reads worse than a small one.

**Security constraint on Lab and Track 3**: describe **roles, architecture, and reasoning** — never operational specifics. No hostnames, no Tailscale node names, no IP addresses, no port numbers, no directory layouts, no service topology that maps the network. "Seven agents with distinct roles, coordinating over a private mesh" is the register. "primus at 116.x.x.x runs the gateway on port N" is not. When in doubt, drop the detail: the credibility comes from the reasoning, not the coordinates.

**On the agent fleet specifically**: this is the strongest differentiator on the site and should be shown — what the agents do, how the roles are split, why it's built that way, what it changed about how he works. Show the design, not the deployment.

### Brand Personality

**Three words that came back from Benjamin**: *Considered / Engineered · Honest / Direct · Warm / Austrian / Durable.*

Unpacked:

- **Considered / Engineered** — every choice on the site should feel thought-through, not reflexive. Nothing arbitrary. Typography has a reason. Spacing has a reason. The palette has a reason. Like a tool made by someone who uses tools.
- **Honest / Direct** — no marketing-speak. No "I craft pixel-perfect experiences." No "let's build something amazing together." The copy already reads like a person talking; the design must match that voice rather than wrap it in a mask.
- **Warm / Austrian / Durable** — European sensibility, not Silicon-Valley-tech-portfolio. A person wrote this. It's rooted in Vienna — not Vienna in a touristic-Habsburg way, but Vienna as in "someone who self-hosts on Hetzner because it's down the road in Gunzenhausen." Built to last: the design shouldn't age out in a trend cycle, and the code shouldn't either.

**Voice**: quiet confidence. Nothing defensive ("I'm not like those other developers"), nothing boastful ("trusted by X"). Close to how someone describes their own work at a Heuriger when asked politely — understated, accurate, slightly dry.

**Honest about infrastructure**: the site and client apps currently run on a **Hetzner Cloud VPS in the EU region (Germany)**, not on physical hardware in Vienna. Wien is where bfn lives and works, not where the metal lives. Copy must reflect this — avoid "eigene Hardware", "Server in Wien", "eigene Infrastruktur in Wien" framings; they read as marketing-puff against the rest of the page's direct voice. Honest alternatives: "selbst gehostet", "voll von mir verwaltet", "europäische Cloud-Infrastruktur (Hetzner)", "EU-Region". The sovereignty argument carries via "no SaaS vendor in between, one point of contact" — not via geography. "Wien" stays where it refers to bfn the person (hero kicker, byline, about), gets dropped where it referred to the server's location.

**Emotional goal**: when a prospect lands, they should feel *"this person is calm, thorough, probably reliable, and someone I could keep working with for years."* The "for years" beat is new and important — recurring revenue requires the page to feel like the start of a relationship, not a one-night project. When a peer lands, they should feel *"this was built by someone whose taste I respect."*

### Aesthetic Direction

**Concept**: an engineer's notebook crossed with a Viennese craftsman's business card. Precise, typographic, warm in the neutrals, sparing with color. Editorial rhythm — reads more like a considered personal page than a structured portfolio template.

**Avoid hard**:

- **Agency-flashy / overdesigned** — no cursor blobs, no scroll-jacked hero, no "we craft experiences," no animated gradients. The site should not try to impress on first frame.
- **Corporate / consultancy bland** — also no stock photo, no navy-and-gray bullet-point grid, no "trusted by" logo wall, no safe-and-forgettable feature triptych.
- **Generic dev portfolio** — not the dark-bg / cyan-accent / icon-above-every-heading / feature-card-grid shape. Also not the "built with Next.js and TailwindUI" aesthetic.

**Type direction**: rejected the original Geist + Geist Mono pair. Geist has quietly become the Vercel-default across AI-generated dev sites — it now signals "template" more than "considered."

Implemented pairing (self-hosted, no third-party runtime requests):

- **Display + Body** — **General Sans Variable** (Indian Type Foundry, Fontshare). Single neo-grotesk family carries both display and body voices: precise bones, slight warmth, Central European feel without the Vercel-default tells. The "single workhorse over a pair" decision keeps the design system simpler and reduces font weight on the wire. Alt long-considered: Funnel Display + Hanken Grotesk pair — same direction, more moving parts. If we ever revisit, that's the upgrade path.
- **Mono** (metadata: project years, role labels, stack tags, kbd, code) — **Commit Mono 400/500** via `@fontsource/commit-mono`. Warm humanist monospace; reads as precise rather than terminal-hacky. No JetBrains Mono, no Geist Mono, no Space Mono.

Treat mono deliberately: it carries the "engineered" signal. Every place mono appears is a small signal *"this was labelled by someone who notices details."* Use it for small metadata, never for headlines or body copy.

**Color direction**: keep blue, but re-tune in OKLCH and shift it away from SaaS-generic territory toward ink-blue.

- Accent (light mode): approximately `oklch(38% 0.11 248)` — deeper, slightly cooler than current `#185fa5`, reads like fountain-pen ink rather than a primary-button blue. Use sparingly: links, focus rings, the availability pulse, one or two moments of emphasis. Never on large areas.
- Accent (dark mode): approximately `oklch(78% 0.09 248)` — soft parchment-blue, low chroma, never neon.
- Neutrals tinted toward the same hue (chroma `0.004–0.01`), so the page feels cohesive even where the accent is absent.
- Background light: warm off-white, `oklch(98.5% 0.004 248)`. Not pure white.
- Text light: deep ink, `oklch(18% 0.015 248)`. Not pure black.
- Background dark: warm charcoal, `oklch(15% 0.01 248)`. Not `#0f0f10`.
- Text dark: warm parchment, `oklch(92% 0.01 248)`.
- The `::selection` color inverts to accent as it currently does — good detail, keep it.

**Layout direction**:

- Asymmetric over centered. The existing hero grid (1.3fr : 1fr) is the right instinct — keep and extend that pattern into other sections rather than reverting to centered blocks.
- Break the grid intentionally in exactly one or two places per page for emphasis (e.g. a pull-quote or the currently-available marker slightly outdenting into the margin) — but only where it serves the content.
- Generous vertical rhythm (the existing `--space-9`/`--space-10` section padding is correct). Vary inner spacing more: metadata tight, body loose, transitions between sections deliberate.
- Max content width on prose stays ≤ 65–75ch. Never let body lines run wider.
- No card-grid-icon-heading-text pattern. Project entries especially: treat them as editorial entries with metadata, not as tiled cards.

**Motion direction**:

- One well-orchestrated page-load sequence (stagger the hero headline → body → availability → CTAs over ~400ms with ease-out-quart) is worth more than scattered hover micro-interactions.
- Respect `prefers-reduced-motion`. The existing handling is good — maintain it rigorously.
- No bounce, no elastic, no parallax, no scroll-driven gradient shifts.
- Transitions only on `transform` and `opacity`. Never on layout properties.

**Theme**: both, auto-follow system (keep current `@media (prefers-color-scheme: dark)` behavior). Both palettes deliberately designed — dark is not a tinted inverse of light, it's a separately-tuned companion.

**Specifically DO NOT**:

- No `border-left: 3px/4px solid …` accent stripes on anything (cards, callouts, list items, blockquotes). Use full borders, leading metadata, or no indicator.
- No gradient text (`background-clip: text` with a gradient). Solid colors only, ever.
- No glassmorphism, no glow, no neon-on-dark.
- No icon-above-every-heading.
- No bullet-point service feature trios in the "corporate homepage" shape.
- No hero subtitle that restates the heading.
- No modals where a dedicated page or inline disclosure would do.

### Design Principles

1. **Restraint is the signal.** The site's job is not to impress — it's to feel calm, precise, and trustworthy. If a decoration doesn't earn its place twice over, remove it.
2. **Typography carries the design.** Before reaching for color, gradient, shadow, or illustration, see whether type weight, size, tracking, or mono treatment solves it. It usually does.
3. **Metadata is craft.** Role, years, stack, availability, location — these small labels, set in warm mono with tabular figures, are where the "engineered" personality lives. Treat them deliberately everywhere.
4. **Asymmetry with reason.** Centered layouts are the safe default; asymmetric ones feel designed. Break the grid only where the content benefits — and be consistent about it.
5. **Built to last.** Avoid anything that will look dated in 18 months: neon accents, glassmorphism, animated gradients, scroll-driven effects. Favor choices that would read as quietly correct in print.
6. **Every word earns its place.** The copy is already terse and honest — the design must not pad it with headings that restate, icons that decorate, or sections that exist to fill space.
7. **Show the thing, don't claim the skill.** Every capability the site asserts must be attached to something named that exists — a client site, a tool, a running service with a date on it. If a sentence would survive unchanged on any other developer's site, it is a claim, not evidence, and it comes out. This principle outranks persuasion: an honest smaller list beats an impressive vaguer one.
8. **Continuity is the sales beat, and it stays quiet.** Where the page does mention price, scope, or process (`/bundle`, the homepage closing block), it implies continuity by default — "wir arbeiten weiter" rather than "wir liefern aus." Never sell continuity through urgency or fear; sell it through calm reliability. Nowhere else on the site does a CTA appear. The portfolio and the lab do not sell; that restraint is precisely what makes them persuasive.
