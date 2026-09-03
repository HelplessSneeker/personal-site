---
name: bfnoessler.at
description: Persona-Seite — Benjamin Franz Nößler, Kärntner Bua in Wien
colors:
  bg-light: "oklch(96.5% 0.010 88)"
  surface-light: "oklch(93.8% 0.012 86)"
  text-light: "oklch(20% 0.020 230)"
  text-muted-light: "oklch(44% 0.019 230)"
  rule-light: "oklch(84% 0.012 232)"
  carrier-light: "oklch(45% 0.086 226)"
  carrier-deep-light: "oklch(37% 0.080 226)"
  on-carrier-light: "oklch(96.5% 0.016 250)"
typography:
  display:
    fontFamily: "'Clash Display', 'General Sans Variable', sans-serif"
    fontSize: "clamp(2.75rem, 8.2vw, 6.5rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  value:
    fontFamily: "'Clash Display', 'General Sans Variable', sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Clash Display', 'General Sans Variable', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Switzer', 'General Sans Variable', sans-serif"
    fontSize: "clamp(1.0625rem, 0.95rem + 0.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Commit Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
    textTransform: "uppercase"
  mono:
    fontFamily: "'Commit Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.05em"
rounded:
  sm: "0"
---

# DESIGN.md — Persona-Showcase

> Diese Datei wurde am 03.09.2026 auf null gesetzt und enthält **nur, was
> entschieden ist**. Die Portfolio-First-Designsprache (General Sans, Blaugrau,
> Radius 3px, Dark Mode gleichrangig) ist Historie und steht in der Git-History,
> nicht mehr hier. Wer etwas ergänzt: erst entscheiden, dann eintragen. Kein
> Wunschdenken in dieser Datei.
>
> Quelle der Begründungen: `bfn-wiki/decisions/2026-08-31 - Personal-Site-Persona-Showcase.md`.

## Entschieden am 03.09.2026

Grundlage ist Look-Variante **A „Typenschild"**, gerendert unter `/look/a`.
bfn hat sie gegen B („Kladde") und C („Anzeigetafel") gewählt und Blau statt
des ursprünglichen Miniums verlangt; unter den drei Blautönen hat **Stahlblau**
gewonnen.

### Haltung

Das Vorbild ist nicht das Portfolio, sondern das Metallschild an einer Maschine:
strenges Raster, Haarlinien, gestanzte Beschriftung, eine kräftige Farbe. Warm,
nicht Dark-Tech. Weirdness wird gezeigt, nie behauptet.

### Farbe

Strategie: **Committed**. Der Trägerton füllt Flächen, er dekoriert nicht.
Porträtfläche und Trennband tragen ihn ganz; damit liegt er bei etwa einem
Drittel der Startseite.

| Rolle | Wert | Wo |
|---|---|---|
| Grund | `oklch(96.5% 0.010 88)` | Seitengrund, Kachelzellen |
| Grund gesenkt | `oklch(93.8% 0.012 86)` | Kachel bei Hover |
| Text | `oklch(20% 0.020 230)` | Fließtext, Werte, Überschriften |
| Text gedämpft | `oklch(44% 0.019 230)` | Notizen, Zeitstempel, Beschriftung |
| Haarlinie | `oklch(84% 0.012 232)` | Rasterfugen, Trennlinien |
| Träger | `oklch(45% 0.086 226)` | Porträtfläche, Band, Live-Punkt |
| Träger tief | `oklch(37% 0.080 226)` | Trägerton als Text auf Grund |
| Auf Träger | `oklch(96.5% 0.016 250)` | Text auf Trägerflächen |

Der Grund bleibt **warm** (Hue 88), obwohl der Träger kühl ist (Hue 226). Das ist
Absicht: Blau auf kühlem Grau wäre der Dark-Tech-Standard, von dem die
Entscheidung weg will.

Kein `#000`, kein `#fff`. Radius ist `0` — das Raster lebt von harten Kanten.

### Schrift

Alle Schnitte self-hosted in `src/assets/fonts/`, keine Drittanbieter-Requests
zur Laufzeit.

| Rolle | Familie | Herkunft |
|---|---|---|
| Display | Clash Display (Variable, 600) | Fontshare |
| Fließtext | Switzer (Variable) | Fontshare |
| Beschriftung & Live-Daten | Commit Mono | `@fontsource/commit-mono` |

Mono ausschließlich für Beschriftung und Live-Daten — dort trägt sie Bedeutung.
Nicht als Kostüm für „technisch".

Commit Mono wird im Frontmatter importiert, nicht per `@import` im Style-Block:
sonst löst Vite die Font-Pfade des Pakets nicht auf.

### Raster und Bau

- Seitensteg: `clamp(1.25rem, 4vw, 3.5rem)`. Alles richtet sich an dieser Kante aus.
- Die Kachelreihe läuft randlos durch, ihre Beschriftung sitzt trotzdem auf dem
  Seitensteg. Die Differenz kompensiert ein Rahmen in Grundfarbe, nicht Polster.
- Kacheln sind **keine Karten**: eine Tabelle aus 1px-Fugen auf Haarlinienfarbe,
  Zellen im selben Feld. Keine Schatten, keine Rahmen um einzelne Kacheln.
- Hero ist asymmetrisch 7:4, Text links, Porträtfläche rechts, unten bündig.

### Bewegung

Eine Belohnung pro Abschnitt, nie zwei. `prefers-reduced-motion` wird respektiert.

- Kachel-Fußzeile wechselt bei Hover von „Stand" auf „Quelle".
- Der Live-Punkt in der Kopfleiste pulst, 2,4 s.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Kein Bounce, kein Elastic.

### Platzhalter

Solange die Fotos fehlen, ist die Porträtfläche ein **beschrifteter** Platzhalter:
Slot, Aufnahmevorgabe, Status. Keine graue Fläche. Ohne Fotos ist die Seite
ärmer, nicht kaputt.

## Noch nicht entschieden

Steht hier, damit niemand es aus Versehen für gesetzt hält:

- Dark Mode. Die Entscheidung nennt ihn als Zweitmodus, ein Entwurf existiert nicht.
- Typo-Skala unterhalb des Heros (Zwischenüberschriften, Listen, Fließtextlängen
  außerhalb der Kachelnotizen).
- Die restlichen Startseiten-Abschnitte: Flotte, Zeug, der weirde Teil,
  Logbuch-Teaser, Fuß.
- Die Unterseiten `/zeug`, `/live`, `/logbuch`, `/ich`.
- Die drei Easter Eggs.
