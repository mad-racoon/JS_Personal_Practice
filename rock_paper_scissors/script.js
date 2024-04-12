"use strict";

// Selecting elements
const messageEl = document.querySelector(".message");
const playerImg = document.querySelector(".img--player");
const btnRock = document.querySelector(".btn--rock");
const btnScissors = document.querySelector(".btn--scissors");
const btnPaper = document.querySelector(".btn--paper");
const btnGo = document.querySelector(".btn--go");

let player, computer;

// Starting point
messageEl.textContent = "make your decision";
playerImg.src = "rock-paper-scissors.png";

// Create random rock scissors papers
computer = Math.trunc(Math.random() * 3) + 1;
console.log(computer); // 1 = rock, 2 = scissors, 3 = papers

// functions for user choice
const clickRock = function () {
  playerImg.src = "rock.png";
  console.log("rock clicked");
  player = 1;
  console.log(player);
};

const clickScissors = function () {
  playerImg.src = "scissors.png";
  console.log("scissors clicked");
  player = 2;
  console.log(player);
};

const clickPaper = function () {
  playerImg.src = "paper.png";
  console.log("paper clicked");
  player = 3;
  console.log(player);
};

// Event listeners for user decision
btnRock.addEventListener("click", clickRock);

btnScissors.addEventListener("click", clickScissors);

btnPaper.addEventListener("click", clickPaper);

// Game logic
// Player wins
btnGo.addEventListener("click", function () {
  console.log(computer);
  if (
    (player === 1 && computer === 2) ||
    (player === 2 && computer === 3) ||
    (player === 3 && computer === 1)
  ) {
    console.log("player won");
  } else if (
    // Computer wins
    (computer === 1 && player === 2) ||
    (computer === 2 && player === 3) ||
    (computer === 3 && player === 1)
  ) {
    console.log("computer won");
  } else if (
    (computer === 1 && player === 1) ||
    (computer === 2 && player === 2) ||
    (computer === 3 && player === 3)
  )
    console.log("draw");
});
