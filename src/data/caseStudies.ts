/**
 * Deep case studies rendered on /portfolio (DE) and /en/portfolio (EN).
 * Each item carries Problem → Lösung → Stack → Ergebnis in both locales.
 *
 * The shorter project cards on the home `SelectedWork` section live in
 * `./projects.ts`. A project gains a deep entry by sharing the same `slug`
 * here and by setting `caseStudySlug` on the matching `Project`.
 *
 * Style notes (per repo DESIGN.md / CODING.md):
 * - No em dashes in copy. Use commas, colons, semicolons, periods.
 * - Lead with business value; stack lives in its own block, not in prose.
 */

export interface CaseStudyLink {
  href: string;
  label: { de: string; en: string };
  external?: boolean;
}

export interface CaseStudy {
  slug: string;
  /** Visible heading. Falls back to the project title if undefined per locale. */
  title: { de: string; en: string };
  /** Single line directly under the title (org, role, time, context). */
  meta: { de: string; en: string };
  problem: { de: string; en: string };
  solution: { de: string; en: string };
  stack: string[];
  outcome: { de: string; en: string };
  links?: CaseStudyLink[];
  /** Hero image — same path convention as `projects.ts` (under /public). */
  image?: string;
  imageAlt?: { de: string; en: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'vordermann',
    title: {
      de: 'Vordermann Flächenreinigung',
      en: 'Vordermann Flächenreinigung',
    },
    meta: {
      de: 'Freelance · Konzept, Design, Build · Astro · 2026',
      en: 'Freelance · concept, design, build · Astro · 2026',
    },
    problem: {
      de: 'Die bestehende Website lag als Angular-SPA im JS-Bundle vergraben. Inhalte waren für den Betrieb nicht pflegbar, mobile Performance schwach, und Anfragen kamen ausschließlich per Telefon. Vor jedem neuen Auftrag stand Pingpong zwischen Rückruf, Vor-Ort-Termin und Angebot.',
      en: 'The existing site was an Angular SPA with the actual content buried in the JS bundle. Nothing was maintainable from the business side, mobile performance was weak, and every inquiry arrived by phone, so each new job started with callback ping-pong before a quote could be made.',
    },
    solution: {
      de: 'Redesign in Astro mit klarer Color-Block-Architektur, mobile-first. DSGVO-saubere selbst gehostete Schriften, Vorher/Nachher-Slider für Referenzen, Team-Section, ein klares Leistungs-Portfolio statt verstreuter Bullet-Listen. Anfrage-Formular als gleichwertiger Kanal neben dem Telefon. Legal-Pages mit echten Firmen-Stammdaten, Coolify-Deploy über Docker auf nginx.',
      en: 'Rebuilt in Astro with a clear colour-block layout, mobile-first. GDPR-clean self-hosted fonts, a before/after slider for references, a team section, and a single tidy services list instead of scattered bullet points. The inquiry form sits as a proper channel next to the phone. Legal pages carry the real company details; deploy is Docker to nginx via Coolify.',
    },
    stack: ['Astro 5', 'Tailwind 4', 'TypeScript', 'pnpm', 'Docker', 'nginx', 'Coolify', 'Playwright'],
    outcome: {
      de: 'Übergeben am 21.05.2026, Rechnung bezahlt. Die Site läuft live, der Betrieb empfängt Anfragen über das Formular und ist nicht mehr auf Telefon-Pingpong angewiesen. Inhalts-Updates landen nicht mehr im JS-Bundle.',
      en: 'Handed over on 21 May 2026, invoice settled. The site is live, inquiries arrive through the form instead of phone tag, and content updates no longer live inside the JS bundle.',
    },
    links: [
      {
        href: 'https://vordermann-reinigung.at',
        label: { de: 'vordermann-reinigung.at', en: 'vordermann-reinigung.at' },
        external: true,
      },
    ],
    image: '/projects/vordermann.png',
    imageAlt: {
      de: 'Startseite vordermann-reinigung.at: Mitarbeiter im Einsatz vor einer Garageneinfahrt, Headline „Wir bringen Ihr Grundstück wieder auf Vordermann.“',
      en: 'vordermann-reinigung.at homepage: staff at work in front of a driveway with the headline "Wir bringen Ihr Grundstück wieder auf Vordermann."',
    },
  },
  {
    slug: 'b-cal',
    title: { de: 'b-cal', en: 'b-cal' },
    meta: {
      de: 'Eigenes Produkt · Architektur, Build, Betrieb · seit 2025',
      en: 'Personal product · architecture, build, ops · since 2025',
    },
    problem: {
      de: 'Kalender-Apps wie Google oder Outlook ziehen Termine, Erinnerungen und Auth in fremde Ökosysteme. Ich wollte einen Beleg, dass ich eine vollwertige Webapp aus einer Hand bauen und betreiben kann, ohne mich an einen Anbieter zu binden. Frontend, Backend, Datenbank, Auth, Mail-Versand, Deploy.',
      en: 'Calendar apps like Google or Outlook pull events, reminders and auth into someone else\'s ecosystem. I wanted hard evidence that I can build and run a full web app end-to-end, with no vendor in between: frontend, backend, database, auth, mail, deploy.',
    },
    solution: {
      de: 'Next.js-Frontend gegen ein NestJS-Backend, Prisma als ORM auf PostgreSQL. Eigene Sessions statt Drittanbieter-Auth, Multi-Device, E-Mail-Erinnerungen über SMTP. UI zweisprachig (DE/EN), Dark- und Light-Theme. Selbst gehostet auf eigener Hetzner-Infrastruktur, Code öffentlich, Demo direkt im Browser nutzbar.',
      en: 'Next.js on the front, NestJS on the back, Prisma over PostgreSQL. Own session-based auth instead of a third-party provider, multi-device, email reminders via SMTP. Bilingual UI (DE/EN), dark and light themes. Self-hosted on my own Hetzner infrastructure, code public, demo usable straight in the browser.',
    },
    stack: ['TypeScript', 'Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'SMTP', 'Hetzner'],
    outcome: {
      de: 'Lebende Beleg-App: jeder Layer (Auth, ORM, UI, Mail, Deploy) ist sichtbar, lesbar, nutzbar. Wird als Referenz gegenüber Agenturen und KMU eingesetzt, um Webapp-Tiefe jenseits klassischer Marketing-Sites zu zeigen.',
      en: 'A living reference app: every layer (auth, ORM, UI, mail, deploy) is visible, readable, and usable. I use it with agencies and small businesses to demonstrate web app depth beyond classic marketing sites.',
    },
    links: [
      {
        href: 'https://cal.bfnoessler.at',
        label: { de: 'cal.bfnoessler.at', en: 'cal.bfnoessler.at' },
        external: true,
      },
      {
        href: 'https://github.com/HelplessSneeker/b-cal',
        label: { de: 'GitHub', en: 'GitHub' },
        external: true,
      },
    ],
    image: '/projects/b-cal.png',
    imageAlt: {
      de: 'b-cal Monatsansicht in dunklem Theme mit farbcodierten Einträgen für die Kalender „Arbeit“ und „Privat“.',
      en: 'b-cal month view in a dark theme with colour-coded entries across the "Arbeit" and "Privat" calendars.',
    },
  },
  {
    slug: 'ai-trading-platform',
    title: {
      de: 'KI-gestützte Handelsplattform (Consulting)',
      en: 'AI-powered trading platform (consulting)',
    },
    meta: {
      de: 'Consulting · Architektur-Sparring · 9,5 h · 2026',
      en: 'Consulting · architecture sparring · 9.5 h · 2026',
    },
    problem: {
      de: 'Der Klient arbeitete an einer KI-gestützten Handelsplattform mit Sendungs-Tracking zwischen Händlern und Käufern. Offen war: Wie lässt sich AI sinnvoll integrieren, ohne sich an einen Anbieter zu binden, in der LLM-Hype-Falle zu landen oder den ersten Wurf zu überfrachten?',
      en: 'The client was building an AI-powered trading platform with shipment tracking between traders and buyers. The open question: how to integrate AI in a way that stays useful, avoids vendor lock-in, sidesteps the LLM-hype trap, and keeps the first iteration small enough to ship.',
    },
    solution: {
      de: '9,5 Stunden fokussiertes Architektur-Sparring. Diskutiert wurden eine LLM-Provider-Abstraktion (mock, lokal, hosted), die Wahl zwischen RAG und Function-Calling für den ersten Use-Case, ein einfaches Eval-Setup zur frühen Qualitäts-Messung sowie die Daten-Pipeline. Ergebnis war eine geschnittene Roadmap mit klarem Scope für Iteration 1 und 2.',
      en: '9.5 hours of focused architecture sparring. We worked through a provider-agnostic LLM abstraction (mock, local, hosted), the choice between RAG and function calling for the first use case, a lightweight eval setup to measure quality early, and the data pipeline. The outcome was a sliced roadmap with a clear scope for iteration 1 and 2.',
    },
    stack: ['LLM-Architektur', 'Provider-Abstraktion', 'RAG-Patterns', 'Function Calling', 'Eval-Setup'],
    outcome: {
      de: 'Klare Roadmap, der Klient konnte eigenständig weiterbauen, ohne sich an einen Anbieter zu binden. Rechnung bezahlt. Liefer-Feedback („zu technisch, zu wenig Big Picture“) hat den Pitch-Stil meiner Folge-Akquise direkt geprägt.',
      en: 'Clear roadmap and the client could move forward on their own without locking into a vendor. Invoice settled. The delivery feedback ("too technical, not enough big picture") fed straight into how I pitch follow-up work.',
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
