# Wohnungsauflösungen Wunstorf

Website für Jens Stiebeiner – Wohnungsauflösung und Entrümpelung in Wunstorf und der Region Hannover.

Statisches HTML/CSS ohne Build-Schritt. Lokal ansehen:

```
python3 -m http.server
```

## Struktur

```
/
├── index.html, ueber-uns.html, kontakt.html, impressum.html, datenschutz.html
├── site.css            gemeinsame Tokens und Komponenten
├── fonts/              Archivo (selbst gehostet, OFL)
├── favicon.svg
├── brand/              Fakten, Tonalität, Anti-Slop-Regeln, visuelle Entscheidungen
├── AGENTS.md           Regeln für KI-Tools (CLAUDE.md verweist darauf)
└── vercel.json
```

`brand/`, `AGENTS.md`, `CLAUDE.md` und diese README werden nicht mit ausgeliefert.
