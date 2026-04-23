// //video

// const pauseBtn = document.querySelector('.pause');
// const vidPreview = document.querySelector('.video-preview');
// const video = document.querySelector('.about-vid');
// pauseBtn.addEventListener('click', ()=>{
//     if(video.paused){
//         video.play();
//         vidPreview.classList.add('hidden-preview');
//         pauseBtn.classList.add('hidden-preview');
//     }else{
//         video.pause();
//         vidPreview.classList.remove('hidden-preview');
//         pauseBtn.classList.remove('hidden-preview');
//     }
// },false);

// video.addEventListener('click', ()=>{
//     if(video.paused){
//         video.play();
//         vidPreview.classList.add('hidden-preview');
//         pauseBtn.classList.add('hidden-preview');
//     }else{
//         video.pause();
//         vidPreview.classList.remove('hidden-preview');
//         pauseBtn.classList.remove('hidden-preview');
//     }
// },false);

//faqs

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active-ans');
    })
});


//to top

const btnTop = document.querySelector('.to-top');
console.log(btnTop)

window.addEventListener('scroll', ()=>{
    btnTop.classList.toggle('active-top', window.scrollY>200);
});