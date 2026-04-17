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
  isPlaceholder?: boolean;
}

export const projects: Project[] = [
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
    id: 'scanzy',
    title: 'scanzy.at',
    // TODO: Benjamin — replace with actual description once confirmed
    descriptionDe:
      '[TODO: ein Satz, was scanzy.at macht und was dein Anteil war — z. B. "Dienstleister-Website für Dokumenten-Scanning, volle Entwicklung und Deployment".]',
    descriptionEn:
      '[TODO: one sentence about what scanzy.at does and your role — e.g. "Service website for document scanning, full development and deployment".]',
    // TODO: Benjamin — confirm actual stack used
    stack: ['[TODO: Stack — Next.js? Astro? CMS?]'],
    status: 'live',
    links: [{ href: 'https://scanzy.at', labelKey: 'work.visitLink' }],
    visual: 'mockup-scanner',
    isPlaceholder: true,
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
