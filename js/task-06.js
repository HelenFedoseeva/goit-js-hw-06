const inputRef = document.getElementById('validation-input');



inputRef.addEventListener('blur', (event) => { 
    event.preventDefault();
    
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid');
    } else if (inputRef.value.length === Number(inputRef.dataset.length)) { 
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid');
    }
      
    
   
})
