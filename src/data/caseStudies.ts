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
    slug: 'scanzy',
    title: { de: 'SCANZY', en: 'SCANZY' },
    meta: {
      de: 'Freelance · Konzept, Design, Build · React + Vite · 2026',
      en: 'Freelance · concept, design, build · React + Vite · 2026',
    },
    problem: {
      de: 'SCANZY verkauft 360°-Touren, Drohnenflüge und FPV-Kino an Hotellerie, Immobilien und Hospitality. Das Produkt ist visuell, die bestehende Site löste das Versprechen nicht ein. Aufgabe: die Premium-Story in fünf Sekunden liefern, ohne in Agency-Showreel-Optik abzurutschen, und die etablierten Branchen-Routen (Hotel, Real-Estate, Restaurant, Kärnten) im Header erhalten.',
      en: 'SCANZY sells 360° tours, drone flights, and FPV cinematics to hotels, real estate, and hospitality. The product is visual, the previous site did not pay the promise. Brief: deliver the premium story in five seconds without sliding into agency-showreel optics, and keep the established industry routes (hotel, real estate, restaurant, Carinthia) intact in the header.',
    },
    solution: {
      de: 'Editoriales Dark-Hero mit der Drohnen-Aufnahme als Signature-Element, Brand-System aus Mitternachtsblau, Cremegold und warmem Creme-Background (Edition 2026 als Canon). Source-Serif-Display mit goldenen Italics als wiederkehrendes Akzent-Motiv, bewusst kein Fraunces. Routen-Struktur für Immobilien-, Hotel-, Restaurant- und Kärnten-Landings im Header erhalten, Legal-Pages sauber daneben.',
      en: 'Editorial dark hero with the drone footage as signature element, brand system in midnight navy, cream gold, and a warm cream background (Edition 2026 PDF as canon). Source Serif display with gold italics as recurring accent motif, deliberately not Fraunces. Industry routes for real estate, hotel, restaurant, and Carinthia landings preserved in the header, legal pages tidy alongside.',
    },
    stack: ['TypeScript', 'React 18', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    outcome: {
      de: 'Brand-System im Code festgeschrieben statt nur im PDF. Zentraler Anlaufpunkt für Anfragen, der Gründer empfiehlt seither aktiv weiter („Design und Struktur passen perfekt zum Angebot“).',
      en: 'Brand system locked into code, not only in the PDF. Central inquiry channel; the founder has been actively recommending the work onward since then ("design and structure fit the offering perfectly").',
    },
    links: [
      {
        href: 'https://scanzy.at',
        label: { de: 'scanzy.at', en: 'scanzy.at' },
        external: true,
      },
    ],
    image: '/projects/scanzy.png',
    imageAlt: {
      de: 'scanzy.at Startseite: SCANZY-Wortmarke über einer warmen Sonnenuntergangs-Berglandschaft, darunter die Headline „Ihr Objekt hat mehr verdient als nur Fotos.“',
      en: 'scanzy.at homepage: SCANZY wordmark above a warm sunset mountain landscape with the headline "Ihr Objekt hat mehr verdient als nur Fotos."',
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
    slug: 'personal-site',
    title: { de: 'bfnoessler.at', en: 'bfnoessler.at' },
    meta: {
      de: 'Eigene Marke · Konzept, Design, Build · Astro · 2026',
      en: 'Own brand · concept, design, build · Astro · 2026',
    },
    problem: {
      de: 'Standard-Templates für Dev-Portfolios verkaufen das Falsche: Geist plus Geist Mono ist der AI-Template-Default, „Trusted by“-Wände sind der Agentur-Reflex, animierte Gradients der Showreel-Reflex. Für ein Angebot, das auf wiederkehrender Pflege kleiner Landingpages basiert, muss die visuelle Ebene ruhig, präzise und vertrauenswürdig lesen, nicht wie ein Cursor-Blob-Showreel.',
      en: 'Stock dev-portfolio templates sell the wrong thing: Geist plus Geist Mono is the AI-template default, "trusted by" walls are the agency reflex, animated gradients the showreel reflex. An offer built on recurring care for small landing pages needs a visual layer that reads as calm, precise, trustworthy, not as a cursor-blob showreel.',
    },
    solution: {
      de: 'Self-hosted Astro-6-Site mit handgeschriebenem CSS-Token-System (kein Tailwind, kein Framework), einem einzigen Ink-Blue-Hue (oklch 248°), General Sans Variable plus Commit Mono statt Geist-Default, asymmetrisches editoriales Layout statt zentrierte Bullet-Grids. Zweisprachig DE/EN, jeweils eigene Stimme statt 1:1-Übersetzung. Kontaktformular mit Honeypot plus Per-IP-Rate-Limit, SMTP über nodemailer, kein Third-Party-Service. Kein Tracking, keine Third-Party-Schriften.',
      en: 'Self-hosted Astro 6 site with a hand-written CSS token system (no Tailwind, no framework), a single ink-blue hue (oklch 248°), General Sans Variable plus Commit Mono instead of the Geist default, asymmetric editorial layout instead of centred bullet grids. Bilingual DE/EN, each with its own voice rather than a one-to-one translation. Contact form with honeypot plus per-IP rate-limit, SMTP via nodemailer, no third-party transactional service. No tracking, no third-party fonts.',
    },
    stack: ['Astro 6', 'TypeScript', 'Hand-written CSS', 'Node standalone', 'nodemailer', 'Docker', 'Coolify'],
    outcome: {
      de: 'Die Seite genau hier. Lighthouse mobile konsistent ≥95 auf Performance, Accessibility, Best Practices, SEO. Brand- und Tooling-Ebene tragen das Angebot, statt es nur zu illustrieren.',
      en: 'The page right here. Lighthouse mobile consistently ≥95 on Performance, Accessibility, Best Practices, SEO. Brand and tooling layer carry the offer instead of just illustrating it.',
    },
    links: [
      {
        href: 'https://bfnoessler.at',
        label: { de: 'bfnoessler.at', en: 'bfnoessler.at' },
        external: true,
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
