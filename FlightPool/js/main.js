//news slider

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const sliderLine = document.querySelector('.offers-line');
let offset = 0;

btnNext.addEventListener('click', ()=>{
	offset = offset + 516;
	sliderLine.style.left = -offset + 'px';
	if(offset > 1300){
		offset = 0;
	}
});

btnPrev.addEventListener('click', ()=>{
	offset = offset - 516;
	sliderLine.style.left = -offset + 'px';
	if(offset < 0){
		offset = 1300;
	}
});

// //image change

const images = document.querySelectorAll('.feat-img');
let index = 0;

const activeSlide = n =>{
	for( image of images){
		image.classList.remove('img-active');
	}
	images[n].classList.add('img-active');
};

const nextSlide = ()=>{
	if(index==images.length - 1){
		index = 0;
		activeSlide(index);
	}else{
		index++;
		activeSlide(index);
	}
};

setInterval(nextSlide, 4000);