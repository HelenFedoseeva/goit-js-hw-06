// //создать переменную counterValue=0, которая хранит текущее значение на value

// const counterEl = document.querySelector('#counter');

// const btnDecrementEl = counterEl.querySelector('[data-action="decrement"]');

// const btnIncrement = counterEl.querySelector('[data-action="increment"]');

// const valueEl = counterEl.querySelector('#value');

// // const makeIncrementValue = (value, valueEl) => {
// //     value += 1;
// //     return valueEl += value;
// // };


// // const makeDecrementValue = (value, valueEl) => {
// //     value -= 1;
// //     return valueEl += value;
// // };
// const makeCounterCount = (value, counterValue) => {
//     if (btnIncrement === true) {
//         value += 1;
//         counterValue += value;
//     } else if (btnDecrementEl === true) {
//         value -= 1;
//         counterValue += value;
//     }
//     return
    
// }
// btnDecrementEl.addEventListener('click', makeCounterCount);
// // btnIncrement.addEventListener('click', makeCounterCount);
// // получить ссылки на элементы
// const incrementBtnEl = document.querySelector('button[data-action="increment"]')
// const decrementBtnEl = document.querySelector('button[data-action="decrement"]')
// const valueEl = document.querySelector('#value')
// const counterValue = 0;
// console.log(counterValue)

// valueEl.textContent = counterValue;
// console.log(valueEl)





// // написать колбэк функцию onDecremetnBtnClick ()

// const onDecremetnBtnClick = (counterValue) => {
//     console.log('это клик по декременту')
//     counterValue -= 1;
//     console.log(counterValue)
  
// }

// //  написать колбэк функцию onIncremetnBtnClick ()

// const onIncremetnBtnClick = (counterValue) => {
//     console.log('это клик по инкременту', counterValue)
//      counterValue += 1;
//     console.log(counterValue)
    
// }

// //написать функцию высшего порядка с проверкой на клик на ту или иную кнопку и  вызов подходящего колбэка

// decrementBtnEl.addEventListener('click', onDecremetnBtnClick);
// incrementBtnEl.addEventListener('click', onIncremetnBtnClick);

// // const makeCounterCount = (valueEl = 0, onDecremetnBtnClick, onIncremetnBtnClick) => {
// //     if (decrementBtnEl.addEventListener('click', onDecremetnBtnClick)) {
// //         valueEl -= 1;
// //     } else if (incrementBtnEl.addEventListener('click', onIncremetnBtnClick)) {
// //         valueEl += 1;
// //     }

// //     return valueEl;
// // }







// class Counter {
//     constructor({ rootSelector, initialValue, step }) {
//         this.rootSelector = rootSelector;
//         this.counterValue = initialValue;
//         this.step = step;
//         this.bindEvents;
//     }

//     increment() {
//         this.counterValue += this.step;
//         return this.counterValue;
//     };

//     decrement() {
//         this.counterValue -= this.step;
//         return this.counterValue;
//     }

//     getRefs(rootSelector) {
//         const refs = {};
//         console.log(refs.container = document.querySelector(rootSelector));
//         refs.incrementBtn = refs.container.querySelector('button[data-action="increment"]');
//        refs.decrementBtn = refs.container.querySelector('button[data-action= "decrement"]');
//         refs.value = refs.container.querySelector('#value')

//         return refs;
//     }

//     bindEvents() {
//         this.refs.incrementBtn.addEventListener('click', () => {
//             console.log('Это инкремент')
//             this.increment();
//         })

//         this.refs.decrementBtn.addEventListener('click', () => {
//                  console.log('Это декремент')
//             this.decrement();
//         })
//     }
// }


// const targetCounter = new Counter({
//     rootSelector: '#counter',
//     initialValue: 0,
//     step: 1
// });


// console.log(targetCounter)
// console.log(targetCounter.getRefs('#counter'))



let counterValue = 0;
const counterRef = document.getElementById('counter');
const decrementBtnRef = counterRef.children[0]
const valueRef = counterRef.children[1]
const incrementBtnRef = counterRef.children[2]
 

decrementBtnRef.addEventListener('click', ()=> { 
  counterValue = Number(valueRef.textContent);
  
     counterValue -= 1;
   valueRef.textContent = counterValue
 
});

incrementBtnRef.addEventListener('click', () => {
  counterValue = Number(valueRef.textContent);
 
   counterValue += 1;
 valueRef.textContent = counterValue
 
 }
);

