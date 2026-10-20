# Emma Dullemond — portfolio

Mijn persoonlijke portfolio als student Elektrotechniek aan de Hogeschool Utrecht. Op deze website laat ik zien hoe ik hardware en software combineer in projecten rond robotica en industriële automatisering.

**Website:** [emmadullemond.com](https://emmadullemond.com/)

## Projecten

- **HU RoboSub:** cameraverwerking, ArUco-markerherkenning en integratie van DVL-meetgegevens voor onderwaterrobot Aurora.
- **Fan Coil Unit:** een zelfstandige besturing met CODESYS, een HMI en Modbus TCP, ontwikkeld tijdens mijn stage bij Gooiland Elektro.
- **Factory Automation:** het ontwerp van een fabriekslijn met palletbuffers, een depalletizer en een palletizer. De projectpagina bevat een interactief 3D-model.

- **Bestuursjaar Public Relations:** partnerrelaties, contractonderhandelingen, twee netwerkdagen en het helpen organiseren van de studiereis bij Ingenium Cabo Bianci, van september 2025 tot september 2026.

De zelfbalancerende robot wordt daarnaast kort op de homepage genoemd.

## Opbouw

De website bestaat uit statische HTML, CSS en JavaScript. Er is geen framework, backend of buildstap nodig.

| Pagina | Nederlands | Engels |
| --- | --- | --- |
| Home, Over mij en Contact | `index.html` | `index-en.html` |
| HU RoboSub | `robosub-nl.html` | `robosub.html` |
| Fan Coil Unit | `fan-coil-unit-nl.html` | `fan-coil-unit.html` |
| Factory Automation | `factory-automation-nl.html` | `factory-automation.html` |
| Bestuursjaar Public Relations | `bestuursjaar-nl.html` | `bestuursjaar.html` |

`index-nl.html` verwijst door naar de Nederlandse homepage. De oude `projects`- en `portfolio`-pagina’s verwijzen door naar de bijbehorende secties op de homepage.

| Bestand of map | Inhoud |
| --- | --- |
| `assets/css/portfolio.css` | Kleuren, typografie, layout en mobiele weergave |
| `assets/js/theme.js` | Light mode, dark mode en het onthouden van de keuze |
| `assets/js/factory-viewer.js` | Laden en bedienen van het 3D-model |
| `assets/js/vendor/model-viewer.min.js` | De model-viewer-bibliotheek voor de 3D-weergave |
| `images/` | Logo, foto’s en projectbeelden |
| `videos/netwerkdag-promo.mp4` | Promovideo voor de netwerkdag, op de bestuursjaar-pagina’s |
| `models/Fabriek_lijn_web.glb` | Het 3D-model van de fabriekslijn |
| `.github/workflows/static.yml` | Publicatie via GitHub Pages |
| `CNAME` | Het eigen domein voor GitHub Pages |

## Lokaal bekijken

Open de projectmap in VS Code en start **Live Server** op `index.html` of `index-en.html`.

Je kunt ook, als Python is geïnstalleerd, vanuit de projectmap een lokale server starten:

```sh
python -m http.server 8000
```

Open daarna [localhost:8000](http://localhost:8000/). Gebruik voor de interactieve 3D-viewer een lokale webserver in plaats van het HTML-bestand rechtstreeks te openen.

## Teksten en vormgeving aanpassen

Teksten staan rechtstreeks in de HTML-bestanden. Zoek naar de zin die je wilt veranderen en pas de tekst tussen de HTML-tags aan. Nederlands en Engels staan in aparte bestanden en moeten afzonderlijk worden bijgewerkt.

De kleuren staan als CSS-variabelen bovenaan `assets/css/portfolio.css`. De donkere variant staat bij `:root[data-theme="dark"]`. De knop naast de taalkeuze schakelt tussen beide thema’s. De voorkeur wordt in de browser bewaard als browseropslag beschikbaar is.

Het fabrieksmodel is ongeveer 21 MB en wordt pas opgehaald nadat een bezoeker op de laadknop klikt. Bezoekers kunnen het model draaien, inzoomen en de beginweergave herstellen.

Google Fonts wordt extern geladen. De 3D-viewer kan aanvullende decoderbestanden via internet ophalen voor het gecomprimeerde model.

## Ontbrekende pagina’s

`404.html` is de Nederlandse foutpagina voor GitHub Pages. Via de taalkeuze is `404-en.html` beschikbaar. De foutpagina gebruikt paden vanaf de hoofdmap, zodat ook bij een verkeerd adres in een submap de vormgeving en navigatie werken.

De bestuursfoto wordt als WebP in drie formaten aangeboden. De browser kiest via `srcset` een passend formaat voor de homepage en de bestuursjaar-pagina’s.

## Publiceren

Wijzigingen die naar de branch `main` worden gepusht, starten de bestaande GitHub Pages-workflow. De voortgang en eventuele fouten zijn zichtbaar onder **Actions** in de repository.

De HTML-bestanden, `assets`, `images`, `videos` en `models` staan direct in de hoofdmap van de repository. Upload dus de inhoud van de website en niet een extra bovenliggende map. Het `CNAME`-bestand bevat `emmadullemond.com`.

## Herkomst en gebruikte middelen

De website is begonnen met het **Solid State**-template van [HTML5 UP](https://html5up.net/solid-state). De huidige portfoliopagina’s gebruiken een eigen stylesheet en scripts. Oudere templatebestanden zijn nog aanwezig in de repository; de oorspronkelijke licentietekst staat in `LICENSE.txt`.

De interactieve 3D-weergave gebruikt [model-viewer](https://modelviewer.dev/). De lettertypen zijn **DM Sans** en **Manrope**, geladen via Google Fonts.
