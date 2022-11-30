const btnStart = document.querySelector('#btn-start');
const operation = document.querySelector('#operation');
const game = document.querySelector('#game');
const score = document.querySelector('#score');
let total = +score.textContent;
btnStart.addEventListener('click', newGame);

function newGame() {
    game.innerHTML = '';
    const a = getRandomIntInclusive(0, 99);
    const b = getRandomIntInclusive(0, 99);
    let dau = getRandomIntInclusive(0, 1);
    if(dau == 0) {
        dau = '+'
    }
    else {
        dau = '-'
    }
    const phepTinh = a + dau + b;
    const ketQua = eval(phepTinh)
    operation.textContent = phepTinh;

    for (let i = 0; i < 10; i++) {
        const top = getRandomIntInclusive(0, 600);
        const left = getRandomIntInclusive(0, 800);
        const ketquaSai = ketQua + getRandomIntInclusive(1, 6);
        game.innerHTML += `<div class="circle" style="top: ${top}px; left: ${left}px">${ketquaSai}</div>`;
    }
    game.innerHTML += `<div class="circle" style="top: ${getRandomIntInclusive(0, 600)}px; left: ${getRandomIntInclusive(0, 800)}px">${ketQua}</div>`;

    const circles = document.querySelectorAll('.circle');
    circles.forEach(element => {
        element.addEventListener('click', function () {
            // Ket qua dung
            if (this.textContent == ketQua) {
                total++;
                score.textContent = total;
                score.classList.add('badge-success');
                score.classList.remove('badge-danger');
                newGame();
            }
            // Ket qua sai
            else {
                total--;
                score.textContent = total;
                score.classList.add('badge-danger');
                score.classList.remove('badge-success');
                newGame();
            }
        });
    });
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}