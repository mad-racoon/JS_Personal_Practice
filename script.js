"use strict";

console.log(`this is test`);

//create a program that determines whether a given number is even or odd:

// collect user input
const input = prompt(`give me a number to figure out it's even or odd!`);

// number or string?
const convertToNum = Number(input);

function isOddOrEven(num) {
  if (Number.isNaN(num)) {
    console.log(`invalid input - please type a number.`);
  } else {
    if (num % 2 === 0) {
      console.log(`${num} is even!`);
    } else {
      console.log(`${num} is odd!`);
    }
  }
}

isOddOrEven(convertToNum);

// if number, return even or odd
// if string, return invalid number
