function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.getElementById('controls')
const controlsInputRef = controlsRef.querySelector('input')
const controlCreateBtnRef = controlsRef.querySelector('button[data-create]')
const controlsDestroyBtnRef = controlsRef.querySelector('button[data-destroy]')

const resultBoxesRef = document.getElementById('boxes')
console.log(resultBoxesRef)


const createBoxes = amount => {
//  return amount * resultBoxesRef.insertAdjacentElement('beforeend', `<div style="width: 30px; height: 30px; background-color: ${getRandomHexColor()}"></div>`)
  const newBox = document.createElement('div');
  newBox.style.backgroundColor = getRandomHexColor();
  newBox.style.width = '30px';
  newBox.style.height = '30px';

  console.log(newBox)

  return amount * newBox;
}

console.log(createBoxes(2))
 

// controlsInputRef.addEventListener('input', () => { 
//   controlsInputRef.value = Number(amount);


//   resultBoxesRef.append(createBoxes())
// })
