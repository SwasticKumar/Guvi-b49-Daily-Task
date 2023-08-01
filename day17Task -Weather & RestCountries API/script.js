//call Rest Countries API using Fetch
async function fetchdata() {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  return data;
}

// CALL Weather API WITH apikey using Fetch
async function weatherData(cityName) {
  let apiKey = "8b973bd34aa2e73ac4742be2bd31c654";
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );
  let data = await response.json();
  return data;
}

// append details in REST COUNTRIES
async function createCard(country) {
  let name = country.name.common;
  let capital = country.capital;
  let region = country.region;
  let latitude = country.latlng[0];
  let longitude = country.latlng[1];
  let countryCode = country.cca3;
  let flag = country.flags.png;

  // Common column of Hole CARD
  let colDiv = document.createElement("div");
  colDiv.className =
    "col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4 mb-3 justify-content-center";

  // CARD
  let card = document.createElement("div");
  card.className = "card h-100 border-0  rounded-4";
  card.style.background = "linear-gradient(120deg,#23395d,white,#203354)";

  // CARD HEADER
  let cardHeader = document.createElement("div");
  cardHeader.className =
    "card-header  rounded-top-4 text-white bg-dark text-center fs-3";
  cardHeader.textContent = name;

  // CARD BODY
  let cardBody = document.createElement("div");
  cardBody.className = "card-body text-center fs-4 fw-bold";

  // CARD IMAGE
  let cardImg = document.createElement("img");
  cardImg.className = "card-img-top";
  cardImg.setAttribute(
    "style",
    "height:8rem;width:12rem ; border:2px solid black"
  );
  cardImg.src = flag;
  cardImg.alt = "flag";

  // CARD DETAILS in REST COUNTRIES
  let details = document.createElement("div");
  details.className = "card-text fs-5 mt-3";
  details.innerHTML = `
  <span style="color:#00008B;">Capital : </span>${capital}
  <hr>
  <span style="color:#00008B;">Region : </span>${region}
  <hr>
  <span style="color:#00008B;">Latitude : </span>${latitude}, <span style="color:#00008B;">Longitude : </span>${longitude}
  <hr>
  <span style="color:#00008B;">Country code : </span>${countryCode}
  <br>`;

  // CHECK Weather API DETAILS -BUTTON
  let button = document.createElement("button");
  button.className = "btn btn-dark mt-3 fs-5 rounded-pill fw-bold";
  button.textContent = "Click for Weather";

  button.onclick = async function () {
    let w_data = await weatherData(capital);
    let temp = w_data.main.temp;
    let pressure = w_data.main.pressure;
    let humidity = w_data.main.humidity;
    let w_speed = w_data.wind.speed;

    // ALERT popUp Show BOX
    let weatherAlert = document.createElement("div");
    weatherAlert.className =
      "alert rounder-5 alert-light text-dark mt-3 border-0";
    weatherAlert.style.background = "radial-gradient(white,#203354)";
    let head = document.createElement("h3");
    head.className = "text-light";
    head.textContent = "Weather Details";

    // List of WEATHER details
    let list = document.createElement("ul");
    list.className = "fs-5 fw-bold mt-4 text-dark text-center";
    list.innerHTML = `
    <li type="none"><span style="color:#00008B;">Temperature :</span> ${
      temp - 273.15
    }&deg;C</li>
    <hr>
    <li type="none"><span style="color:#00008B;">Pressure :</span> ${pressure}mb</li>
    <hr>
    <li type="none"><span style="color:#00008B;">Humidity :</span> ${humidity}%</li>
    <hr>
    <li type="none"><span style="color:#00008B;">Wind Speed :</span> ${w_speed}km/h</li>`;

    // BACK to RESTCOUNTRIES page BUTTON
    let button1 = document.createElement("button");
    button1.className = "btn btn-dark rounded-pill mt-2";
    button1.textContent = "Go Back";

    // APPEND & REMOVE all
    button1.onclick = function () {
      cardBody.removeChild(weatherAlert);
      cardBody.append(cardImg, details);
    };

    weatherAlert.append(head, list, button1);
    cardBody.removeChild(details);
    cardBody.removeChild(cardImg);
    cardBody.appendChild(weatherAlert);
  };

  colDiv.appendChild(card);
  card.append(cardHeader, cardBody);
  cardBody.append(cardImg, details);
  details.appendChild(button);

  return colDiv;
}

// THIS is the HTML CALL function and append all in there
async function createCards() {
  let container = document.getElementById("container");
  let cardRow = document.getElementById("cardRow");

  const content = await fetchdata();
  for (let country of content) {
    let card = await createCard(country);
    cardRow.appendChild(card);
  }
}

createCards();
