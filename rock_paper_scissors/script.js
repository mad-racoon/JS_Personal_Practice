"use strict";

// Selecting elements
const messageEl = document.querySelector(".message");
const playerImg = document.querySelector(".img--player");
const computerImg = document.querySelector(".img--computer");
const btnRock = document.querySelector(".btn--rock");
const btnScissors = document.querySelector(".btn--scissors");
const btnPaper = document.querySelector(".btn--paper");
const btnGo = document.querySelector(".btn--go");
const btnAgain = document.querySelector(".btn--again");

let player, computer;

// Starting point
const init = function () {
  messageEl.textContent = "make your decision";
  playerImg.src = "rock-paper-scissors.png";

  // Create random rock scissors papers
  computer = Math.trunc(Math.random() * 3) + 1;
  console.log(computer); // 1 = rock, 2 = scissors, 3 = papers

  // Hide Play again button
  btnAgain.classList.add("hidden");

  // Show Go button
  btnGo.classList.remove("hidden");

  // Hide Computer's decision
  computerImg.src = "rock-paper-scissors.png";
};

init();

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

// Show computer's choice
const showComputerChoice = function () {
  if (computer === 1) {
    computerImg.src = "rock.png";
  } else if (computer === 2) {
    computerImg.src = "scissors.png";
  } else if (computer === 3) {
    computerImg.src = "paper.png";
  }
};

// Event listeners for user decision
btnRock.addEventListener("click", clickRock);
btnScissors.addEventListener("click", clickScissors);
btnPaper.addEventListener("click", clickPaper);

// Game logic
// Player wins
btnGo.addEventListener("click", function () {
  showComputerChoice();
  btnGo.classList.add("hidden");
  btnAgain.classList.remove("hidden");
  console.log(computer);
  if (
    (player === 1 && computer === 2) ||
    (player === 2 && computer === 3) ||
    (player === 3 && computer === 1)
  ) {
    console.log("player won");
    messageEl.textContent = "Player Won!";
  } else if (
    // Computer wins
    (computer === 1 && player === 2) ||
    (computer === 2 && player === 3) ||
    (computer === 3 && player === 1)
  ) {
    console.log("computer won");
    messageEl.textContent = "Computer Won!";
  } else if (
    // Draw
    (computer === 1 && player === 1) ||
    (computer === 2 && player === 2) ||
    (computer === 3 && player === 3)
  ) {
    console.log("draw");
    messageEl.textContent = "Draw!";
  }
});

// restart game
btnAgain.addEventListener("click", init);
