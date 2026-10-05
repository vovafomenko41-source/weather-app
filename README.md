<h1 align="center">Wetter App</h1>
<p align="center">Eine Wetteranwendung mit Stadtsuche und aktuellen Wetterdaten von OpenWeather.</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="Ohne Framework" src="https://img.shields.io/badge/Framework-keines-334155?style=flat-square">
</p>


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
| API-Anbindung | OpenWeather Current Weather API |
| Asynchroner Code | `async` / `await` und `fetch` |
| Datenverarbeitung | JSON-Antworten auswerten und im DOM anzeigen |
| Einheiten | Windgeschwindigkeit von m/s in km/h umrechnen |
| Fehlerbehandlung | HTTP-Status prüfen und Fehler mit `try` / `catch` behandeln |

## Lokal starten

1. Einen eigenen API-Schlüssel bei [OpenWeather](https://openweathermap.org/) anlegen.
2. `config.example.js` kopieren und die Kopie `config.js` nennen.
3. In `config.js` den Platzhalter durch den eigenen API-Schlüssel ersetzen.
4. `index.html` im Browser öffnen und nach einer Stadt suchen.

`config.js` ist in `.gitignore` ausgeschlossen und wird nicht mit Git versioniert. Ohne Konfiguration zeigt die App einen entsprechenden Hinweis.

**Hinweis zur Architektur:** Dies ist eine reine Frontend-Anwendung. Ein im Browser verwendeter Schlüssel ist für Besucher technisch einsehbar. Für eine öffentliche Bereitstellung mit einem privaten Schlüssel wäre ein Backend-Proxy nötig. Eine `.gitignore` allein schützt keinen Schlüssel in einer veröffentlichten Website.

Alternativ kann der Projektordner mit einem lokalen Webserver geöffnet werden, zum Beispiel mit der Erweiterung **Live Server** in Visual Studio Code.

## Projektstruktur

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Aufbau und Inhalte der Benutzeroberfläche |
| `style.css` | Layout, Farben und responsive Gestaltung |
| `script.js` | Anwendungslogik und Benutzerinteraktionen |
| `Weather.jpg` | Hintergrundbild |
| `config.example.js` | Vorlage für die lokale API-Konfiguration |

## Weitere Projekte

- [Memory Game](https://github.com/vovafomenko41-source/memory-game)
- [Meine To-Do-Liste](https://github.com/vovafomenko41-source/todo-list-app)
- [Wetter App](https://github.com/vovafomenko41-source/weather-app)
