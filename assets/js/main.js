const input = document.getElementById("inputCity");
const background = document.querySelector(".container");
const weatherCardsContainer = document.querySelector(".weatherCards");
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
const APIkey = "d12b654b5a112e6e3b5d116b2c3faeae";
const unsplashKey = "223501043caff67d9a8c028fe0749d5f643669235d9b1d5a5c422558d42fceba";

//getWeather when you press enter
input.addEventListener("keyup", key => {
     let cityName = input.value;
     if (key.keyCode == 13) {
          getWeather(cityName);
          getBackground(cityName);
          weatherCardsContainer.style.display = "flex";
     }
});

//sent request for json unsplash
async function getBackground(cityName) {
     let request = `https://api.unsplash.com/search/photos?client_id=${unsplashKey}&page=1&query=${cityName}`;
     let response = await fetch(request);
     let jsonUnsplash = await response.json();
     console.log(jsonUnsplash, "lol");
     await updateBackground(jsonUnsplash);
}

function updateBackground(jsonUnsplash) {
     let backgroundUrl = jsonUnsplash.results[0].urls.full;
     background.style.backgroundImage = `url('${backgroundUrl}')`;
     console.log(backgroundUrl);
}

//sent request for json weather
async function getWeather(cityName) {
     let request = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${APIkey}`;
     let response = await fetch(request);
     let json = await response.json();
     await updateForecast(json);
}

//update the forecast based on json data
function updateForecast(json) {
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
     weekday[7] = "Sunday";
     weekday[8] = "Monday";
     weekday[9] = "Tuesday";
     weekday[10] = "Wednesday";
     weekday[11] = "Thursday";

     //each card is updated with data for their respective day
     weatherCards.forEach(card => {
          let iconID = json.list[counter].weather[0].icon;

          cityCards[i].innerHTML = json.city.name;
          timeCards[i].innerHTML = weekday[day.getDay() + i];
          iconCards[i].innerHTML = json.list[counter].weather[0].icon;
          descriptionCards[i].innerHTML = json.list[counter].weather[0].description;
          tempCards[i].innerHTML = Math.floor(json.list[counter].main.temp) + "°";
          tempMaxCards[i].innerHTML = '<i class="fas fa-arrow-up"></i> ' + Math.floor(json.list[counter].main.temp_max) + "°";
          tempMinCards[i].innerHTML = '<i class="fas fa-arrow-down"></i> ' + Math.floor(json.list[counter].main.temp_min) + "°";
          humidityCards[i].innerHTML = '<i class="fas fa-tint"></i> ' + json.list[counter].main.humidity + "%";
          windCards[i].innerHTML = '<i class="fas fa-wind"></i> ' + json.list[counter].wind.speed + "m/s";
          cloudCards[i].innerHTML = '<i class="fas fa-cloud"></i> ' + json.list[counter].clouds.all + "%";

          //match icon and background to the api iconID
          switch (iconID) {
               case "01d":
                    card.style.backgroundImage = "url('./assets/img/01d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-sun"></i>';
                    break;
               case "02d":
                    card.style.backgroundImage = "url('./assets/img/02d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud-sun"></i>';
                    break;
               case "03d":
                    card.style.backgroundImage = "url('./assets/img/03d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud"></i>';
                    break;
               case "04d":
                    card.style.backgroundImage = "url('./assets/img/04d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-smog"></i>';
                    break;
               case "09d":
                    card.style.backgroundImage = "url('./assets/img/09d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
                    break;
               case "10d":
                    card.style.backgroundImage = "url('./assets/img/10d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud-sun-rain"></i>';
                    break;
               case "11d":
                    card.style.backgroundImage = "url('./assets/img/11d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-bolt"></i>';
                    break;
               case "13d":
                    card.style.backgroundImage = "url('./assets/img/13d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-snowflake"></i>';
                    break;
               case "50d":
                    card.style.backgroundImage = "url('./assets/img/50d.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-stream"></i>';
                    break;
               case "01n":
                    card.style.backgroundImage = "url('./assets/img/01n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-sun"></i>';
                    break;
               case "02n":
                    card.style.backgroundImage = "url('./assets/img/02n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud-sun"></i>';
                    break;
               case "03n":
                    card.style.backgroundImage = "url('./assets/img/03n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud"></i>';
                    break;
               case "04n":
                    card.style.backgroundImage = "url('./assets/img/04n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-smog"></i>';
                    break;
               case "09n":
                    card.style.backgroundImage = "url('./assets/img/09n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
                    break;
               case "10n":
                    card.style.backgroundImage = "url('./assets/img/10n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-cloud-sun-rain"></i>';
                    break;
               case "11n":
                    card.style.backgroundImage = "url('./assets/img/11n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-bolt"></i>';
                    break;
               case "13n":
                    card.style.backgroundImage = "url('./assets/img/13n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-snowflake"></i>';
                    break;
               case "50n":
                    card.style.backgroundImage = "url('./assets/img/50n.jpg')";
                    iconCards[i].innerHTML = '<i class="fas fa-stream"></i>';
                    break;
          }

          i += 1;
          counter += 8;
     });
}
