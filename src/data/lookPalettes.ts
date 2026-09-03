/**
 * Farbtöne für Variante A („Typenschild"), nachdem bfn am 03.09.2026 A gewählt
 * und Blau statt Minium verlangt hat.
 *
 * Der Grund bleibt in allen dreien warmes Bein — die Entscheidung sagt „warm
 * statt Dark-Tech-Standard", und Blau auf kühlem Grau wäre genau der Standard.
 * Was sich unterscheidet, ist der Trägerton: die Farbe, die Porträtfläche und
 * Band ausfüllt und damit dreißig bis vierzig Prozent der Seite trägt.
 */

export type Palette = {
  id: string;
  name: string;
  /** Ein Satz Charakter — was dieser Ton mit dem Entwurf macht. */
  character: string;
  vars: Record<string, string>;
};

/** In allen Tönen gleich: der Grund, das Papier, die Haarlinien. */
const ground = {
  '--bone': 'oklch(96.5% 0.010 88)',
  '--bone-sunk': 'oklch(93.8% 0.012 86)',
  '--on-carrier': 'oklch(96.5% 0.016 250)',
};

export const palettes: Palette[] = [
  {
    id: 'kobalt',
    name: 'Kobalt',
    character:
      'Behält die Plakatwirkung des Miniums. Laut genug, dass die Porträtfläche eine Aussage ist und kein Platzhalter.',
    vars: {
      ...ground,
      '--ink': 'oklch(20% 0.024 264)',
      '--ink-muted': 'oklch(44% 0.022 264)',
      '--carrier': 'oklch(47% 0.196 264)',
      '--carrier-deep': 'oklch(38% 0.176 264)',
      '--rule': 'oklch(84% 0.014 258)',
    },
  },
  {
    id: 'tinte',
    name: 'Tintenblau',
    character:
      'Der Ton aus dem Konzept vom 31.08. Ruhiger, ernster, und der erwartbarste der drei: Marineblau auf Creme hat jede zweite Beraterseite.',
    vars: {
      ...ground,
      '--ink': 'oklch(19% 0.022 256)',
      '--ink-muted': 'oklch(43% 0.020 256)',
      '--carrier': 'oklch(32% 0.098 256)',
      '--carrier-deep': 'oklch(30% 0.092 256)',
      '--rule': 'oklch(84% 0.013 252)',
    },
  },
  {
    id: 'stahl',
    name: 'Stahlblau',
    character:
      'Zieht ins Petrol. Am nächsten an der Typenschild-Idee — die Farbe einer lackierten Maschine, nicht die eines Logos.',
    vars: {
      ...ground,
      '--ink': 'oklch(20% 0.020 230)',
      '--ink-muted': 'oklch(44% 0.019 230)',
      '--carrier': 'oklch(45% 0.086 226)',
      '--carrier-deep': 'oklch(37% 0.080 226)',
      '--rule': 'oklch(84% 0.012 232)',
    },
  },
];

export const defaultPalette = palettes[0];

export function paletteById(id: string | undefined): Palette | undefined {
  return palettes.find((p) => p.id === id);
}

/** Als inline-style, damit ein Ton ohne zweiten Stylesheet-Satz durchschlägt. */
export function paletteStyle(palette: Palette): string {
  return Object.entries(palette.vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';');
}
