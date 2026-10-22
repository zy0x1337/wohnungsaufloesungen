# Visuell

Status: **umgesetzt als Vorschlag** (Oktober 2026). Nichts davon ist vom Inhaber freigegeben.
Was freigegeben wird, hier mit „freigegeben“ markieren.

## Prinzip

Papierweiß, Tinte, Signalgelb. Ruhig, sachlich, wie ein sauber gesetztes Formular.
Vertrauen entsteht durch Klarheit und konkrete Aussagen, nicht durch Effekte.

## Farben (Tokens in `site.css`)

| Rolle | Token | Wert |
|---|---|---|
| Hintergrund (Papierweiß) | `--bg` | `#f6f5f1` |
| Fläche (Karte, Grundriss-Boden) | `--surface` | `#edebe5` |
| Weiß (Eingabefelder, Möbel) | `--surface-2` | `#ffffff` |
| Text (Tinte) | `--text` | `#171613` |
| Text gedämpft | `--text-muted` | `#5a5852` (6,5:1 auf Papierweiß) |
| Dunkle Bänder, Footer | `--bg-dark` | `#171613` |
| Akzent (Signalgelb) | `--accent` | `#f0c000`, Hover `#dfb200` |

- Gelb nur für Handlungen: Anrufen, Anfragen, Absenden. Nie als Dekoration.
- Navigation markiert die aktive Seite mit einer Linie in Tinte, nicht in Gelb.

## Schrift

- **Archivo**, variabel (Gewicht 100–900, Breite 62–125 %), lokal in `fonts/`, SIL Open Font License
- Eine Familie für alles. Überschriften 700, Breite 92 %, leicht negative Laufweite. Fließtext 400.
- Fließtext mindestens 16 px, Beschreibungen 17 px (viele Kunden sind älter).

## Logo

- **Zeichen:** gelbes Quadrat mit einem Mini-Grundriss (Raum, Wand, Tür). Greift die Ablauf-Animation der Startseite auf.
- **Wortmarke:** „Stiebeiner“ (800, Breite 92 %) mit Unterzeile „Entrümpelung & Wohnungsauflösung“. Unter 480 px nur „Stiebeiner“.
- Dateien: `favicon.svg`, `apple-touch-icon.png`, Zeichen inline in der Navigation.

## Layout

- Container 1160 px, Seitenrand `--gutter`, Abschnittsabstand `--section`
- Jeder Abschnitt: Linie oben, Überschrift links (4/12), Inhalt rechts (8/12)
- Fakten und Listen als Zeilen mit Linien (`.rows`), keine Karten
- Seiten enden mit dem dunklen Abschluss-Band (Anrufen) und dem Footer mit Kontaktdaten

## Bewegung

- Einzige Animation: der Grundriss-Ablauf auf der Startseite (`ablauf.js`). Er erklärt den Ablauf.
- Seitenwechsel mit sanftem Überblenden (View Transitions), sonst nur Hover-Zustände.
- `prefers-reduced-motion` schaltet alle Übergänge ab.

## Vorschaubild

- `og-image.png` (1200 × 630) für WhatsApp, Facebook usw. Wurde aus HTML gerendert. Bei Änderungen von Name, Telefonnummer oder Headline neu erzeugen.

## Fotos

- Keine echten Fotos vorhanden (Stand Oktober 2026)
- Wunschliste: Jens, das echte Fahrzeug, Vorher/Nachher aus Aufträgen (nur mit Einverständnis der Kunden)
- Keine KI-Bilder, keine Stockfotos
