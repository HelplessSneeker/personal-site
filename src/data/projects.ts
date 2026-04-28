export type ProjectStatus = 'archived' | 'live' | 'in-development' | 'case-study';

export interface ProjectLink {
  href: string;
  labelKey: 'work.visitLink' | 'work.githubLink';
}

export interface Project {
  id: string;
  title: string;
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
  visual?: 'mockup-calendar' | 'mockup-healthcare' | 'mockup-industrial';
  image?: string;
  imageAlt?: { de: string; en: string };
}

export const projects: Project[] = [
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
      de: 'scanzy.at Startseite — Wortmarke SCANZY über einer dunklen Berglandschaft mit der Headline „Ihr Objekt hat mehr verdient als nur Fotos."',
      en: 'scanzy.at homepage — SCANZY wordmark above a dark mountain landscape with the headline "Ihr Objekt hat mehr verdient als nur Fotos."',
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
  },
  {
    id: 'healthcare',
    title: 'Healthcare-Kommunikationsplattform',
    descriptionDe:
      'Kommunikationsplattform zwischen Arztpraxen und Laboren mit Ende-zu-Ende-Verschlüsselung und DSGVO-konformer Patientendaten-Verarbeitung. Native Apps auf iOS und Android via Capacitor aus geteilter Codebase.',
    descriptionEn:
      'Communication platform between medical practices and laboratories, with end-to-end encryption and GDPR-compliant patient data handling. Native iOS and Android apps via Capacitor from a shared codebase.',
    stack: ['React', 'Capacitor', 'Vite', 'NestJS', 'Objection.js', 'PostgreSQL'],
    context: { de: 'Angestellt · Labuniq', en: 'Employed · Labuniq' },
    role: { de: 'Fullstack Developer', en: 'Fullstack Developer' },
    years: '2024—2025',
    status: 'case-study',
    visual: 'mockup-healthcare',
  },
  {
    id: 'industrial',
    title: 'Industrielles Kalibrierungssystem',
    descriptionDe:
      'Backend für die automatische Kalibrierung von Rohrproduktionsanlagen mit SAP-Integration. Präzise Berechnungsalgorithmen für Produktionsplanung und -steuerung.',
    descriptionEn:
      'Backend for automated calibration of pipe production machinery with SAP integration. Precise calculation algorithms for production planning and control.',
    stack: ['Java EE', 'Spring Boot', 'Hibernate', 'SAP'],
    context: { de: 'Angestellt · Amiblu', en: 'Employed · Amiblu' },
    role: { de: 'Junior Software Developer', en: 'Junior Software Developer' },
    years: '2022—2023',
    status: 'case-study',
    visual: 'mockup-industrial',
  },
  {
    id: 'b-cal',
    title: 'b-cal',
    descriptionDe:
      'Self-hosted Kalender-Anwendung mit Event-Erinnerungen und Multi-User-Support. Entstanden als Proof of Concept, um eine komplette Webapp end-to-end zu bauen und zu deployen.',
    descriptionEn:
      'Self-hosted calendar application with event reminders and multi-user support. Built as a proof of concept — designing, developing, and deploying a complete web application end-to-end.',
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Prisma', 'Coolify', 'Hetzner'],
    context: { de: 'Nebenprojekt', en: 'Personal' },
    role: { de: 'Proof of Concept', en: 'Proof of concept' },
    statusDe: 'Open-Source-Nebenprojekt · GitHub Repo',
    statusEn: 'Open-source side project · GitHub repo',
    status: 'archived',
    links: [{ href: 'https://github.com/HelplessSneeker/b-cal', labelKey: 'work.githubLink' }],
    visual: 'mockup-calendar',
  },
];
