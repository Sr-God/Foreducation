'use strict';
/* Theme Switch */
let body = document.querySelector('body');
let themeSwitch = document.querySelector('#theme__switch');
themeSwitch.addEventListener('click', function(){
        body.classList.toggle("dark");
        themeSwitch.classList.toggle('active');
});

