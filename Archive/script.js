
const play1 = [];
const play2 = [];
const square = document.getElementsByTagName('td');

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let storedXConditions = [0, 0, 0, 0, 0];
let storedOConditions = [0, 0, 0, 0, 0];
let switcher = true;


const addX = (i, h) => {
  square[i].innerText = "X";
  square[i].classList = "X";
  switcher = false;
}
const addO = (i, h) => {
  square[i].innerText = "O";
  square[i].classList = "O";
  switcher = true;
  storedXConditions[h] = i;
  console.log(h + " this inside addO");
}
for (let h = 0; h < 9; h++) {
  for (let i = 0; i < square.length; i++) {
    square[i].getAttribute("data-num");
    square[i].addEventListener("click", () => {
      console.log(i + "this is a clicks and showss me box");
      if (switcher === true) {
        console.log(h + " this before addO");
        addX(i, h);
      }
      else if (switcher === false) {
        addO(i, h);
      }
    });
  }
}