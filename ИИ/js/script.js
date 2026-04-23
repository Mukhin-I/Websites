const filterBox = document.querySelectorAll('.type-content');
const filterTab = document.querySelectorAll('.text-t');

document.querySelector('.type-selector').addEventListener('click', (event)=>{
    if(event.target.tagName !== 'LI') return false;


    let filterClass = event.target.dataset['t'];
    
    filterBox.forEach( elem =>{
        elem.classList.remove('active');
        if(elem.classList.contains(filterClass)){
            elem.classList.add('active');
        };
    });

    filterTab.forEach( elem =>{
        elem.classList.remove('tab-active');
    });
    event.target.classList.add('tab-active');
});


const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active-b');
});