//to top

const btnTop = document.querySelector('.to-top');
console.log(btnTop)

window.addEventListener('scroll', ()=>{
    btnTop.classList.toggle('active-top', window.scrollY>200);
})

//filter

const filterBox = document.querySelectorAll('.emp-row');

document.querySelector('.emp-selector').addEventListener('click', (event)=>{
    if(event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];
    
    filterBox.forEach( elem =>{
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass!=='all'){
            elem.classList.add('hide');
        }
    });
});
