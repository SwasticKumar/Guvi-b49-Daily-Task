// Currencies API
fetch("https://api.vatcomply.com/currencies")
  .then((response) => response.json())
  .then((data) => {
    const select1 = document.getElementById("currency1");
    const select2 = document.getElementById("currency2");
    // For in Loop
    for (const currency in data) {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.setAttribute("value", currency);
      option1.innerHTML = `${data[currency]["name"]} (${data[currency]["symbol"]})`;
      option2.setAttribute("value", currency);
      option2.innerHTML = `${data[currency]["name"]} (${data[currency]["symbol"]})`;
      // Append both values
      select1.appendChild(option1);
      select2.appendChild(option2);
    }
  })
  .catch((error) => console.error(error));

  // Arrow Function for CovertPrice
const convertPrice = () => {
  const currency1 = document.getElementById("currency1").value;
  const currency2 = document.getElementById("currency2").value;
  const amount = document.getElementById("amount").value;

  //API 
  fetch(`https://api.vatcomply.com/rates?base=${currency1}`)
    .then((response) => response.json())
    .then((data) => {

      // Result 
      const result = (amount * data["rates"][currency2]).toFixed(3);
      const target = document.getElementById("result");
      target.innerText = `${amount} ${currency1} = ${result} ${currency2}`;
    })
    .catch((error) => console.error(error));
};
