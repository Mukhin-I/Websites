const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active-b');
});