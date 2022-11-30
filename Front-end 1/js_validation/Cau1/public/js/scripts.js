const form = document.querySelector('form')
form.addEventListener('submit',(e)=> {
    if (form.checkValidity()===false){
        e.preventDefault();
        e.stopPropagation()
    }
    form.classList.add('was-validated')
})

let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
let a = getRandomIntInclusive(0, 9)
let b = getRandomIntInclusive(0, 9)
let c = getRandomIntInclusive(0, 9)
let d = getRandomIntInclusive(0, 9)
let rndNumber = a.toString() + b.toString() + c.toString() + d.toString()
const labelCaptchar = document.querySelector('.labelCaptchar')
labelCaptchar.textContent = 'Captchar: ' + rndNumber

const reCaptchar = document.querySelector('.reCaptchar')

reCaptchar.setAttribute('pattern', rndNumber)