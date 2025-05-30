function addCityTime(event) {
  let selectedCity = document.querySelector("#selected-city");
  let selectedDate = document.querySelector("#selected-date");
  let selectedTime = document.querySelector("#selected-time");
  let localTimezone = moment.tz.guess();

  if (event.target.value === "bangkok") {
    selectedCity.innerHTML = `Bangkok`;
    selectedDate.innerHTML = moment.tz("Asia/Bangkok").format("Do MMMM YYYY");
    selectedTime.innerHTML = moment.tz("Asia/Bangkok").format("HH:mm");
  }
  if (event.target.value === "reykjavik") {
    selectedCity.innerHTML = `Reykjavik`;
    selectedDate.innerHTML = moment
      .tz("Atlantic/Reykjavik")
      .format("Do MMMM YYYY");
    selectedTime.innerHTML = moment.tz("Atlantic/Reykjavik").format("HH:mm");
  }
  if (event.target.value === "copenhagen") {
    selectedCity.innerHTML = `Copenhagen`;
    selectedDate.innerHTML = moment
      .tz("Europe/Copenhagen")
      .format("Do MMMM YYYY");
    selectedTime.innerHTML = moment.tz("Europe/Copenhagen").format("HH:mm");
  }
  if (event.target.value === "local-time") {
    let selectedCity = document.querySelector("#selected-city");
    let selectedDate = document.querySelector("#selected-date");
    let selectedTime = document.querySelector("#selected-time");
    let localTimezone = moment.tz.guess();
    selectedCity.innerHTML = localTimezone;
    selectedTime.innerHTML = moment().format("HH:mm");
    selectedDate.innerHTML = moment().format("Do MMMM YYYY");
  }
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

let selectCity = document.querySelector("#countries");
selectCity.addEventListener("change", addCityTime);
