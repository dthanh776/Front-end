const button = document.querySelectorAll("button");
const td = document.querySelectorAll("td");
let check = "";
let choose = "";
button.forEach(item => {
    item.addEventListener("click", () => {
        if (item.textContent == "Clear") {
            td.forEach(item => {
                item.textContent = "";
            })
        }
        else if (item.getAttribute('id') == "tictoeX") {
            choose = "X";
        }
        else if (item.getAttribute('id') == "tictoeO") {
            choose = "O";
        }
        else {
            start();
        }
    })
})
td.forEach(item => {
    item.addEventListener("click", () => {
        if (choose == "") {
            alert('Chọn X hoặc O để bắt đầu chơi')
        }
        if (choose == "O") {
            if (check == "X") {
                item.innerHTML = '<div class="check">X</div>';
                check = "O";
            }
            else {
                item.innerHTML = '<div class="check">O</div>';
                check = "X";
            }
        }
        else if (choose == "X") {
            if (check == "O") {
                item.innerHTML = '<div class="check">O</div>';
                check = "X";
            }
            else {
                item.innerHTML = '<div class="check">X</div>';
                check = "O";
            }
        }
    })
})
let timeout = null;
let m = 00;
let s = 10;
function start() {
    if (s === 00) {
        m -= 1;
        s = 59;
    }
    document.querySelector('#m').innerText = m.toString();
    document.querySelector('#s').innerText = s.toString();
    timeout = setTimeout(function () {
        s--;
        start();
    }, 1000);
    const minute = document.querySelector('#m')
    const second = document.querySelector('#s')
    if (m == -1) {
        clearTimeout(timeout)
        minute.textContent = 00;
        second.textContent = 00;
        alert('Hết giờ')
    }
}

