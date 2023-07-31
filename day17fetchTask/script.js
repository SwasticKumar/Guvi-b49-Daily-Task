//call Rest Countries API using Fetch
async function fetchData() {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  return data;
}
// call Weather Data API with the help of (cityName) using Fetch
async function weatherData(cityName) {
  let apiKey = "ed84713109fddad1d6ea0d9729ea28bb";
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`
  );
  let data = await response.json();
  return data;
}

// using function we call (country Data)
async function createCard(country) {
  let name = country.name.common;
  let captial = country.captial;
  let countryCode = country.cca3;
  let flag = country.flag.png;
  let region = country.region;
  let latitude = country.latlng[0];
  let longitude = country.latlng[1];
  let colDiv = document.createElement("div");

  // set class for (column - div tag)
  colDiv.setAttribute(
    "class",
    "col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4 mb-3 justify-content-center"
  );

  // create new(1 div tag) for card
  let card = document.createElement("div");
  card.setAttribute("class", "card bg-secondary text-white");

  // create new (2 div tag) for card header
  let cardHeader = document.createElement("div");
  cardHeader.setAttribute(
    "class",
    "card-header bg-dark text-white text-center m-0 fs-3 fw-bold"
  );
  cardHeader.innerText.name;

  // create new(3 div tag) for card of Body
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body fs-5 fw-bold");

  // create (img tag) for card inside image
  let cardImage = document.createElement("img");
  cardImage.setAttribute("class", "card-img-top");
  cardImage.src = flag;
  cardImage.alt = "countryFlag";

  // create new (4 div tag) for card in Details
  let cardDetails = document.createElement("div");
  cardDetails.setAttribute("class", "card-text fs-5 mt-3");
  cardDetails.innerHTML = `
  Captial : ${captial} 
  <br>
  Region : ${region} 
  <br>
  Latitude:${latitude},Longitude: ${longitude}
  <br>
  Country code: ${countryCode}
  <br>`;

  // create (1button tag - front side) for click to check weather report
  let button1 = document.createElement("button");
  button1.setAttribute("class", "btn btn-primary mt-3 fs-5 fw-bold");
  button1.textContent = "Click for Weather";
  // button onclick {Function} to show display after click the button
  button1.onclick -
    async function () {
      let _weatherData_ = await weatherData(captial); //pass weather api function to captial
      let temp = _weatherData_.main.temp;
      let pressure = _weatherData_.main.pressure;
      let humidity = _weatherData_.main.humidity;
      let windSpeed = _weatherData_.main.speed;

      // create new (5 div tag) for Alert popup of weather
      let alertWeather = document.createElement("div");
      alertWeather.setAttribute("class", "alert alert-light text-dark mt-3");

      // create (head3 tag) for naming
      let head = document.createElement("h3");
      head.textContent = "Weather Details";

      // create (orderList tag) for list of weathering details
      let list = document.createElement("ul");
      list.innerHTML = `
    <li>Temperature : ${temp - 273.15}</li>
    <li>Pressure : ${pressure}mb</li>
    <li>Humbidity : ${humidity}%</li>
    <li>Wind Speed : ${windSpeed}km</li>`;

      // create (2 button  tag- back side) for back to weather card details
      let button2 = document.createElement("button");
      button2.setAttribute("class", "btn btn-primary mt-2");
      button2.textContent = "Go Back";

      // Back button click function write for
      button2.onclick = function () {
        cardBody.removeChild(alertWeather); //1. delete weather alert content.
        cardBody.append(cardImage, cardDetails); //2. after delete show front card (flag img, details of card).
      };

      // Finally we in append Weather alert (head,list, button2)
      alertWeather.append(head, list, button2);

      cardBody.removeChild(cardDetails);
      cardBody.removeChild(cardImage);

      cardBody.append(alertWeather); //above 2 card-remove it only after this append
    };

  colDiv.append(card);
  card.append(cardHeader, cardBody);
  cardBody.append(cardImage, cardDetails);
  cardDetails.append(button1);

  return colDiv;
}

// Main function to active all function
async function createCard() {
  let container = document.getElementById("container");
  let cardRow = document.getElementById("row");

  let contentOfCard = await fetchData();
  for (let country of contentOfCard) {
    let card = await createCard(country);
    cardRow.append(card);
  }
}

createCard();
