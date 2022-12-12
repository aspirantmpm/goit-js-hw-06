let valueEl = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');
console.log(counterValue);

const decrementBtn = document.querySelector('.js-decrement');
console.log(decrementBtn);

const incrementBtn = document.querySelector('.js-increment');
console.log(incrementBtn);

decrementBtn.addEventListener('click', event => {
  console.log('добавляю слушателя событий на кнопку -1');
  valueEl -= 1;
  counterValue.innerText = valueEl;
});

incrementBtn.addEventListener('click', e => {
  console.log('добавляю слушателя событий на кнопку +1');
  valueEl += 1;
  counterValue.innerText = valueEl;
});
