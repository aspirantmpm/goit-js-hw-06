function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
console.log(bodyEl);

const spanEl = document.querySelector(".color");
console.log(spanEl);

const buttonEl = document.querySelector(".change-color");
console.log(buttonEl);

buttonEl.addEventListener("click", onClick);
function onClick(event) {
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
};