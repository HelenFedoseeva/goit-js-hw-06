const parentListEl = document.querySelector('ul')
const categoriesEl = document.querySelectorAll('li.item')
const categorieEl = document.querySelector('li.item h2');
const animalsListEl = document.querySelector('li.item ul')
const secondCategoryEl = parentListEl.children[1];
const secondListEl = secondCategoryEl.lastElementChild;

const thirdCategoryEl = parentListEl.children[2];
const thirdListEl = thirdCategoryEl.lastElementChild;



console.log(`Number of categories: ${categoriesEl.length}`);

console.log(`Category: ${categorieEl.textContent}`);
console.log(`Elements: ${animalsListEl.children.length}`);

console.log(`Category: ${secondCategoryEl.firstElementChild.textContent}`);
console.log(`Elements: ${secondListEl.children.length}`)


console.log(`Category: ${thirdCategoryEl.firstElementChild.textContent}`);
console.log(`Elements: ${thirdListEl.children.length}`);