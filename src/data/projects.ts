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
  role?: { de: string; en: string };
  years?: string;
  statusDe?: string;
  statusEn?: string;
  status: ProjectStatus;
  links?: ProjectLink[];
  visual?: 'mockup-calendar' | 'mockup-scanner' | 'mockup-healthcare' | 'mockup-industrial';
  image?: string;
  imageAlt?: { de: string; en: string };
  isPlaceholder?: boolean;
}

export const projects: Project[] = [
  {
    id: 'scanzy',
    title: 'scanzy.at',
    descriptionDe:
      'Marketing-Landingpage, die ich für einen befreundeten Anbieter von 360°-Rundgängen und Drohnenvideos in Österreich umgesetzt habe. Von Konzept und Design bis zur technischen Umsetzung — ein praxisnahes Beispiel dafür, wie ich eine Landingpage aufziehe.',
    descriptionEn:
      'Marketing landing page I built for a friend running a 360° virtual tours and drone videos business in Austria. Concept, design, and build end-to-end — a practical example of how I approach a landing page.',
    // TODO: Benjamin — confirm exact stack (Astro? Next? CMS?) and replace this placeholder tag
    stack: ['[TODO: Stack bestätigen]'],
    role: { de: 'Konzept, Design & Entwicklung', en: 'Concept, design & build' },
    status: 'live',
    links: [{ href: 'https://scanzy.at', labelKey: 'work.visitLink' }],
    visual: 'mockup-scanner',
  },
  {
    id: 'b-cal',
    title: 'b-cal',
    descriptionDe:
      'Self-hosted Kalender-Anwendung mit Event-Erinnerungen und Multi-User-Support. Entstanden als Proof of Concept, um eine komplette Webapp end-to-end zu bauen und zu deployen.',
    descriptionEn:
      'Self-hosted calendar application with event reminders and multi-user support. Built as a proof of concept — designing, developing, and deploying a complete web application end-to-end.',
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Prisma', 'Coolify', 'Hetzner'],
    statusDe: 'Archiviert · GitHub Repo verfügbar',
    statusEn: 'Archived · GitHub repo available',
    status: 'archived',
    // TODO: Benjamin — set actual b-cal repo URL
    links: [{ href: 'https://github.com/benjamin-noessler/b-cal', labelKey: 'work.githubLink' }],
    visual: 'mockup-calendar',
  },
  {
    id: 'healthcare',
    title: 'Healthcare-Kommunikationsplattform',
    descriptionDe:
      'Kommunikationsplattform zwischen Arztpraxen und Laboren mit Ende-zu-Ende-Verschlüsselung und DSGVO-konformer Patientendaten-Verarbeitung. Native Apps auf iOS und Android via Capacitor aus geteilter Codebase.',
    descriptionEn:
      'Communication platform between medical practices and laboratories, with end-to-end encryption and GDPR-compliant patient data handling. Native iOS and Android apps via Capacitor from a shared codebase.',
    stack: ['React', 'Capacitor', 'Vite', 'NestJS', 'Objection.js', 'PostgreSQL'],
    role: { de: 'Fullstack Developer bei Labuniq', en: 'Fullstack Developer at Labuniq' },
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
    role: { de: 'Junior Software Developer bei Amiblu', en: 'Junior Software Developer at Amiblu' },
    years: '2022—2023',
    status: 'case-study',
    visual: 'mockup-industrial',
  },
];
