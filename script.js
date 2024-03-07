console.log(`this is test`);

//create a program that determines whether a given number is even or odd:
const num = prompt(`give me a number to figure out it's even or odd!`);

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return console.log(`${num} is even`);
  } else {
    return console.log(`${num} is odd`);
  }
}

evenOrOdd(num);
