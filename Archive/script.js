
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

for (let i = 0; i < square.length; i++) {
  console.log(square[i].getAttribute("data-num"));
}
/*for (let i = 0; i > square.length; i++) {
  console.log(square[i]);
}*/