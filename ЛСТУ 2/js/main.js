//news slider
let offset = 0;
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const sliderLine =  document.querySelector('.news-line');

btnNext.addEventListener('click', ()=>{
    offset = offset + 392;
    if(offset > 1077){
        offset=0;
    }
    sliderLine.style.left = -offset + 'px';
});

btnPrev.addEventListener('click', ()=>{
    offset = offset - 392;
    if(offset < 0){
        offset=1077;
    }
    sliderLine.style.left = -offset + 'px';
});

//stats slider
const images = document.querySelectorAll('.stats-img');
let index = 0;

const activeSlide = n => {
    for(image of images){
        image.classList.remove('img-active');
    }
    images[n].classList.add('img-active');
};

const nextSlide = () => {
    if(index == images.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
};

setInterval(nextSlide, 5000);

//to top

const btnTop = document.querySelector('.to-top');
console.log(btnTop)

window.addEventListener('scroll', ()=>{
    btnTop.classList.toggle('active-top', window.scrollY>200);
})




