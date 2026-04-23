//avatar

const avatar = document.querySelector('.avatar-big');

window.addEventListener('scroll', ()=>{
    avatar.classList.toggle('shown', window.scrollY>834);
});

//to top

const btnTop = document.querySelector('.to-top');
console.log(btnTop)

window.addEventListener('scroll', ()=>{
    btnTop.classList.toggle('active-top', window.scrollY>200);
})