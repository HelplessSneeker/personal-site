export type ProjectStatus = 'archived' | 'live' | 'in-development' | 'case-study';

/**
 * Portfolio track (see PRODUCT.md → Information Architecture).
 * `client` = built for paying clients, `personal` = built without a client.
 * Employment entries (`status: 'case-study'`) carry no track: they belong to
 * the /ueber layer, not to the portfolio.
 */
export type ProjectTrack = 'client' | 'personal';

export interface ProjectLink {
  href: string;
  labelKey: 'work.visitLink' | 'work.githubLink';
}

export interface Testimonial {
  quote: { de: string; en: string };
  author?: { de: string; en: string };
}

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  descriptionDe: string;
  descriptionEn: string;
  stack: string[];
  /** Portfolio track. Omitted on employment entries, which stay off /portfolio. */
  track?: ProjectTrack;
  context?: { de: string; en: string };
  role?: { de: string; en: string };
  years?: string;
  statusDe?: string;
  statusEn?: string;
  status: ProjectStatus;
  links?: ProjectLink[];
  image?: string;
  imageAlt?: { de: string; en: string };
  outcome?: { de: string; en: string };
  testimonial?: Testimonial;
  /** Slug of a matching entry in `caseStudies.ts`. When set, the card renders
   *  a "Case Study lesen →" link to the /portfolio page anchored at this id. */
  caseStudySlug?: string;
}

