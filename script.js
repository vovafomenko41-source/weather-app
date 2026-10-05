// Öffentliche Demo: Open-Meteo benötigt für dieses Lernprojekt keinen API-Schlüssel.
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const errorMessage = document.getElementById("errorMessage");
const weatherIcon = document.getElementById("weatherIcon");
let activeRequest = null;

function weatherDescription(code, isDay) {
    if (code === 0) return ["Klarer Himmel", isDay ? "☀️" : "🌙"];
    if (code <= 2) return ["Teilweise bewölkt", "🌤️"];
    if (code === 3) return ["Bedeckt", "☁️"];
    if ([45, 48].includes(code)) return ["Nebel", "🌫️"];
    if ([51, 53, 55, 56, 57].includes(code)) return ["Nieselregen", "🌦️"];
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return ["Regen", "🌧️"];
    if ([71, 73, 75, 77, 85, 86].includes(code)) return ["Schnee", "🌨️"];
    if ([95, 96, 99].includes(code)) return ["Gewitter", "⛈️"];
    return ["Wetterinformationen", "🌡️"];
}

function resetWeather() {
    document.getElementById("city").textContent = "Stadt";
    document.getElementById("country").textContent = "--";
    for (const id of ["temperature", "humidity", "wind", "feelsLike", "pressure"]) {
        document.getElementById(id).textContent = "--";
    }
    document.getElementById("description").textContent = "Wetterinformationen";
    document.getElementById("updatedAt").textContent = "";
    weatherIcon.textContent = "🌤️";
    weatherIcon.setAttribute("aria-label", "Wetter");
}

function displayWeather(place, current) {
    const [description, icon] = weatherDescription(current.weather_code, current.is_day);
    const value = (number, unit = "") => Number.isFinite(number) ? `${Math.round(number)}${unit}` : "--";
    document.getElementById("city").textContent = place.name;
    document.getElementById("country").textContent = [place.admin1, place.country].filter(Boolean).join(", ");
    document.getElementById("temperature").textContent = value(current.temperature_2m);
    document.getElementById("feelsLike").textContent = value(current.apparent_temperature, " °C");
    document.getElementById("humidity").textContent = value(current.relative_humidity_2m, " %");
    document.getElementById("wind").textContent = value(current.wind_speed_10m, " km/h");
    document.getElementById("pressure").textContent = value(current.pressure_msl, " hPa");
    document.getElementById("description").textContent = description;
    weatherIcon.textContent = icon;
    weatherIcon.setAttribute("aria-label", description);
    document.getElementById("updatedAt").textContent = `Stand: ${current.time.replace("T", " ")} (Ortszeit)`;
}

async function getWeather(city) {
    if (activeRequest) activeRequest.abort();
    if (!city.trim()) {
        resetWeather();
        errorMessage.textContent = "Bitte geben Sie eine Stadt ein.";
        searchButton.textContent = "Suchen";
        return;
    }
    const controller = new AbortController();
    activeRequest = controller;
    const timeout = setTimeout(() => controller.abort(), 15000);
    errorMessage.textContent = "Wetter wird geladen …";
    searchButton.textContent = "Lädt …";
    try {
        const locationUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
        locationUrl.search = new URLSearchParams({name: city.trim(), count: "1", language: "de", format: "json"});
        const locationResponse = await fetch(locationUrl, {signal: controller.signal});
        if (!locationResponse.ok) throw new Error("Die Stadtsuche ist derzeit nicht erreichbar.");
        const locations = await locationResponse.json();
        const place = locations.results?.[0];
        if (!place) throw new Error("Keine Stadt gefunden. Bitte prüfen Sie die Schreibweise.");
        const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
        weatherUrl.search = new URLSearchParams({
            latitude: place.latitude, longitude: place.longitude,
            current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,pressure_msl,wind_speed_10m",
            timezone: "auto", wind_speed_unit: "kmh"
        });
        const response = await fetch(weatherUrl, {signal: controller.signal});
        if (!response.ok) throw new Error("Die Wetterdaten sind derzeit nicht erreichbar.");
        const data = await response.json();
        if (!data.current) throw new Error("Keine aktuellen Wetterdaten verfügbar.");
        if (activeRequest !== controller) return;
        displayWeather(place, data.current);
        errorMessage.textContent = "";
    } catch (error) {
        if (activeRequest !== controller) return;
        resetWeather();
        errorMessage.textContent = error.name === "AbortError"
            ? "Die Anfrage dauert zu lange. Bitte versuchen Sie es erneut."
            : error instanceof TypeError
                ? "Verbindung fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung."
                : error.message;
    } finally {
        clearTimeout(timeout);
        if (activeRequest === controller) {
            searchButton.textContent = "Suchen";
            activeRequest = null;
        }
    }
}
searchButton.addEventListener("click", () => getWeather(cityInput.value));
cityInput.addEventListener("keydown", event => {
    if (event.key === "Enter") getWeather(cityInput.value);
});
cityInput.value = "München";
getWeather(cityInput.value);
