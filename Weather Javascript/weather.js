// Get the form element on the page
const form = document.getElementById('form');

// Add an event listener to the form to listen for submit events
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the location from the form input
  const location = document.getElementById('location').value;

  // Use the location to get the weather forecast
  getWeatherForecast(location);
});

// This function sends a request to the weather API to get the forecast for the given location
function getWeatherForecast(location) {
  // Make a HTTP GET request to the weather API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dc474d8bd0fc6642b47b0a4368525e43`)
    .then(function(response) {
      console.log(response)
      // Once the request is complete, parse the response as JSON
      return response.json();
    })
    .then(function(forecast) {
      // Once we have the forecast data, display it on the page
      displayWeatherForecast(forecast);
    });
}

// This function displays the weather forecast on the page
function displayWeatherForecast(forecast) {
  // Get the element on the page where we will display the forecast
  const weatherContainer = document.getElementById('weather-container');

  // Create a new div element to hold the forecast data
  const forecastElement = document.createElement('div');

  // Set the contents of the div to the forecast data
  forecastElement.innerHTML = `
    <p>Temperature: ${forecast.main.temp}°F</p>
    <p>Humidity: ${forecast.main.humidity}%</p>
    <p>Wind Speed: ${forecast.wind.speed} mph</p>
  `;

  // Add the forecast div to the weather container
  weatherContainer.appendChild(forecastElement);
}
