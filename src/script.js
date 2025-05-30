function addCityTime(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#display-cities");
    citiesElement.innerHTML = `   <div class="city">
            <span class="city-name">${cityName}</span>
            <div class="date">${cityTime.format("Do MMMM YYYY")}</div>

            <span class="time">${cityTime.format("HH:mm:ss")}</span>
          </div>`;
  }, 1000);
}

function showTime() {
  let londonDate = document.querySelector("#date-london");
  let newYorkDate = document.querySelector("#date-new-york");
  let sydneyDate = document.querySelector("#date-sydney");
  let londonTime = document.querySelector("#time-london");
  let newYorkTime = document.querySelector("#time-new-york");
  let sydneyTime = document.querySelector("#time-sydney");

  londonDate.innerHTML = moment.tz("Europe/London").format("Do MMMM YYYY");
  newYorkDate.innerHTML = moment.tz("America/New_York").format("Do MMMM YYYY");
  sydneyDate.innerHTML = moment.tz("Australia/Sydney").format("Do MMMM YYYY");
  londonTime.innerHTML = moment.tz("Europe/London").format("H:mm:ss");
  newYorkTime.innerHTML = moment.tz("America/New_York").format("HH:mm:ss");
  sydneyTime.innerHTML = moment.tz("Australia/Sydney").format("HH:mm:ss");
}

setInterval(showTime, 1000);

let selectCity = document.querySelector("#cities");
selectCity.addEventListener("change", addCityTime);
