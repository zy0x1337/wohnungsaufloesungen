# AGENTS.md

Website für Jens Stiebeiner – Wohnungsauflösung und Entrümpelung in Wunstorf und der Region Hannover.
Statisches HTML/CSS, kein Build-Schritt. Diese Regeln gelten für jedes KI-Tool, das an dem Projekt arbeitet.

## Vor jeder inhaltlichen oder gestalterischen Änderung lesen

- `brand/fakten.md` – was über den Betrieb stimmt
- `brand/stimme.md` – wie Texte klingen
- `brand/anti-slop.md` – Muster, die nicht vorkommen dürfen
- `brand/visuell.md` – Schrift, Farben, Logo und ihr Freigabe-Status

## Regeln

1. **Nichts erfinden.** Keine Zahlen, Preise, Bewertungen, Zertifikate, Öffnungszeiten oder Referenzen, die nicht in `brand/fakten.md` stehen. Fehlt etwas, nachfragen oder einen deutlich markierten Platzhalter setzen.
2. **Keine KI-Bilder oder KI-Videos** auf der Seite. Keine Stockfotos.
3. **Keine externen Ressourcen** (Fonts, CDNs, Embeds, Tracking) ohne passenden Abschnitt in `datenschutz.html`. Schriften liegen lokal in `fonts/`. Externe Embeds erst nach Klick laden (Beispiel: Karte auf `kontakt.html`).
4. **Was der Nutzer freigibt, kommt in `brand/`.** Neue Fakten nach `fakten.md`, Stilentscheidungen nach `visuell.md` (mit Status „freigegeben“).
5. **Bestand nicht als Vorbild nehmen.** Teile der Seite enthalten noch Muster aus `anti-slop.md`. Beim Überarbeiten entfernen, nicht kopieren.
6. **Barrierearm bauen.** Semantisches HTML, sichtbarer Fokus, `prefers-reduced-motion` respektieren, Kontrast mindestens WCAG AA.

## Projekt

- Seiten: `index.html`, `ueber-uns.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`
- `site.css`: gemeinsame Tokens und Komponenten. Seitenspezifisches CSS steht inline im `<head>` der jeweiligen Seite.
- `site.js`: Navigation, auf jeder Seite eingebunden. Navigation und Footer sind auf allen fünf Seiten identisch; Änderungen überall gleich machen.
- Kontaktformular: FormSubmit (`formsubmit.co`), siehe `kontakt.html`.
- Deploy: GitHub Pages (`.github/workflows/deploy-pages.yml`) und Vercel (`vercel.json`). `brand/`, `AGENTS.md`, `CLAUDE.md` und `README.md` werden nicht mit ausgeliefert.
- Prüfen: Seiten lokal mit einem statischen Server öffnen (z. B. `python3 -m http.server`) und bei 375 px und 1440 px Breite ansehen.
