let inputEl = document.querySelector('#validation-input');
console.log(inputEl);
let inputLength = inputEl.getAttribute('data-length');

const inputValid = document.querySelector('#validation-input.valid');
console.log(inputValid);

const inputInvalid = document.querySelector('#validation-input.invalid');
console.log(inputInvalid);

inputEl.addEventListener('blur', onBlur);
function onBlur(event) {
  const text = event.target.value;
  if (text.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
