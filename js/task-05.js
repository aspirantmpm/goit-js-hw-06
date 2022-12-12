let inputEl = document.querySelector('#name-input');
console.log(inputEl);

let outputEl = document.querySelector('#name-output');
console.log(outputEl);

const nameEl = document.querySelector('h1');
console.log(nameEl);

inputEl.addEventListener('input', onInput);
function onInput(event) {
  const text = event.currentTarget.value;
  !text ? (outputEl.textContent = 'Anonymous') : (outputEl.textContent = text);
}
