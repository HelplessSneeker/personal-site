/**
 * Inhalt für die drei Look-Varianten (Hero + erste Kachelreihe).
 *
 * Bewusst EIN Datensatz für alle drei Varianten: der Vergleich soll den Look
 * trennen, nicht den Text. Wer hier etwas ändert, ändert es in allen dreien.
 *
 * Werte sind echt, Stand 03.09.2026, aber noch hart verdrahtet. Der Push-Job
 * auf primus (Produktionsmechanik Punkt 3) existiert noch nicht — bis dahin
 * ist `capturedAt` die Wahrheit über das Alter der Zahl, nicht die Deko.
 */

export type Tile = {
  /** Kachelüberschrift, bfns Stimme, klein gesetzt. */
  label: string;
  /** Der Wert selbst. Kurz. Mono gesetzt in allen Varianten. */
  value: string;
  /** Eine Zeile Kontext. Trägt den Ton, nicht die Information. */
  note: string;
  /** Woher die Zahl kommt. In Variante A auf Hover sichtbar. */
  source: string;
  /** Zeitpunkt der Messung. Steuert die „Stand:"-Zeile. */
  capturedAt: string;
};

export const heroA = {
  name: 'Benjamin Franz Nößler',
  line: 'Kärntner Bua, wohnhaft in Wien. Offiziell technische Beratung, tatsächlich schraub ich meistens an meinem eigenen Zeug herum.',
};

export const heroB = {
  name: 'Benjamin Franz Nößler',
  line: 'Wohnt in Wien, zuhause in Kärnten. Baut Dinge, die niemand bestellt hat.',
};

/** Referenzzeitpunkt der Erhebung. Alle Kacheln außer der Kochwoche hängen daran. */
const NOW = '2026-09-03T08:35:00+02:00';

export const tiles: Tile[] = [
  {
    label: 'Wo ich grad bin',
    value: '18 °C',
    note: 'Wien, sonnig. Kein Grund, rauszugehen, aber es wär einer.',
    source: 'wttr.in/Vienna',
    capturedAt: NOW,
  },
  {
    label: 'Wo ich herkomm',
    value: '14 °C',
    note: 'Kärnten, bewölkt. Zuhause ist es immer vier Grad kälter und trotzdem schöner.',
    source: 'wttr.in/Klagenfurt',
    capturedAt: NOW,
  },
  {
    label: 'Agenten im Dienst',
    value: '12',
    note: 'Elf machen die Arbeit, einer verteilt sie. Einer ist letzten Monat gestorben.',
    source: 'primus, Agentenverzeichnis',
    capturedAt: NOW,
  },
  {
    label: 'Letzter Commit',
    value: '08:33',
    note: 'An genau dieser Seite. Heute früh, vor dem ersten Kaffee.',
    source: 'git log, personal-site',
    capturedAt: NOW,
  },
  {
    label: 'Kochwoche',
    value: '5 Boxen',
    note: 'Der Plan kommt Samstag um zehn, ungefragt. Die Kacheln daneben sind frischer als die da.',
    source: 'Coquus, Wochenplan',
    // Absichtlich alt: zeigt die ehrliche Degradation. Wenn der Push ausbleibt,
    // steht hier „Stand: vor 2 Tagen" statt einer erfundenen frischen Zahl.
    capturedAt: '2026-09-01T10:00:00+02:00',
  },
  {
    label: 'Am Spieltisch',
    value: '5 Neulinge',
    note: 'Dungeon World, „Die Fracht". Erste Runde, keiner von ihnen weiß, was ihn erwartet.',
    source: 'Loremaster, Kampagnenmappe',
    capturedAt: NOW,
  },
];

/**
 * „vor 3 Stunden" statt eines nackten Zeitstempels. Bewusst grob gerundet —
 * Minutengenauigkeit suggeriert eine Präzision, die ein 15-Minuten-Push nicht hat.
 */
export function stand(capturedAt: string, now: Date = new Date()): string {
  const diffMin = Math.round((now.getTime() - new Date(capturedAt).getTime()) / 60000);
  if (diffMin < 2) return 'gerade eben';
  if (diffMin < 60) return `vor ${diffMin} Minuten`;
  const h = Math.round(diffMin / 60);
  if (h < 24) return `vor ${h} ${h === 1 ? 'Stunde' : 'Stunden'}`;
  const d = Math.round(h / 24);
  return `vor ${d} ${d === 1 ? 'Tag' : 'Tagen'}`;
}

/** Beschriftete Platzhalter, solange die Fotos der Fotografin fehlen. */
export const portraitPlaceholder = {
  slot: 'Porträt',
  spec: 'Hochformat 4:5 · Tageslicht am Fenster · kein Bewerbungsfoto',
  status: 'Fotografin angefragt, Termin offen',
};
