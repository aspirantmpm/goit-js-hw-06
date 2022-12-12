let inputEl = document.querySelector('#font-size-control');
console.log(inputEl);

let textEl = document.querySelector('#text');
console.log(textEl);

inputEl.addEventListener('input', onMove);
function onMove(event) {
  const size = inputEl.value;
  console.log(size);

  textEl.style.fontSize = size + 'px';
}
