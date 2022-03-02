'use strict';
    let body = document.querySelector('body');
    let themeSwitch = document.querySelector('#themeSwitch');    
    themeSwitch.addEventListener('click', function(){
            body.classList.toggle("dark");
            themeSwitch.classList.toggle('active');
    });

    /* LOGIN */

//     let loginIn = document.querySelector('#username');
//     let passIn = document.querySelector('#password');
//     let userReq = document.querySelector('.userReq');
//     let passReq = document.querySelector('.passReq');
//     let eyeBtn = document.querySelector('#eye')
//     // CHECK USER VALID
//     loginIn.addEventListener('input', function (){
//         userReq.className = loginIn.validity.valid ? 'hide' : '';
//     })
//     // CHECK PASSWORD VALID
//     passIn.addEventListener('input', function (){
//         passReq.className = passIn.validity.valid ? 'hide' : '';
//     })
//     // EYE
//     eyeBtn.addEventListener('click', function (){
//         passIn.type = eyeBtn.checked ? 'text' : 'password';
//     })