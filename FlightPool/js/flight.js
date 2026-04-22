//option pick

const flightOpt1 = document.querySelector('.flight-option1');
const flightOpt2 = document.querySelector('.flight-option2');

flightOpt1.addEventListener('click', ()=>{
    flightOpt1.classList.add('picked');
    flightOpt2.classList.remove('picked');
});

flightOpt2.addEventListener('click', ()=>{
    flightOpt2.classList.add('picked');
    flightOpt1.classList.remove('picked');
});

