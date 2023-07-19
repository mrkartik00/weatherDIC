const apiKey = 'f56f24967aaf51182d1d4df628297c6d';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const locationElement = document.getElementById('location');
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('weather-description');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city !== '') {
        getWeatherData(city);
    }
        else {
            alert('Please enter a city name.');
        }
    
});
function getWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = `${data.name}, ${data.sys.country}`;
            weatherIconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            temperatureElement.textContent = `${data.main.temp}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => console.log(error));
    }
