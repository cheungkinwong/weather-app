const input = document.getElementById("input");
const weatherCards = document.querySelectorAll(".day");
const cityCards = document.querySelectorAll(".city");
const timeCards = document.querySelectorAll(".time");
const iconCards = document.querySelectorAll(".icon");
const descriptionCards = document.querySelectorAll(".description");
const tempCards = document.querySelectorAll(".temp");
const tempMaxCards = document.querySelectorAll(".tempMax");
const tempMinCards = document.querySelectorAll(".tempMin");
const humidityCards = document.querySelectorAll(".humidity");
const windCards = document.querySelectorAll(".wind");
const cloudCards = document.querySelectorAll(".cloud");

// const weatherCard1 = document.getElementById("d1");
// const weatherCard2 = document.getElementById("d2");
// const weatherCard3 = document.getElementById("d3");
// const weatherCard4 = document.getElementById("d4");
// const weatherCard5 = document.getElementById("d5");

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
  let i = 0;
  let counter = 0;
  let day = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  weatherCards.forEach(card => {
    cityCards[i].innerHTML = json.city.name;
    timeCards[i].innerHTML = weekday[day.getDay() + i];
    iconCards[i].innerHTML = json.list[counter].weather[0].icon;
    descriptionCards[i].innerHTML = json.list[counter].weather[0].description;
    tempCards[i].innerHTML = Math.floor(json.list[counter].main.temp) + "°";
    tempMaxCards[i].innerHTML =
      '<i class="fas fa-arrow-up"></i> ' +
      Math.floor(json.list[counter].main.temp_max) +
      "°";
    tempMinCards[i].innerHTML =
      '<i class="fas fa-arrow-down"></i> ' +
      Math.floor(json.list[counter].main.temp_min) +
      "°";
    humidityCards[i].innerHTML =
      '<i class="fas fa-tint"></i> ' + json.list[counter].main.humidity + "%";
    windCards[i].innerHTML =
      '<i class="fas fa-wind"></i> ' + json.list[counter].wind.speed + "m/s";
    cloudCards[i].innerHTML =
      '<i class="fas fa-cloud"></i> ' + json.list[counter].clouds.all + "%";

    i += 1;
    counter += 7;
  });
  //   document.querySelector("#d1>.cardContainer>.city").innerHTML = json.city.name;
  //   document.querySelector("#d1>.cardContainer>.icon").innerHTML =
  //     json.list[0].weather[0].icon;
  //   document.querySelector("#d1>.cardContainer>.description").innerHTML =
  //     json.list[0].weather[0].description;
  //   document.querySelector("#d1>.cardContainer>.temp").innerHTML =
  //     Math.floor(json.list[0].main.temp) + "°";
  //   document.querySelector("#d1>.cardContainer>.tempMax").innerHTML =
  //     '<i class="fas fa-arrow-up"></i> ' +
  //     Math.floor(json.list[0].main.temp_max) +
  //     "°";
  //   document.querySelector("#d1>.cardContainer>.tempMin").innerHTML =
  //     '<i class="fas fa-arrow-down"></i> ' +
  //     Math.floor(json.list[0].main.temp_min) +
  //     "°";
  //   document.querySelector("#d1>.cardContainer>.humidity").innerHTML =
  //     '<i class="fas fa-tint"></i> ' + json.list[0].main.humidity + "%";
  //   document.querySelector("#d1>.cardContainer>.wind").innerHTML =
  //     '<i class="fas fa-wind"></i> ' + json.list[0].wind.speed + "m/s";
  //   document.querySelector("#d1>.cardContainer>.cloud").innerHTML =
  //     '<i class="fas fa-cloud"></i> ' + json.list[0].clouds.all + "%";

  //   document.querySelector("#d2>.city").innerHTML = json.city.name;
  //   document.querySelector("#d2>.icon").innerHTML = json.list[7].weather[0].icon;
  //   document.querySelector("#d2>.description").innerHTML =
  //     json.list[7].weather[0].description;
  //   document.querySelector("#d2>.temp").innerHTML = json.list[7].main.temp;

  //   document.querySelector("#d3>.city").innerHTML = json.city.name;
  //   document.querySelector("#d3>.icon").innerHTML = json.list[15].weather[0].icon;
  //   document.querySelector("#d3>.description").innerHTML =
  //     json.list[15].weather[0].description;
  //   document.querySelector("#d3>.temp").innerHTML = json.list[15].main.temp;

  //   document.querySelector("#d4>.city").innerHTML = json.city.name;
  //   document.querySelector("#d4>.icon").innerHTML = json.list[23].weather[0].icon;
  //   document.querySelector("#d4>.description").innerHTML =
  //     json.list[23].weather[0].description;
  //   document.querySelector("#d4>.temp").innerHTML = json.list[23].main.temp;

  //   document.querySelector("#d5>.city").innerHTML = json.city.name;
  //   document.querySelector("#d5>.icon").innerHTML = json.list[31].weather[0].icon;
  //   document.querySelector("#d5>.description").innerHTML =
  //     json.list[31].weather[0].description;
  //   document.querySelector("#d5>.temp").innerHTML = json.list[31].main.temp;
}
