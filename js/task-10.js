function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
console.log(inputEl);
const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);
const btnDestroy = document.querySelector("button[data-destroy]");
console.log(btnDestroy);
const boxEl = document.querySelector("#boxes");
console.log(boxEl);

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;
  let step = 10;

  const elements = [];
  
  for (let i = 1; i <= 100; i += 1) {
    const div = document.createElement("div");
    div.style.width = '"${divWidth}" + "${step}"';
    div.style.height = '"${divHeight}" + "${step}"';
    div.style.backgroundColor = getRandomHexColor();
    div.textContent = i;    
    elements.push(div);
  };
  boxEl.append(...elements);
};

function destroyBoxes(event) {
  inputEl.value = " ";
  boxEl.innerHTML = [];
};