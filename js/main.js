'use strict';

/* Theme Switch */
let body = document.querySelector('body');
let themeSwitch = document.querySelector('#theme__switch');
themeSwitch.addEventListener('click', function(){
        body.classList.toggle("dark");
        themeSwitch.classList.toggle('active');
});

const nav_btns = document.querySelectorAll('.nav__btn');
const nav = document.querySelector('nav');

for(let nav_btn of nav_btns){
        nav_btn.onmousemove = function(e){
                const x = e.pageX - nav_btn.offsetLeft;
                const y = e.pageY - nav_btn.offsetTop;
                nav_btn.style.setProperty('--x', x + 'px');
                nav_btn.style.setProperty('--y', y + 'px');
        }
}