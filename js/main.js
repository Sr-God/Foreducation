'use strict';
    let body = document.querySelector('body');
    let themeSwitch = document.querySelector('#themeSwitch');    
    themeSwitch.addEventListener('click', function(){
            body.classList.toggle("dark");
            themeSwitch.classList.toggle('active');
    });