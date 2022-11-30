//1. Viet ham ngau nhien
let getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//2. Viet ham changePosition
let changePosition = () => {
    const number = document.querySelectorAll(".number")
    number.forEach(item => {
        item.style.left = getRndInteger(0, 1000) + "px"
        item.style.top = getRndInteger(0, 500) + "px"
    });
}
changePosition()

//3. Click start
const start = document.querySelector(".start")
let t;
start.addEventListener("click", function () {
    t = setInterval(changePosition, 1000)
    setTimeout(stopGame, 3000)
})

//5. Viet ham stopGame
const timeOut = document.querySelector(".timeout");
let score = document.querySelector("#score")

let stopGame = () => {
    timeOut.style.display = "block"
    score.textContent = "Score: " + totalScore
    clearInterval(t)
}

//4. Click hinh tron
const number = document.querySelectorAll(".number")
let totalScore = 0;
number.forEach(item => {
    item.addEventListener("click", function () {
        totalScore += parseInt(item.textContent)
    })
});




