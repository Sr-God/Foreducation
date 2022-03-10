let loginIn = document.querySelector('#login');
let passIn = document.querySelector('#password');

let wrongLogin = document.querySelector('.wrongLogin');
let wrongLength = document.querySelector('.wrongLenght');
let wrongPassword = document.querySelector('.wrongPassword');

let viewLogin = document.querySelector('.viewLogin');
let viewLength = document.querySelector('.viewLenght');
let viewPassword = document.querySelector('.viewPassword');

let doors = document.querySelector(".doors");

let eyeBtn = document.querySelector('#eye');
// CHECK USER VALID
loginIn.addEventListener('input', function (){
    viewLogin.innerHTML = loginIn.validity.valid ? '+' : '-';
    wrongLogin.className = loginIn.validity.valid ? 'correct' : 'wrong';
    checkDoors();
})
// CHECK PASSWORD VALID
passIn.addEventListener('input', function (){
    viewLength.innerHTML = passIn.validity.valid ? '+' : '-';
    wrongLength.className = passIn.validity.valid ? 'correct' : 'wrong';
    viewPassword.innerHTML = Number(passIn.value) ? '+' : '-';
    wrongPassword.className = Number(passIn.value) ? 'correct' : 'wrong';
    checkDoors();
})
function checkDoors(){
    if(viewLogin.innerHTML == '+' && viewLength.innerHTML == '+' && viewPassword.innerHTML == '+')
        return doors.classList.add('open');
    else
        return doors.classList.remove('open');
}
// EYE
eyeBtn.addEventListener('click', function (){
    passIn.type = eyeBtn.checked ? 'text' : 'password';
});