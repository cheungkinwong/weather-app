const input = document.getElementById("input");
// const button = document.getElementById("button");
const weatherCard1 = document.getElementById("d1");
const weatherCard2 = document.getElementById("d2");
const weatherCard3 = document.getElementById("d3");
const weatherCard4 = document.getElementById("d4");
const weatherCard5 = document.getElementById("d5");

const APIkey = "d12b654b5a112e6e3b5d116b2c3faeae";

// button.addEventListener("click", getWeather);

input.addEventListener("keyup", key => {
  if (key.keyCode == 13) {
    getWeather();
  }
});

async function getWeather() {
  let cityName = input.value;
  let request = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${APIkey}`;
  let response = await fetch(request);
  let json = await response.json();
  await updateForecast(json);
}

function updateForecast(json) {
  console.log(json, "lol");
  console.log(document.querySelector("#d2>.city"));
  document.querySelector("#d1>.city").innerHTML = json.city.name;
  document.querySelector("#d1>.icon").innerHTML = json.list[0].weather[0].icon;
  document.querySelector("#d1>.description").innerHTML =
    json.list[0].weather[0].description;
  document.querySelector("#d1>.temp").innerHTML = json.list[0].main.temp;

  document.querySelector("#d2>.city").innerHTML = json.city.name;
  document.querySelector("#d2>.icon").innerHTML = json.list[7].weather[0].icon;
  document.querySelector("#d2>.description").innerHTML =
    json.list[7].weather[0].description;
  document.querySelector("#d2>.temp").innerHTML = json.list[7].main.temp;

  document.querySelector("#d3>.city").innerHTML = json.city.name;
  document.querySelector("#d3>.icon").innerHTML = json.list[15].weather[0].icon;
  document.querySelector("#d3>.description").innerHTML =
    json.list[15].weather[0].description;
  document.querySelector("#d3>.temp").innerHTML = json.list[15].main.temp;

  document.querySelector("#d4>.city").innerHTML = json.city.name;
  document.querySelector("#d4>.icon").innerHTML = json.list[23].weather[0].icon;
  document.querySelector("#d4>.description").innerHTML =
    json.list[23].weather[0].description;
  document.querySelector("#d4>.temp").innerHTML = json.list[23].main.temp;

  document.querySelector("#d5>.city").innerHTML = json.city.name;
  document.querySelector("#d5>.icon").innerHTML = json.list[31].weather[0].icon;
  document.querySelector("#d5>.description").innerHTML =
    json.list[31].weather[0].description;
  document.querySelector("#d5>.temp").innerHTML = json.list[31].main.temp;
}
