export type ProjectStatus = 'archived' | 'live' | 'in-development' | 'case-study';

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
  },
  {
    id: 'scanzy',
    title: 'scanzy.at',
    descriptionDe:
      'Marketing-Landingpage, die ich für einen befreundeten Anbieter von 360°-Rundgängen und Drohnenvideos in Österreich umgesetzt habe. Von Konzept und Design bis zur technischen Umsetzung — ein praxisnahes Beispiel dafür, wie ich eine Landingpage aufziehe.',
    descriptionEn:
      'Marketing landing page I built for a friend running a 360° virtual tours and drone videos business in Austria. Concept, design, and build end-to-end — a practical example of how I approach a landing page.',
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    context: { de: 'Freelance', en: 'Freelance' },
    role: { de: 'Konzept, Design & Entwicklung', en: 'Concept, design & build' },
    status: 'live',
    links: [{ href: 'https://scanzy.at', labelKey: 'work.visitLink' }],
    image: '/projects/scanzy.png',
    imageAlt: {
      de: 'scanzy.at Startseite — Wortmarke SCANZY über einer dunklen Berglandschaft mit der Headline „Ihr Objekt hat mehr verdient als nur Fotos.“',
      en: 'scanzy.at homepage — SCANZY wordmark above a dark mountain landscape with the headline “Ihr Objekt hat mehr verdient als nur Fotos.”',
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
  },
  // TODO image: '/projects/primus.png' — Screenshot/Diagramm folgt
  // TODO links: GitHub-Repo verlinken, falls/sobald öffentlich
  {
    id: 'primus',
    title: 'Primus / OpenClaw',
    descriptionDe:
      'Eigenes AI-Infra-Lab — Telegram-Gateway, agentic Workflows, selbst gehostet auf Hetzner via Tailscale-Mesh. Spielfeld für RAG, LLM-Plumbing und Eval-Setups jenseits von Stock-SaaS.',
    descriptionEn:
      'My own AI infrastructure lab — Telegram gateway, agentic workflows, self-hosted on Hetzner via a Tailscale mesh. Playground for RAG, LLM plumbing and eval setups beyond stock SaaS.',
    stack: ['TypeScript', 'Python', 'Hetzner', 'Tailscale'],
    context: { de: 'Eigenes Lab', en: 'Personal lab' },
    role: { de: 'Architektur & Entwicklung', en: 'Architecture & build' },
    status: 'live',
    outcome: {
      de: 'Beleg für AI-Ops-Tiefe: eigene Infrastruktur statt fremder Black-Box.',
      en: 'Evidence of AI-ops depth: own infrastructure instead of someone else\'s black box.',
    },
  },
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
