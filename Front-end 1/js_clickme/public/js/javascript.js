const mouseOver = document.querySelector(".mouseverme");
mouseOver.addEventListener("mouseover", () => {
  mouseOver.innerHTML = "<p>Thank you</p> ";
});
mouseOver.addEventListener("mouseout", () => {
  mouseOver.innerHTML = "<p>Mouse Over Me</p> ";
});

const clickMe = document.querySelector(".clickme p");
clickMe.addEventListener("click", () => {
  if (clickMe.innerHTML == "Click me") {
    clickMe.innerHTML = "Click me <br> Click me again";
  } else if (clickMe.innerHTML == "Click me <br> Click me again") {
    clickMe.innerHTML = "Thank You";
  } else if (clickMe.innerHTML == "Thank You") {
    clickMe.innerHTML = "Goodbye";
  } else {
    document.querySelector(".clickme").style.display = "none";
  }
});
