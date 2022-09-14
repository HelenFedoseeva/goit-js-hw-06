const inputRef = document.getElementById('name-input')
const outputRef = document.getElementById('name-output')


// outputRef.textContent = 'Anonymous'


inputRef.addEventListener('input', (event) => {
    
     outputRef.textContent = event.target.value
     if (inputRef.value < 1) { 
          outputRef.textContent = 'Anonymous'
     }

})
inputRef.addEventListener('blur', () => { 
     if (inputRef.value === '' ) {
          outputRef.textContent = 'Anonymous'
     }
   
})