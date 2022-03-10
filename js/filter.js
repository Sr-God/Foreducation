/* CLOSE SUB_MENU */
let inputs = document.querySelectorAll('.inFilters');
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