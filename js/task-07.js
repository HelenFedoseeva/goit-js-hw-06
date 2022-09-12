const inputRef = document.getElementById('font-size-control')
const focusText = document.getElementById('text')



inputRef.addEventListener('input', (event) => { 
 
    focusText.style.fontSize = String(event.target.value) +"px"
})