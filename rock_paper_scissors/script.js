"use strict";

// Selecting elements
const messageEl = document.querySelector(".message");
const playerImg = document.querySelector(".img--player");
const btnRock = document.querySelector(".btn--rock");
const btnScissors = document.querySelector(".btn--scissors");
const btnPaper = document.querySelector(".btn--paper");

// Starting point
messageEl.textContent = "make your decision";
playerImg.src = "rock-paper-scissors.png";

// Making decision
btnRock.addEventListener("click", function () {
  playerImg.src = "rock.png";
});

btnScissors.addEventListener("click", function () {
  playerImg.src = "scissors.png";
});

btnPaper.addEventListener("click", function () {
  playerImg.src = "paper.png";
});
