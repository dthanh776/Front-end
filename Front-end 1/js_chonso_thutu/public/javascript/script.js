let getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
for (let i = 1; i < 101; i++) {
    document.body.insertAdjacentHTML(
        "afterbegin",
        `<div class="number">${i}</div>`
    );
}
// Vi tri ngau nhien
const number = document.querySelectorAll(".number");
let changePosition = () => {
    number.forEach((item) => {
        item.style.left = getRndInteger(0, 2000) + "px";
        item.style.top = getRndInteger(0, 1000) + "px";
    });
};
// Bam start changePosition
const start = document.querySelector(".start");
start.addEventListener("click", function () {
    changePosition();
    setTimeout(stopGame, 10000);
});
let totalScore = 0;
let count = 1;
number.forEach((item) => {
    item.addEventListener("click", function () {
        if (item.textContent == count) {
            item.style.backgroundColor = "red";
            count++;
            totalScore = count;
        } else {
            alert("Ban chon nham roi!!!");
        }
    });
});
// Stop game
const timeOut = document.querySelector(".timeout");
let score = document.querySelector("#score");
let stopGame = () => {
    timeOut.style.display = "block";
    score.textContent = "Score: " + --totalScore;
};


