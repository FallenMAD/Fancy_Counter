'use strict';

//Buttons
const resetBtn = document.querySelector('.counter__reset-button');
const increaseBtn = document.querySelector('.counter__button--increase');
const decreaseBtn = document.querySelector('.counter__button--decrease');
const counterEl = document.querySelector('.counter');
const counterTitle = document.querySelector('.counter__title');

//Value 
let count = 0;
const value = document.querySelector('.counter__value');

increaseBtn.addEventListener('click', () => {
  count++;

  if (count > 5) {
    count = 5;
    counterEl.classList.add('counter--limit');
    counterTitle.textContent = 'Limit!Buy Pro For >5'

    increaseBtn.disabled = true;
    decreaseBtn.disabled = true;
  }

  value.textContent = count;
})

decreaseBtn.addEventListener('click', () => {
  if (count < 1) {
    return;
  }

  count--;

  value.textContent = count;
})

resetBtn.addEventListener('click', () => {
  count = 0
  value.textContent = count;
  counterEl.classList.remove('counter--limit');
  counterTitle.textContent = 'Fancy Counter';
  increaseBtn.disabled = false;
  decreaseBtn.disabled = false;
})
