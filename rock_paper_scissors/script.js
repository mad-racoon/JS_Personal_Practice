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

let player, computer, play, playerChoice, scorePlayer, scoreComputer;
scorePlayer = 0;
scoreComputer = 0;

// Starting point
const init = function () {
  messageEl.textContent = "make your decision";
  playerImg.src = "rock-paper-scissors.png";
  play = true;
  playerChoice = false;

  // Create random rock scissors papers
  computer = Math.trunc(Math.random() * 3) + 1;

  // Hide Play again button
  btnAgain.classList.add("hidden");

  // Show Go button
  btnGo.classList.remove("hidden");

  // Hide Computer's decision
  computerImg.src = "rock-paper-scissors.png";
};

init();

// functions for player's choice
const clickRock = function () {
  // Player can change decision if only play is true
  if (play) {
    playerChoice = true;
    playerImg.src = "rock.png";
    player = 1;
  }
};

const clickScissors = function () {
  if (play) {
    playerChoice = true;
    playerImg.src = "scissors.png";
    player = 2;
  }
};

const clickPaper = function () {
  if (play) {
    playerChoice = true;
    playerImg.src = "paper.png";
    player = 3;
  }
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

// Event listeners for player's decision
btnRock.addEventListener("click", clickRock);
btnScissors.addEventListener("click", clickScissors);
btnPaper.addEventListener("click", clickPaper);

// Game logic : 1 = rock, 2 = scissors, 3 = papers
btnGo.addEventListener("click", function () {
  if (playerChoice) {
    play = false;
    showComputerChoice();
    btnGo.classList.add("hidden");
    btnAgain.classList.remove("hidden");
    // Player wins
    if (
      (player === 1 && computer === 2) ||
      (player === 2 && computer === 3) ||
      (player === 3 && computer === 1)
    ) {
      messageEl.textContent = "Player Won!";
      scorePlayer++;
      document.querySelector(".scorePlayer").textContent = scorePlayer;
      console.log(`player score: ${scorePlayer}`);
    } else if (
      // Computer wins
      (computer === 1 && player === 2) ||
      (computer === 2 && player === 3) ||
      (computer === 3 && player === 1)
    ) {
      messageEl.textContent = "Computer Won!";
      scoreComputer++;
      document.querySelector(".scoreComputer").textContent = scoreComputer;
      console.log(`computer score: ${scoreComputer}`);
    } else if (
      // Draw
      (computer === 1 && player === 1) ||
      (computer === 2 && player === 2) ||
      (computer === 3 && player === 3)
    ) {
      messageEl.textContent = "Draw!";
    }
  }
});

// Restart game
btnAgain.addEventListener("click", init);
