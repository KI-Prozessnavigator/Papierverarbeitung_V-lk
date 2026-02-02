# Papierverarbeitung Völk – Website

Moderne Neuauflage der Website mit allen Inhalten der Startseite.

## Inhalt

- **Startseite**: Hero mit „Papierverarbeitung Völk“, Willkommenstext, Bereich Falzen/Heften/Klebebinden mit Button „weiterlesen!“, Kurzblöcke Schneiden/Falzen/Kleben, Footer mit Logo und Adresse.
- **Navigation**: Startseite, Über uns, Leistungen, Aktuelles, Kontakt, Datenschutz (Links zeigen auf die gewohnten Pfade wie `/ueberuns`, `/leistungen` usw.).

## Technik

- **HTML5** – semantische Struktur, Barrierefreiheit (Skip-Link, ARIA)
- **CSS3** – eigene Styles, keine Wix-Abhängigkeiten
- **Schriften**: Plus Jakarta Sans (Fließtext), DM Serif Display (Überschriften) via Google Fonts
- **Farben**: Hellere Hintergründe, Blau-Töne als Akzent, klare Typografie
- **Responsive**: Mobile-first, Menü als Hamburger auf kleinen Bildschirmen
- **JS**: Nur für Menü-Toggle und dynamisches Jahr im Footer

## Nutzung

1. Ordner z. B. per FTP auf Ihren Webserver kopieren oder mit GitHub Pages / Netlify o. Ä. veröffentlichen.
2. `index.html` im Browser öffnen – die Startseite funktioniert auch lokal.
3. Weitere Seiten (Über uns, Leistungen, Kontakt, Datenschutz, Aktuelles) können als eigene HTML-Dateien ergänzt werden; die Links in der Navigation verweisen bereits auf die Pfade `/ueberuns`, `/leistungen` usw.

## Dateien

- `index.html` – Startseite
- `styles.css` – Layout und Design
- `script.js` – Menü und Footer-Jahr

Bilder werden weiterhin von den ursprünglichen Wix-URLs geladen. Für eine vollständig eigenständige Version können Sie die Bilder herunterladen und lokal ablegen.
