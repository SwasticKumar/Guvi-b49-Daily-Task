let displayContent = document.getElementById("callback-hell");

setTimeout(() => {
  displayContent.innerHTML = `<span class="s10">10</span>`;
  let ten = document.querySelector(".s10");
  ten.style.color = "#4B0082";
  setTimeout(() => {
    displayContent.innerHTML = `<span class="s9">9</span>`;
    let nine = document.querySelector(".s9");
    nine.style.color = "#9400D3";
    setTimeout(() => {
      displayContent.innerHTML = `<span class="s8">8</span>`;
      let eight = document.querySelector(".s8");
      eight.style.color = "#0000FF";
      setTimeout(() => {
        displayContent.innerHTML = `<span class="s7">7</span>`;
        let seven = document.querySelector(".s7");
        seven.style.color = "dodgerblue";
        setTimeout(() => {
          displayContent.innerHTML = `<span class="s6">6</span>`;
          let six = document.querySelector(".s6");
          six.style.color = "#FF0000";
          setTimeout(() => {
            displayContent.innerHTML = `<span class="s5">5</span>`;
            let five = document.querySelector(".s5");
            five.style.color = "#00FF00";
            setTimeout(() => {
              displayContent.innerHTML = `<span class="s4">4</span>`;
              let four = document.querySelector(".s4");
              four.style.color = "orange";
              setTimeout(() => {
                displayContent.innerHTML = `<span class="s3">3</span>`;
                let three = document.querySelector(".s3");
                three.style.color = "#888";
                setTimeout(() => {
                  displayContent.innerHTML = `<span class="s2">2</span>`;
                  let two = document.querySelector(".s2");
                  two.style.color = "green";
                  setTimeout(() => {
                    displayContent.innerHTML = `<span class="s1">1</span>`;
                    let one = document.querySelector(".s1");
                    one.style.color = "#FF7F00";
                    setTimeout(() => {
                      displayContent.innerHTML = `<span class="myspan">Happy Independence Day</span>`;
                      let contentColor = document.querySelector(".myspan");
                      contentColor.style.color = " #000080";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
