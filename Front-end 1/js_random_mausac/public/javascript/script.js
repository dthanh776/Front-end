// let circle = document.querySelector('.circle')
for (let i = 0; i < 100; i++) {
    document.body.insertAdjacentHTML("afterbegin", "<div class='circle'></div>")
}
//2 Viet ham ngau nhien
let getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//3. Viet ham doi mau ngau nhien
let colors = ["red", "green", "blue"]
let changeColors = () => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach(function (item) {
        item.classList.toggle(colors[getRndInteger(0, 3)])
    })
}
setInterval(changeColors, 1000)