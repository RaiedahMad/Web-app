const apiKey = "bdee392ee3419e2241417119c19c6075";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather? units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDisplay = document.querySelector(".weather");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "imgs/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "imgs/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "imgs/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "imgs/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "imgs/mist.png";
  }
}
searchBtn.addEventListener("click", () => {
  weatherDisplay.style.display = "block";
  checkWeather(searchBox.value);
});
