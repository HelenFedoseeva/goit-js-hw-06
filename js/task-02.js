const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients')


const listFirstEl = document.createElement('li');
listFirstEl.textContent = ingredients[0];

const ingredientsMarkup = ingredients.map(ingredient => { 
  let element;
  element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item');
  return element;
})

ingredientsListEl.append(...ingredientsMarkup)
// const listSecondEl = document.createElement('li');
// listSecondEl.textContent = ingredients[1];

// const listThirdEl = document.createElement('li');
// listThirdEl.textContent = ingredients[2];

// const listFourthEl = document.createElement('li');
// listFourthEl.textContent = ingredients[3];

// const listFifthEl = document.createElement('li');
// listFifthEl.textContent = ingredients[4];

// const listSixthEl = document.createElement('li');
// listSixthEl.textContent = ingredients[5];





