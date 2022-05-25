let menuBtn = document.querySelector('.menuBtn');

menuBtn.addEventListener('click', function(){
    nav.classList.toggle('openNav');
    menuBtn.classList.toggle('open');
    if(nav.style.display == 'flex'){
        nav.style.display = 'none';
    }else{
        nav.style.display = 'flex';
    }
})
