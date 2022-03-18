'use strict';
/* Theme Switch */

let body = document.querySelector('body');
let themeSwitch = document.querySelector('#theme__switch');
themeSwitch.addEventListener('click', function(){
        body.classList.toggle("dark");
        themeSwitch.classList.toggle('active');
});

const loginBtn = document.querySelector('.login__btn');
loginBtn.onmousemove = function(e){
    const x = e.pageX - loginBtn.offsetLeft - 760;
    const y = e.pageY - loginBtn.offsetTop - 125;
    loginBtn.style.setProperty('--x', x + 'px');
    loginBtn.style.setProperty('--y', y + 'px');
}