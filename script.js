const API_KEY = window.WEATHER_API_KEY || "";

const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityElement = document.getElementById("city");
const countryElement = document.getElementById("country");

const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");

const feelsLikeElement = document.getElementById("feelsLike");
const pressureElement = document.getElementById("pressure");

const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");


async function getWeather(city) {

    if (!city) {
        errorMessage.textContent = "Bitte geben Sie eine Stadt ein.";
        return;
    }

    if (!API_KEY || API_KEY === "YOUR_OPENWEATHER_API_KEY") {
        errorMessage.textContent = "Bitte zuerst den API-Schlüssel in config.js eintragen (siehe README).";
        return;
    }

    errorMessage.textContent = "";

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=de`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Stadt nicht gefunden");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {

        console.error(error);

        errorMessage.textContent =
            "Die Stadt wurde nicht gefunden. Bitte versuchen Sie es erneut.";

        resetWeather();
    }
}


function displayWeather(data) {

    const city = data.name;
    const country = data.sys.country;

    const temperature = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);

    const humidity = data.main.humidity;
    const pressure = data.main.pressure;

    const windSpeed = Math.round(data.wind.speed * 3.6);

    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    cityElement.textContent = city;
    countryElement.textContent = country;

    temperatureElement.textContent = temperature;

    descriptionElement.textContent = description;

    humidityElement.textContent = `${humidity} %`;

    windElement.textContent = `${windSpeed} km/h`;

    feelsLikeElement.textContent = `${feelsLike} °C`;

    pressureElement.textContent = `${pressure} hPa`;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherIcon.alt = description;
}


function resetWeather() {

    cityElement.textContent = "Stadt";
    countryElement.textContent = "--";

    temperatureElement.textContent = "--";

    descriptionElement.textContent =
        "Wetterinformationen";

    humidityElement.textContent = "-- %";

    windElement.textContent = "-- km/h";

    feelsLikeElement.textContent = "-- °C";

    pressureElement.textContent = "-- hPa";

    weatherIcon.src =
        "https://openweathermap.org/img/wn/01d@2x.png";
}


searchButton.addEventListener("click", function () {

    const city = cityInput.value.trim();

    getWeather(city);

});


cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const city = cityInput.value.trim();

        getWeather(city);
    }

});