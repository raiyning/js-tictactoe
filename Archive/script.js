
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
  square[i].getAttribute("data-num");
  square[i].addEventListener("click", () => {
    console.log(i);
    square[i].classList.add("X");
    square[i].innerHTML = "X";
  });

}