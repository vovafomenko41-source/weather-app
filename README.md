<h1 align="center">Wetter App</h1>
<p align="center">Eine Wetteranwendung mit Stadtsuche und aktuellen Wetterdaten von Open-Meteo.</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="Ohne Framework" src="https://img.shields.io/badge/Framework-keines-334155?style=flat-square">
</p>


## Live Demo

### [▶ Im Browser ausprobieren](https://vovafomenko41-source.github.io/weather-app/)

Ohne Download und Installation direkt im Browser starten.

## Projektüberblick

Dieses Lernprojekt zeigt Grundlagen der Webentwicklung mit HTML, CSS und JavaScript. Es ist Teil eines Projektportfolios für die Bewerbung um eine Ausbildung im IT-Bereich. Die Anwendung benötigt kein Framework und keinen Build-Schritt.

## Funktionen

- Wetterdaten über den Stadtnamen abrufen
- Temperatur und gefühlte Temperatur in °C
- Luftfeuchtigkeit, Luftdruck und Windgeschwindigkeit
- Deutsche Wetterbeschreibung mit passendem Symbol
- Suche per Button oder Enter-Taste
- Fehlermeldung bei fehlender Eingabe oder fehlgeschlagenem Abruf
- Responsive Benutzeroberfläche

## Technische Umsetzung

| Bereich | Umsetzung |
| API-Anbindung | Open-Meteo Current Weather API |
| Asynchroner Code | `async` / `await` und `fetch` |
| Datenverarbeitung | JSON-Antworten auswerten und im DOM anzeigen |
| Einheiten | Wetterdaten in °C, km/h und hPa darstellen |
| Fehlerbehandlung | HTTP-Status prüfen und Fehler mit `try` / `catch` behandeln |

## Lokal starten

1. `index.html` im Browser öffnen oder die Live-Demo verwenden.
2. Stadtnamen eingeben und **Suchen** anklicken.
3. Temperatur, Wind und weitere Wetterdaten ansehen.

Für diese nichtkommerzielle Demo sind weder Anmeldung noch API-Schlüssel erforderlich. Eine Internetverbindung ist nötig. Beim Start wird München angezeigt; die Suche verwendet den ersten passenden Ort und zeigt Region und Land zur Kontrolle an.

Die ursprüngliche Version verwendete OpenWeather. Für die öffentliche Demo wurde die API-Anbindung auf Open-Meteo umgestellt. `config.example.js` ist nur noch eine Vorlage aus der ursprünglichen Version und wird nicht geladen.

Alternativ kann der Projektordner mit einem lokalen Webserver geöffnet werden, zum Beispiel mit der Erweiterung **Live Server** in Visual Studio Code.

## Projektstruktur

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Aufbau und Inhalte der Benutzeroberfläche |
| `style.css` | Layout, Farben und responsive Gestaltung |
| `script.js` | Anwendungslogik und Benutzerinteraktionen |
| `Weather.jpg` | Hintergrundbild |
| `config.example.js` | Historische Konfigurationsvorlage, in der Live-Demo nicht benötigt |

## Weitere Projekte

- [Memory Game](https://github.com/vovafomenko41-source/memory-game)
- [Meine To-Do-Liste](https://github.com/vovafomenko41-source/todo-list-app)
- [Wetter App](https://github.com/vovafomenko41-source/weather-app)

## Datenquellen

Wetterdaten: [Open-Meteo](https://open-meteo.com/) (CC BY 4.0). Ortsdaten: [GeoNames](https://www.geonames.org/). Aktuelle Werte basieren auf Wettermodellen.
