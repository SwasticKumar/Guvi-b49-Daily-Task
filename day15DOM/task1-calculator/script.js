// Rule: Alert message of Press other than Number Key
document.onkeydown = onlynumkey;
function onlynumkey(evt) {
  const charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode !== 8 && charCode !== 13 && (charCode < 48 || charCode > 57)) {
    alert("Only numbers are allowed");
    evt.preventDefault();
  }
}

// DOM
document.addEventListener("DOMContentLoaded", function (event) {
  let body = document.querySelector("body");
  let result = document.querySelector("#result");

  let clear = document.querySelector("#clear");
  let history = document.querySelector("#history");
  let equalTo = document.querySelector("#equalTo");
  let delete_single_num = document.querySelector("#delete_single_num");

  let Normal_btn = document.querySelectorAll("#Normal_btn");

  let initial_value = "";

  // Loop the clicking button to display
  Normal_btn.forEach((Normal_btn, index) => {
    Normal_btn.addEventListener("click", function () {
      let text = this.innerHTML;
      initial_value += text;
      result.innerHTML = initial_value;
    });
  });

  /*equal to button action*/
  equalTo.addEventListener("click", function () {
    if (result.innerHTML != "") {
      history.innerHTML = result.innerHTML;
      result.innerHTML = eval(result.innerHTML);
      initial_value = eval(result.innerHTML);
    } else {
      alert("please enter any Number");
    }
  });

  /*clear all number*/
  clear.addEventListener("click", function () {
    result.innerHTML = "";
    initial_value = "";
  });

  /*delete single number*/
  delete_single_num.addEventListener("click", function () {
    result.innerHTML = result.innerHTML.substring(
      0,
      result.innerHTML.length - 1
    );
    initial_value = result.innerHTML;
  });
});
