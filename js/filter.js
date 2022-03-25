/* CLOSE SUB_MENU */
let inputs = document.querySelectorAll('.input__filters');
for(let input of inputs){
    input.addEventListener('click', checktrue);
    function checktrue(){
        input.checked = true;
        setTimeout(() =>{
            input.removeEventListener('click', checktrue);
            window.addEventListener('click', checkfalse);
        }, 1);
    }
    function checkfalse(){
        input.checked = false;
        setTimeout(() =>{
            window.removeEventListener('click', checkfalse);
            input.addEventListener('click', checktrue);
        }, 1);
    }
}


let modalBtn = document.querySelector('#export');
let modalWindow = document.querySelector('#modal__export');

modalBtn.addEventListener('click', function(){
    modalWindow.classList.remove('hidden');
    setTimeout(() =>{
        window.addEventListener('click', closeModal)
    }, 1);
    
    function closeModal(e){
        if(e.target == modalWindow){
            modalWindow.classList.add('hidden');
            window.removeEventListener('click', closeModal)
        }
    }
});