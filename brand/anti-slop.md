# Anti-Slop

Muster, durch die eine Seite wie aus einem KI-Generator aussieht. Nicht einbauen, auch nicht „nur dezent“.
Ältere Teile der Seite enthalten noch einige davon. Beim Überarbeiten entfernen.

## Inhalt

- Zahlenleisten, die keine Messwerte sind („100 % kostenlose Besichtigung“, „0 € Mehrkosten“)
- Dieselbe Kennzahl mehrfach auf einer Seite
- Erfundene Fakten (siehe `fakten.md`)
- KI-Bilder, KI-Videos, Stockfotos, Illustrationen mit Platzhaltercharakter

## Layout und Komponenten

- Überzeile (Eyebrow) mit kurzem Strich davor über jeder Section
- Bento-Raster mit großen, blassen Nummern (01, 02, 03 …) im Hintergrund
- Glassmorphism (`backdrop-filter: blur`) als Stilmittel
- Hover-Effekte auf Elementen, die nicht klickbar sind
- Ein Wort der Überschrift in Akzentfarbe („Entrümpelung. *Professionell.*“)
- Badge-Kasten mit Kennzahl neben der Headline („10+ Jahre Erfahrung“)
- Icons in farbigen Quadraten vor jeder Zeile
- Reveal-Animation auf jedem einzelnen Element

## Typografie

- Schriften, die KI-Tools standardmäßig vorschlagen: Clash Display, Cabinet Grotesk, Satoshi, General Sans, Inter, Space Grotesk, Plus Jakarta Sans, Outfit, Sora, Bricolage Grotesque
- Verlaufstext, Glow, Textschatten als Dekoration

## Bewegung

- Scroll-Jacking und lange Scroll-Strecken, bevor der Inhalt kommt
- Bewegung ohne Funktion. Wenn sich etwas bewegt, muss es etwas erklären (z. B. den Ablauf).
- `prefers-reduced-motion` wird immer respektiert

## Stattdessen

- Akzentfarbe nur für Handlungen: anrufen, anfragen
- Hierarchie über Größe, Gewicht und Weißraum
- Fakten in Listen mit Linien statt in Karten
- Lieber eine schlichte, richtige Seite als eine aufregende, austauschbare
