var cityInput= document.querySelector(".city-input");
var searchButton=document.querySelector(".search-btn");
var temperature = document.querySelector(".temperature");
//need help with this part
var loc = document.querySelector(".location");

let cityName = "";


function handleWeatherResponse(data) {
    temperature.textContent = "Temperature: " + Math.floor(data.main.temp) + "°F";
    summary.textContent = "Weather Condition " + data.weather[0].description;
    loc.textContent = cityName.name;
  }
  function searchWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${weatherKey}`)
    // https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    .then(function (response) {
      return response.json();
    })
    .then(handleWeatherResponse);

  }

  //not too sure about this part someone tried to help me with
  searchButton.addEventListener("click", function (event) {
    event.preventDefault()
    cityName = searchInput.value.trim()
    console.log("cityName : " + cityName)
    searchWeather(cityName)
    console.log("getting ticket data")
    getData(cityName)
    localStorage.setItem("Saved Cities", JSON.stringify(cityName));
    localStorage.setItem("Saved Events", JSON.stringify(eventList));
  }



//tutor was helpful with this seciton of code!!
var getCityCoordinates =() =>{
    var cityName = cityInput.Value.trim();
    if(!cityName) return;//will return if this is empty, !means not
    var weathercall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=17991d912ecf9f915449bc8b0469a6f4&units=imperial"
}

searchButton.addEventListener("click", getCityCoordinates);