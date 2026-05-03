## Design Context

### Users

**Two audiences, one page — but no longer co-equal.** The homepage's primary job is to convert SMB prospects into recurring-relationship clients (build + host + maintain). Peers remain a real second audience, but the page is no longer trying to be a stack-taste portfolio that *also* happens to convert SMBs; it's a recurring-revenue acquisition page that *also* survives a peer's close inspection.

1. **SMB prospects (primary)** — Austrian and German small-business owners (a physiotherapy practice owner, a local trade business, the person behind scanzy.at) evaluating Benjamin for a landing-page redesign that comes with ongoing hosting & maintenance. They're not buying a one-shot project — they're buying a relationship and a single point of contact who handles the whole stack so they don't have to. They're not reading for stack credibility — they're reading for *"does this person seem like they'd actually finish the job, not ghost me, and still be there in two years to update it."* Likely viewing on a phone, likely skimming, likely suspicious of web-designer fluff and of subscriptions that feel like SaaS lock-in.
2. **Engineers, recruiters, technical peers (secondary)** — people who open the site after seeing Benjamin's name on GitHub, LinkedIn, or a referral. They look for: stack taste, architectural judgement, how the site itself is built, whether the person sounds like someone they'd want on a team. The page must still survive their gaze, but it should not contort itself to lead with stack-credibility signals at the expense of the SMB conversion.

**Positioning posture (explicit)**: lead with the recurring relationship, not the one-shot project. Hosting & Betrieb is the *headline offer*, the landing-page redesign is how that relationship begins. The €120/Monat tier is intentionally first because it names the long-term shape of the engagement; ab €500 fixed-price is the entry point into it. Reframe wording so this reads as *"one point of contact, predictable monthly cost, you don't have to think about your site again"* — never as "subscription as gatekeeper" or generic SaaS lock-in.

**Context of use**: Daylight, mixed devices, low attention. No one is here for a tour — they want to decide in under 90 seconds whether to keep reading, bookmark, or send the inquiry form. The site must reward skimmers *and* survive close inspection.

**Job to be done**:
- Prospects (primary): "Will this person redesign my site, then keep it running so I don't have to think about it — and how much will that cost me per month?"
- Peers (secondary): "Who is this, what do they actually build, and is the work interesting?"

### Brand Personality

**Three words that came back from Benjamin**: *Considered / Engineered · Honest / Direct · Warm / Austrian / Durable.*

Unpacked:

- **Considered / Engineered** — every choice on the site should feel thought-through, not reflexive. Nothing arbitrary. Typography has a reason. Spacing has a reason. The palette has a reason. Like a tool made by someone who uses tools.
- **Honest / Direct** — no marketing-speak. No "I craft pixel-perfect experiences." No "let's build something amazing together." The copy already reads like a person talking; the design must match that voice rather than wrap it in a mask.
- **Warm / Austrian / Durable** — European sensibility, not Silicon-Valley-tech-portfolio. A person wrote this. It's rooted in Vienna — not Vienna in a touristic-Habsburg way, but Vienna as in "someone who self-hosts on Hetzner because it's down the road in Gunzenhausen." Built to last: the design shouldn't age out in a trend cycle, and the code shouldn't either.

**Voice**: quiet confidence. Nothing defensive ("I'm not like those other developers"), nothing boastful ("trusted by X"). Close to how someone describes their own work at a Heuriger when asked politely — understated, accurate, slightly dry.

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
7. **Lead with the relationship, not the transaction.** The page's primary conversion is into a recurring hosting & care arrangement. Wherever the page mentions price, scope, or process, it should imply continuity by default — "wir arbeiten weiter" rather than "wir liefern aus." Hero, Services, and Trust must each carry one clear beat of "this is the start of an ongoing thing." Never sell continuity through urgency or fear; sell it through calm reliability.
