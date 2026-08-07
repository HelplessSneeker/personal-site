/**
 * Track 3 of the portfolio: systems that are *operated*, not shipped.
 *
 * Deliberately NOT the `Project` interface from `./projects.ts`. These entries
 * have no stack list, no screenshot, no outcome line, because they are not
 * pieces of work with a delivery date. They are facts with a running-since
 * date on them, and that date is the whole argument (PRODUCT.md → IA:
 * "write them as facts with dates", never as feature bullets).
 *
 * Security boundary (PRODUCT.md → Information Architecture):
 * roles, architecture, and reasoning are in scope. Hostnames, node names,
 * IP addresses, ports, directory layouts, and anything that maps the network
 * are not. When a detail is borderline, it stays out of this file.
 */

export interface OperatedSystem {
  id: string;
  name: { de: string; en: string };
  /** One sentence: what it is and why it exists. */
  role: { de: string; en: string };
  /** One sentence of operating reality: a constraint, a decision, an incident. */
  note?: { de: string; en: string };
  /** `YYYY-MM`. Rendered as `seit MM/YYYY` (DE) / `running since MM/YYYY` (EN). */
  runningSince: string;
}

export const operatedSystems: OperatedSystem[] = [
  {
    id: 'agent-server',
    name: { de: 'Agent- und Automations-Server', en: 'Agent and automation server' },
    role: {
      de: 'Gemieteter Cloud-Server in der EU, der die eigene Agenten- und Automationsschicht trägt: Crons, Briefings, Repo-Pflege, Monitoring-Logik.',
      en: 'Rented EU cloud server carrying my own agent and automation layer: crons, briefings, repo upkeep, monitoring logic.',
    },
    note: {
      de: 'Läuft bewusst getrennt vom Kunden-Hosting, damit ein Fehler in der Automation nie eine Kunden-Site berührt.',
      en: 'Deliberately kept apart from client hosting, so a fault in the automation can never touch a client site.',
    },
    runningSince: '2026-05',
  },
  {
    id: 'hosting-server',
    name: { de: 'Hosting- und Deploy-Server', en: 'Hosting and deploy server' },
    role: {
      de: 'Selbst betriebene Deploy-Plattform auf einem gemieteten Cloud-Server in der EU. Kunden- und eigene Web-Anwendungen laufen containerisiert, jede mit eigenem TLS-Zertifikat.',
      en: 'Self-run deploy platform on a rented EU cloud server. Client and personal web applications run in containers, each with its own TLS certificate.',
    },
    note: {
      de: 'Die Maschine hinter dem Hosting-Angebot.',
      en: 'The machine behind the hosting offer.',
    },
    runningSince: '2026-05',
  },
  {
    id: 'home-server',
    name: { de: 'Heim-Server', en: 'Home server' },
    role: {
      de: 'Wiederverwendete Desktop-Hardware als privater Medien- und Datei-Server, als Zweitstandort und als Testfläche.',
      en: 'Repurposed desktop hardware serving as a private media and file server, a second location, and a place to test things.',
    },
    note: {
      de: 'Ausschließlich über das private Netz erreichbar, kein offener Zugang von außen.',
      en: 'Reachable only over the private network, no open access from outside.',
    },
    runningSince: '2026-07',
  },
  {
    id: 'mesh',
    name: { de: 'Privates Mesh-Netz', en: 'Private mesh network' },
    role: {
      de: 'Verbindet Server, Arbeitsrechner und mobile Geräte zu einem verschlüsselten privaten Netz. Administration und Datenabgleich laufen komplett darüber.',
      en: 'Connects servers, workstations, and mobile devices into one encrypted private network. Administration and data sync run entirely across it.',
    },
    note: {
      de: 'Öffentlich erreichbar ist nur, was öffentlich erreichbar sein soll.',
      en: 'The only things reachable from the public internet are the ones that are supposed to be.',
    },
    runningSince: '2026-05',
  },
  {
    id: 'invoicing',
    name: { de: 'Rechnungssystem', en: 'Invoicing system' },
    role: {
      de: 'Selbst betriebene Fakturierung statt SaaS-Abo (Invoice Ninja): E-Rechnungen im europäischen Standardformat als Hybrid-PDF mit eingebettetem XML und Zahlungs-QR.',
      en: 'Self-hosted invoicing instead of a SaaS subscription (Invoice Ninja): e-invoices in the European standard format as hybrid PDFs with embedded XML and a payment QR code.',
    },
    note: {
      de: 'Die eigene Buchhaltung läuft real darüber, seit der ersten Rechnung am Einrichtungstag.',
      en: 'My own bookkeeping actually runs on it, starting with the first invoice on setup day.',
    },
    runningSince: '2026-05',
  },
  {
    id: 'monitoring',
    name: { de: 'Monitoring', en: 'Monitoring' },
    role: {
      de: 'Überwacht alle betriebenen Dienste und Backup-Ketten und alarmiert bei Ausfall (Uptime Kuma, selbst gehostet). Neue Dienste bekommen standardmäßig einen Monitor.',
      en: 'Watches every operated service and backup chain and alerts on failure (Uptime Kuma, self-hosted). New services get a monitor by default.',
    },
    note: {
      de: 'Hat im Juli 2026 einen stillen Backup-Ausfall aufgedeckt, der sonst wochenlang unbemerkt geblieben wäre.',
      en: 'In July 2026 it surfaced a silent backup failure that would otherwise have gone unnoticed for weeks.',
    },
    runningSince: '2026-05',
  },
  {
    id: 'backup-guard',
    name: { de: 'backup-guard', en: 'backup-guard' },
    role: {
      de: 'Eigenbau: selbstheilende Backup-Kette, die Datenbank-Dumps und Nutzerdaten nächtlich auf ein separates Offsite-Ziel spiegelt, mit echter Schreibprobe vor jedem Lauf.',
      en: 'Own build: a self-healing backup chain that mirrors database dumps and user data to a separate offsite target every night, with a real write test before each run.',
    },
    note: {
      de: 'Bricht bei einem Fehler ab, statt Erfolg zu melden, damit das Monitoring anschlägt. Entstanden im Juli 2026 direkt aus einem realen Ausfall.',
      en: 'It aborts on error instead of reporting success, so the monitoring picks it up. Written in July 2026 straight out of a real failure.',
    },
    runningSince: '2026-07',
  },
];

/**
 * `2026-05` → `05/2026`. The month-first form keeps the tabular-figure column
 * aligned at a fixed width across every entry, which is the point of the
 * mono treatment.
 */
export function formatRunningSince(value: string): string {
  const [year, month] = value.split('-');
  return `${month}/${year}`;
}
