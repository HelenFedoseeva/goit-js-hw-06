function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyRef = document.body
console.log(bodyRef)
const widgetRef = bodyRef.children[1]
console.log(widgetRef)
const changeColorBtnRef = widgetRef.children[1]
const colorNameRef = widgetRef.querySelector('span.color')
console.log(colorNameRef)


changeColorBtnRef.addEventListener('click', () => { 
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = getRandomHexColor();
})
