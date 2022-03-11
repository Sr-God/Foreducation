// CHECK LOGIN VALID
let invalidLogin = document.querySelector('.invalid__login');
// LOGIN INPUT
let loginIn = document.querySelector('#login');
// LOGIN  P
let wrongLogin = document.querySelector('.wrong__login');
// LOGIN SPAN
let viewLogin = document.querySelector('.view__login');

loginIn.addEventListener('input', function () {
    invalidLogin.className = loginIn.validity.valid ? 'invalid__correct' : 'invalid__wrong';
    wrongLogin.className = loginIn.validity.valid ? 'correct' : 'wrong';
    viewLogin.innerHTML = loginIn.validity.valid ? '✔' : '✘';
})

// CHECK PASSWORD VALID
let invalidPass = document.querySelector('.invalid__pass');
// PASSWORD INPUT
let passIn = document.querySelector('#password');
// PASSWORD P
let wrongPassword = document.querySelector('.wrong__password');
// PASSWORD SPAN
let viewPassword = document.querySelector('.view__password');
// LENGTH P
let wronglength = document.querySelector('.wrong__length');
// LENGTH SPAN
let viewlength = document.querySelector('.view__length');

passIn.addEventListener('input', function () {
    invalidPass.className = passIn.validity.valid ? 'invalid__correct' : 'invalid__wrong';
    // LENGTH CHECK
    wronglength.className = (passIn.value).length == 11 ? 'correct' : 'wrong';
    viewlength.innerHTML = (passIn.value).length == 11 ? '✔' : '✘';
    // NUMBER CHECK
    wrongPassword.className = Number(passIn.value) ? 'correct' : 'wrong';
    viewPassword.innerHTML = Number(passIn.value) ? '✔' : '✘';
})

// EYE
let eyeBtn = document.querySelector('#eye');
eyeBtn.addEventListener('click', function () {
    passIn.type = eyeBtn.checked ? 'text' : 'password';
});