const btnf = document.querySelectorAll(".btn-f");
const pot = document.querySelectorAll(".pot");
const cash = document.querySelector("#cash");
let flower = "";
let price = 0;
let total = 1800;
btnf.forEach(function (item) {
    item.addEventListener("click", function () {
        flower = item.getAttribute("id");
        price = item.textContent;
    });
});
pot.forEach(function (item) {
    item.addEventListener("click", function () {
        if (price == 0) {
            alert("Không có hoa");
        } else {
            if (total >= price) {
                item.firstElementChild.setAttribute(
                    "src",
                    "public/images/" + flower + ".png"
                );
                total -= price;
                cash.textContent = total;
            } else if (total < price) {
                alert("Không đủ tiền");
            }
        }
    });
});
