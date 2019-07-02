const input = document.getElementById("inputCity");
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

//getWeather when you press enter
input.addEventListener("keyup", key => {
     if (key.keyCode == 13) {
          getWeather();
     }
});

//sent request for json
async function getWeather() {
     let cityName = input.value;
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

     //each card is updated with data for their respective day
     weatherCards.forEach(card => {
          let iconID = json.list[counter].weather[0].icon;
          console.log(iconID);

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

          switch (iconID) {
               case "01d":
                    card.style.backgroundImage = "url('./../img/01d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-sun"></i>';
                    break;
               case "02d":
                    card.style.backgroundImage = "url('./../img/02d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-cloud-sun"></i>';
                    break;
               case "03d":
                    card.style.backgroundImage = "url('./../img/03d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-cloud"></i>';
                    break;
               case "04d":
                    card.style.backgroundImage = "url('./../img/04d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-smog"></i>';
                    break;
               case "09d":
                    card.style.backgroundImage = "url('./../img/09d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-cloud-showers-heavy"></i>';
                    break;
               case "10d":
                    card.style.backgroundImage = "url('./../img/10d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-cloud-sun-rain"></i>';
                    break;
               case "11d":
                    card.style.backgroundImage = "url('./../img/11d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-bolt"></i>';
                    break;
               case "13d":
                    card.style.backgroundImage = "url('./../img/13d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-snowflake"></i>';
                    break;
               case "50d":
                    card.style.backgroundImage = "url('./../img/50d.jpg')";
                    iconCards[i].innerHTM = '<i class="fas fa-stream"></i>';
                    break;
          }

          i += 1;
          counter += 8;
     });
}
