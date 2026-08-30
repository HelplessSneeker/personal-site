import type { Locale } from '../i18n/util';

/**
 * Source for /jetzt and /en/now, plus the three-line teaser on the homepage.
 *
 * This file is the one place on the site that is *supposed* to go stale and
 * get corrected. Update it when something actually changes, not on a
 * schedule: a Now page that is obviously maintained beats one that is
 * obviously automated.
 *
 * Security constraint (see bfn-wiki decision 2026-08-07): roles, reasoning
 * and architecture are fine here. Hostnames, node names, IP addresses, port
 * numbers and anything that maps the private network are not.
 */

export type NowStatus = 'active' | 'slow' | 'parked';

export interface NowEntry {
  /** Stable key, used for React-less list keys and for anchor ids. */
  id: string;
  /** Grouping. `focus` entries carry the teaser on the homepage. */
  group: 'focus' | 'building' | 'learning' | 'offscreen';
  status: NowStatus;
  /** Free-form mono metadatum, e.g. "seit 08/2026" or "Frist 05.10.". */
  meta: Record<Locale, string>;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

/** Shown in the page header and in the teaser. Update with the entries. */
export const NOW_UPDATED = '2026-08-30';

export const nowEntries: NowEntry[] = [
  {
    id: 'site-restructure',
    group: 'focus',
    status: 'active',
    meta: { de: 'seit 08/2026', en: 'since 08/2026' },
    title: {
      de: 'Diese Seite von Grund auf neu strukturieren',
      en: 'Restructuring this site from the ground up',
    },
    body: {
      de: 'Die Vorgängerversion war eine Verkaufsseite: Preis über der Falz, Call-to-Action im ersten Bild. Das hat niemanden abgeholt, weil niemand hier landet, ohne den Namen vorher gehört zu haben. Jetzt steht die Arbeit vorne und das Angebot hinten.',
      en: 'The previous version was a sales page: price above the fold, call to action in the first screen. That reached nobody, because nobody arrives here without having heard the name somewhere first. Now the work leads and the offer follows.',
    },
  },
  {
    id: 'backup-restore',
    group: 'learning',
    status: 'active',
    meta: { de: 'Frist 05.10.2026', en: 'due 05.10.2026' },
    title: {
      de: 'Weiterbildungsblock: Backup und Restore',
      en: 'Study block: backup and restore',
    },
    body: {
      de: 'Sechs Wochen auf ein Thema, am Ende ein öffentliches Artefakt statt eines Häkchens. Diesmal: eine Restore-Strategie, die ich auch wirklich geprobt habe. Ein Backup, das nie zurückgespielt wurde, ist eine Vermutung.',
      en: 'Six weeks on one topic, with a public artefact at the end instead of a checkmark. This round: a restore strategy I have actually rehearsed. A backup that was never restored is a guess.',
    },
  },
  {
    id: 'lfcs',
    group: 'learning',
    status: 'slow',
    meta: { de: 'nebenher', en: 'alongside' },
    title: { de: 'LFCS-Zertifizierung', en: 'LFCS certification' },
    body: {
      de: 'Läuft parallel zu den Blöcken mit. Kein Selbstzweck, sondern der Teil vom Linux-Wissen, den ich mir sonst nie systematisch aneignen würde, weil im Alltag immer das eine Problem vor mir liegt und nicht das Kapitel davor.',
      en: 'Running alongside the study blocks. Not for its own sake, but for the part of Linux knowledge I would otherwise never pick up systematically, because day to day there is always the one problem in front of me and never the chapter before it.',
    },
  },
  {
    id: 'agent-fleet',
    group: 'building',
    status: 'active',
    meta: { de: 'seit 05/2026', en: 'since 05/2026' },
    title: { de: 'Die Agentenflotte', en: 'The agent fleet' },
    body: {
      de: 'Mehrere Assistenten mit klar getrennten Rollen statt einem, der alles halb kann: Entwicklung, Infrastruktur, Finanzen, Vermietung, Spielleitung. Jeder mit eigenem Arbeitsbereich, eigenem Gedächtnis und einer klaren Grenze, was er ohne Rückfrage tun darf. Der interessanteste Teil ist nicht die Technik, sondern die Frage, welche Entscheidungen man delegiert.',
      en: 'Several assistants with clearly separated roles instead of one that half-does everything: development, infrastructure, finance, letting, game prep. Each with its own workspace, its own memory and a hard line around what it may do without asking. The interesting part is not the machinery, it is deciding which decisions you hand over.',
    },
  },
  {
    id: 'nixos',
    group: 'building',
    status: 'active',
    meta: { de: 'seit 07/2026', en: 'since 07/2026' },
    title: { de: 'NixOS als Arbeitsrechner', en: 'NixOS as a working desktop' },
    body: {
      de: 'Zweite Platte im Rechner, Hyprland, alles deklarativ. Der Reiz ist nicht der Tiling-Fenstermanager, sondern dass eine kaputte Konfiguration ein Rollback ist statt ein Abend. Der Laptop zieht nach, sobald die Konfiguration sauber auf zwei Maschinen läuft.',
      en: 'Second drive in the machine, Hyprland, everything declarative. The appeal is not the tiling window manager, it is that a broken configuration is a rollback rather than an evening. The laptop follows once the configuration runs cleanly on two machines.',
    },
  },
  {
    id: 'godot',
    group: 'offscreen',
    status: 'slow',
    meta: { de: 'Godot 4.7', en: 'Godot 4.7' },
    title: { de: 'Ein kleines Kartenspiel', en: 'A small card game' },
    body: {
      de: 'Erstes eigenes Spiel, bewusst klein gehalten. Gamedev ist die eine Disziplin, in der ich wieder Anfänger bin, und das ist ungefähr alle zwei Jahre gesund.',
      en: 'First game of my own, deliberately small. Game development is the one discipline where I am a beginner again, which is roughly a two-yearly necessity.',
    },
  },
  {
    id: 'dnd',
    group: 'offscreen',
    status: 'active',
    meta: { de: 'am Tisch', en: 'at the table' },
    title: { de: 'Pen and Paper leiten', en: 'Running tabletop games' },
    body: {
      de: 'Hauptsächlich D&D, dazu ein Dungeon-World-Einstieg für eine Runde mit fünf Leuten, die noch nie gewürfelt haben. Spielleiten ist im Kern dasselbe wie ein Projekt führen: vorbereiten, was tragen muss, und den Rest am Tisch entstehen lassen.',
      en: 'Mostly D&D, plus a Dungeon World one-shot for a table of five people who have never rolled a die. Running a game is structurally the same job as running a project: prepare what has to hold, and let the rest happen at the table.',
    },
  },
];

export function nowByGroup(group: NowEntry['group']): NowEntry[] {
  return nowEntries.filter((e) => e.group === group);
}

/** The homepage teaser: focus first, then whatever is active, capped at three. */
export function nowTeaser(): NowEntry[] {
  const focus = nowEntries.filter((e) => e.group === 'focus');
  const rest = nowEntries.filter((e) => e.group !== 'focus' && e.status === 'active');
  return [...focus, ...rest].slice(0, 3);
}