export const projects: Project[] = [
  {
    id: 'vordermann',
    title: 'vordermann-reinigung.at',
    descriptionDe:
      'Marketing-Site für einen Reinigungsbetrieb aus Wien, der Außenflächen in Wien, Niederösterreich, Burgenland und Kärnten reinigt — Terrassen, Einfahrten, Stein- und Betonflächen, Gehwege, Grünbereiche. Klare Struktur, schnelle Ladezeiten, Anfragen direkt über die Seite statt Telefon-Pingpong.',
    descriptionEn:
      'Marketing site for a Vienna-based outdoor-surfaces cleaning business operating across Vienna, Lower Austria, Burgenland and Carinthia — terraces, driveways, stone and concrete surfaces, walkways, green areas. Clear structure, fast load times, inquiries straight through the site instead of phone tag.',
    stack: ['TypeScript', 'Astro'],
    track: 'client',
    context: { de: 'Freelance', en: 'Freelance' },
    role: { de: 'Konzept, Design & Entwicklung', en: 'Concept, design & build' },
    status: 'live',
    links: [{ href: 'https://vordermann-reinigung.at', labelKey: 'work.visitLink' }],
    image: '/projects/vordermann.png',
    imageAlt: {
      de: 'vordermann-reinigung.at Startseite — Mitarbeiter im Einsatz vor einer Garageneinfahrt mit der Headline „Wir bringen Ihr Grundstück wieder auf Vordermann."',
      en: 'vordermann-reinigung.at homepage — staff at work in front of a driveway with the headline "Wir bringen Ihr Grundstück wieder auf Vordermann."',
    },
    outcome: {
      de: 'Direkte Anfragen statt Anrufkette — Webpräsenz und Lead-Kanal in einem.',
      en: 'Direct inquiries instead of a phone chain — web presence and lead channel in one.',
    },
  },
  {
    id: 'foundersgroup',
    title: 'foundersgroup.at',
    descriptionDe:
      'Marketing-Landingpage, die ich für einen Freund umgesetzt habe — sein Kärntner Verein ist eine kuratierte Member-Community für junge Gründer:innen, Athlet:innen und ambitionierte Macher:innen zwischen 18 und 30. Konzept, Design und Umsetzung von der Idee bis zum Launch.',
    descriptionEn:
      'Marketing landing page I built for a friend — his Carinthia-based nonprofit is a curated member community for young founders, athletes, and ambitious 18- to 30-year-olds. Concept, design, and build end-to-end.',
    stack: ['TypeScript', 'Astro', 'Tailwind CSS'],
    track: 'client',
    context: { de: 'Freelance', en: 'Freelance' },
    role: { de: 'Konzept, Design & Entwicklung', en: 'Concept, design & build' },
    status: 'live',
    links: [{ href: 'https://foundersgroup.at', labelKey: 'work.visitLink' }],
    image: '/projects/foundersgroup.png',
    imageAlt: {
      de: 'foundersgroup.at Startseite — zwei Samtsessel auf einem Wiener Balkon bei Nacht mit der Headline „Bist du bereit dein Umfeld zu ändern?"',
      en: 'foundersgroup.at homepage — two velvet chairs on a Viennese balcony at night with the headline "Bist du bereit dein Umfeld zu ändern?"',
    },
    outcome: {
      de: 'Zugang für Member-Anfragen und Vereinskommunikation.',
      en: 'Entry point for member inquiries and community communications.',
    },
    testimonial: {
      quote: {
        de: 'Kompetent in der Umsetzung — Benjamin werde ich auf jeden Fall weiterempfehlen.',
        en: 'Competent execution — I will absolutely recommend Benjamin.',
      },
      author: {
        de: 'Fabio Freisegger · Gründer foundersgroup',
        en: 'Fabio Freisegger · Founder, foundersgroup',
      },
    },
  },
  {
    id: 'scanzy',
    title: 'scanzy.at',
    descriptionDe:
      'Marketing-Landingpage, die ich für einen befreundeten Anbieter von 360°-Rundgängen und Drohnenvideos in Österreich umgesetzt habe. Von Konzept und Design bis zur technischen Umsetzung — ein praxisnahes Beispiel dafür, wie ich eine Landingpage aufziehe.',
    descriptionEn:
      'Marketing landing page I built for a friend running a 360° virtual tours and drone videos business in Austria. Concept, design, and build end-to-end — a practical example of how I approach a landing page.',
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    track: 'client',
    context: { de: 'Freelance', en: 'Freelance' },
    role: { de: 'Konzept, Design & Entwicklung', en: 'Concept, design & build' },
    status: 'live',
    links: [{ href: 'https://scanzy.at', labelKey: 'work.visitLink' }],
    image: '/projects/scanzy.png',
    imageAlt: {
      de: 'scanzy.at Startseite — SCANZY-Wortmarke über einer warmen Sonnenuntergangs-Berglandschaft, darunter die Headline „Ihr Objekt hat mehr verdient als nur Fotos.“',
      en: 'scanzy.at homepage — SCANZY wordmark above a warm sunset mountain landscape with the headline “Ihr Objekt hat mehr verdient als nur Fotos.”',
    },
    outcome: {
      de: 'Zentraler Anlaufpunkt für Anfragen und Standort-Präsentation.',
      en: 'Central inquiry channel and online presence for the business.',
    },
    testimonial: {
      quote: {
        de: 'Richtig starke Arbeit! Die Website von SCANZY ist modern, klar und macht sofort Lust auf mehr. Design und Struktur passen perfekt zum Angebot — man sieht sofort was SCANZY kann. Sehr zufrieden, klare Empfehlung!',
        en: 'Genuinely strong work! The SCANZY website is modern, clear, and immediately makes you want to see more. Design and structure fit the offering perfectly — you instantly understand what SCANZY does. Very happy, a clear recommendation!',
      },
      author: {
        de: 'Lukas Muchitsch · Gründer SCANZY',
        en: 'Lukas Muchitsch · Founder, SCANZY',
      },
    },
    caseStudySlug: 'scanzy',
  },
  // Primus / OpenClaw — temporarily removed from the public portfolio.
  // The framing was too inside-baseball (Tailscale mesh, agentic workflows,
  // LLM plumbing) for a cold visitor; needs a rewrite that leads with what
  // it does for me, not what it's built on, before going back on the site.
  // {
  //   id: 'primus',
  //   title: 'Primus / OpenClaw',
  //   descriptionDe:
  //     'Eigenes AI-Infra-Lab — Telegram-Gateway, agentic Workflows, selbst gehostet auf Hetzner via Tailscale-Mesh. Spielfeld für RAG, LLM-Plumbing und Eval-Setups jenseits von Stock-SaaS.',
  //   descriptionEn:
  //     'My own AI infrastructure lab — Telegram gateway, agentic workflows, self-hosted on Hetzner via a Tailscale mesh. Playground for RAG, LLM plumbing and eval setups beyond stock SaaS.',
  //   stack: ['TypeScript', 'Python', 'Hetzner', 'Tailscale'],
  //   context: { de: 'Eigenes Lab', en: 'Personal lab' },
  //   role: { de: 'Architektur & Entwicklung', en: 'Architecture & build' },
  //   status: 'live',
  //   outcome: {
  //     de: 'Beleg für AI-Ops-Tiefe: eigene Infrastruktur statt fremder Black-Box.',
  //     en: 'Evidence of AI-ops depth: own infrastructure instead of someone else\'s black box.',
  //   },
  // },
  {
    id: 'b-cal',
    title: 'b-cal',
    descriptionDe:
      'End-to-End-Webapp-Showcase — selbst gehostete Kalender-App mit Multi-Device-Auth, Email-Reminders und zweisprachigem UI. Beleg für Webapp-Arbeit jenseits von Marketing-Sites.',
    descriptionEn:
      'End-to-end web app showcase — self-hosted calendar app with multi-device auth, email reminders and a bilingual UI. Evidence of web app work beyond marketing sites.',
    stack: ['TypeScript', 'Next.js', 'NestJS', 'Prisma'],
    track: 'personal',
    context: { de: 'Eigenes Projekt', en: 'Personal project' },
    role: { de: 'Architektur & Entwicklung', en: 'Architecture & build' },
    status: 'live',
    links: [
      { href: 'https://cal.bfnoessler.at', labelKey: 'work.visitLink' },
      { href: 'https://github.com/HelplessSneeker/b-cal', labelKey: 'work.githubLink' },
    ],
    image: '/projects/b-cal.png',
    imageAlt: {
      de: 'b-cal Kalender-App — Monatsansicht in dunklem Theme mit farbcodierten Einträgen für die Kalender „Arbeit" und „Privat" und Datums-Sidebar links.',
      en: 'b-cal calendar app — dark-theme month view with colour-coded entries across the "Arbeit" and "Privat" calendars, plus a date sidebar on the left.',
    },
    outcome: {
      de: 'Showcase für sauber gebaute Webapps — ganzer Stack aus einer Hand.',
      en: 'Showcase for cleanly built web apps — full stack from a single hand.',
    },
    caseStudySlug: 'b-cal',
  },
  {
    id: 'immo-radar',
    title: 'immo-radar',
    descriptionDe:
      'Marktanalyse für Kärntner Anlageimmobilien. Ein täglicher Voll-Crawl zweier Immobilienportale zieht sämtliche Inserate ein; Mehrfach-Inserate desselben Objekts werden zu einem echten Objekt zusammengeführt, statt die Statistik zu verfälschen. Daraus wachsen Zeitreihen über Bruttorendite und Quadratmeterpreise, gegen die sich das eigene Portfolio mit dem Markt-Median vergleichen lässt. Serverseitig gerendertes HTML, bewusst ohne Client-Framework. Läuft seit Juli 2026 täglich, vorerst nur privat zugänglich.',
    descriptionEn:
      'Market analysis for investment property in Carinthia. A daily full crawl of two property portals pulls in every listing; duplicate listings of the same object are merged into one real property instead of skewing the statistics. That builds time series of gross yield and price per square metre, against which my own portfolio can be measured against the market median. Server-rendered HTML, deliberately without a client framework. Running daily since July 2026, private for now.',
    stack: ['TypeScript', 'Node', 'PostgreSQL'],
    track: 'personal',
    context: { de: 'Eigenes Projekt', en: 'Personal project' },
    role: { de: 'Architektur & Entwicklung', en: 'Architecture & build' },
    years: '2026',
    status: 'in-development',
    statusDe: 'Demo folgt',
    statusEn: 'Demo coming',
    links: [{ href: 'https://github.com/HelplessSneeker/immo-radar', labelKey: 'work.githubLink' }],
    outcome: {
      de: 'Kaufentscheidungen gegen echte Marktdaten statt gegen Bauchgefühl.',
      en: 'Buying decisions measured against real market data instead of gut feeling.',
    },
  },
  {
    id: 'personal-site',
    title: 'bfnoessler.at',
    descriptionDe:
      'Diese Site. Astro 6 mit handgeschriebenem CSS-Token-System, ohne Framework und ohne Tracking, zweisprachig mit eigener Stimme je Sprache. Design-System, Inhalte, Build und Betrieb liegen in derselben Hand.',
    descriptionEn:
      'This site. Astro 6 on a hand-written CSS token system, no framework, no tracking, bilingual with its own voice per language. Design system, content, build, and operation all in the same hands.',
    stack: ['Astro 6', 'TypeScript', 'Hand-written CSS', 'Node standalone'],
    track: 'personal',
    context: { de: 'Eigene Marke', en: 'Own brand' },
    role: { de: 'Konzept, Design & Entwicklung', en: 'Concept, design & build' },
    years: '2026',
    status: 'live',
    outcome: {
      de: 'Die Seite, auf der du gerade liest.',
      en: 'The page you are reading right now.',
    },
    caseStudySlug: 'personal-site',
  },
  // Doc-RAG-Demo — on ice (project paused). Keep the data here so we can
  // un-comment when the demo gets revived; remove if it's permanently shelved.
  // {
  //   id: 'rag-demo',
  //   title: 'Doc-RAG-Demo',
  //   descriptionDe:
  //     'AI-Showcase — Astro-Docs-Chat mit Retrieval, Citations und kleiner Eval-Suite. Zeigt, wie sich ein LLM sauber an eine konkrete Wissensbasis hängen lässt, statt frei zu fabulieren.',
  //   descriptionEn:
  //     'AI showcase — an Astro docs chat with retrieval, citations and a small eval suite. Demonstrates how to anchor an LLM to a concrete knowledge base instead of letting it freewheel.',
  //   stack: ['TypeScript', 'Astro', 'RAG', 'Embeddings'],
  //   context: { de: 'Eigenes Lab', en: 'Personal lab' },
  //   role: { de: 'Konzept & Entwicklung', en: 'Concept & build' },
  //   status: 'in-development',
  //   statusDe: 'Demo coming',
  //   statusEn: 'Demo coming',
  //   links: [{ href: 'https://github.com/HelplessSneeker/astro-rag-demo', labelKey: 'work.githubLink' }],
  //   outcome: {
  //     de: 'Beleg für AI-Integration mit Substanz — Retrieval und Eval statt Hype-Demo.',
  //     en: 'Evidence of AI integration with substance — retrieval and eval over hype demos.',
  //   },
  // },
  {
    id: 'healthcare',
    title: 'Healthcare-Kommunikationsplattform',
    titleEn: 'Healthcare communication platform',
    descriptionDe:
      'Kommunikationsplattform zwischen Arztpraxen und Laboren mit Ende-zu-Ende-Verschlüsselung und DSGVO-konformer Patientendaten-Verarbeitung. Native Apps auf iOS und Android via Capacitor aus geteilter Codebase.',
    descriptionEn:
      'Communication platform between medical practices and laboratories, with end-to-end encryption and GDPR-compliant patient data handling. Native iOS and Android apps via Capacitor from a shared codebase.',
    stack: ['React', 'Capacitor', 'Vite', 'NestJS', 'Objection.js', 'PostgreSQL'],
    context: { de: 'Angestellt · Labuniq', en: 'Employed · Labuniq' },
    role: { de: 'Fullstack Developer', en: 'Fullstack Developer' },
    years: '2024—2025',
    status: 'case-study',
  },
  {
    id: 'industrial',
    title: 'Industrielles Kalibrierungssystem',
    titleEn: 'Industrial calibration system',
    descriptionDe:
      'Backend für die automatische Kalibrierung von Rohrproduktionsanlagen mit SAP-Integration. Präzise Berechnungsalgorithmen für Produktionsplanung und -steuerung.',
    descriptionEn:
      'Backend for automated calibration of pipe production machinery with SAP integration. Precise calculation algorithms for production planning and control.',
    stack: ['Java EE', 'Spring Boot', 'Hibernate', 'SAP'],
    context: { de: 'Angestellt · Amiblu', en: 'Employed · Amiblu' },
    role: { de: 'Junior Software Developer', en: 'Junior Software Developer' },
    years: '2022—2023',
    status: 'case-study',
  },
];
