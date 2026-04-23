const filterBox = document.querySelectorAll('.dates-row');

document.querySelector('.date-selector').addEventListener('click', (event)=>{
    if(event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem =>{
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass!=='all'){
            elem.classList.add('hide');
        }
    });
});


const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active-b');
});