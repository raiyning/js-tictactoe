
const play1 = [];
const play2 = [];
const square = document.getElementsByTagName('td');
const turn = document.getElementsByClassName('playerTurn');
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
let storedX = [0, 0, 0, 0, 0];
let storedO = [0, 0, 0, 0, 0];
let switcher = true;
let count = 0;
//display the  next turn message
const xTurnString = () => {
  turn[0].innerText = "It is X's turn";
}
const oTurnString = () => {
  turn[0].innerText = "It is O's turn";
}
const pickAnother = () => {
  turn[0].innerText = "stop that!";
}

//insert the 
const addX = (i) => {
  square[i].innerText = "X";
  square[i].classList = "X";
  switcher = false;
}
const addO = (i) => {
  if (square[i].innerText !== "X")
    square[i].innerText = "O";
  square[i].classList = "O";
  switcher = true;
  storedX[0] = i;
  console.log(i + " this inside addO");
}
//start to listen to all data-nums
for (let i = 0; i < square.length; i++) {
  square[i].getAttribute("data-num");
  square[i].addEventListener("click", () => {
    console.log(i + "this is a clicks and showss me box");
    if (square[i] === "X") { pickAnother(); }
    else if (square[i] === "X") { pickAnother(); }
    else if (square[i] === "O") { pickAnother(); }
    else {
      if (switcher === true) {
        console.log(i + " this before addO");
        addX(i);
        oTurnString();

      }
      else if (switcher === false) {
        addO(i);
        xTurnString();
      }
    }
  });

}