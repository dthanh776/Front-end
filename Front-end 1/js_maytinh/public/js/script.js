const operation = document.querySelector("#operation");
const result = document.querySelector("#result");
const button = document.querySelectorAll(".cal-btn");
let op = "";
button.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.textContent == "Enter") {
      eval(operation.textContent);
      result.textContent = eval(op);
    } else if (item.textContent == "C") {
      result.textContent = "0";
      operation.textContent = "0";
      op = "";
    } else {
      op += item.textContent;
      operation.textContent = op;
    }
  });
});
let interval = -1;
const clock = document.querySelector("#clock");

function myFunction() {
  let date = new Date();
  clock.textContent =
    date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
  return clock.textContent;
}
interval = setInterval(myFunction, 1000);

const text = document.querySelector("#text");
const stopContinute = document.querySelector(".button__sc");
stopContinute.addEventListener("click", function () {
  if (interval == -1) {
    interval = setInterval(myFunction, 1000);
    stopContinute.innerText = "STOP";
  } else {
    stopContinute.innerHTML = `<span style='color: green;'>CONTINUTE</span>`;
    clearInterval(interval);
    interval = -1;
  }
});
