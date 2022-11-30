// Bai 3
const penguins = document.querySelector("#penguins")
function rotage() {
    penguins.style.transform += "rotate(15deg)"
}
const btn__start = document.querySelector(".btn__start");
const btn__stop = document.querySelector(".btn__stop");
// Tu quay
let auto = setInterval(rotage, 100)
btn__stop.addEventListener("click", function () {
    clearInterval(auto);
})
// Button start-stop
btn__start.addEventListener("click", function () {
    let stopStart = setInterval(rotage, 100)
    btn__stop.addEventListener("click", function () {
        clearInterval(stopStart);
    })
})
// Bai 8
const small = document.querySelectorAll(".small")
const large = document.querySelector("#large")

small.forEach(function (item) {
    item.addEventListener("click", function () {
        large.setAttribute("src", item.getAttribute("src"))

        small.forEach(function (item) {
            if (large.getAttribute("src") == item.getAttribute("src")) {
                item.classList.remove("opa")
            }
            else {
                item.classList.add("opa")
            }
        })
    })
})








