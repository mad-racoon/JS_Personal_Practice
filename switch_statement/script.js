console.log(`test`);

/*
    If it's a weekday (Monday to Friday), the message should be "It's a weekday, time to work!".
    If it's Saturday, the message should be "It's Saturday, time to relax!".
    If it's Sunday, the message should be "It's Sunday, time to relax and prepare for the week!".
*/
// get a user input
const input = prompt(`which day of the week today?`);
const convertToDowncase = input.toLowerCase();
// declare switch statement
switch (convertToDowncase) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(`It's a weekday, time to work!`);
    break;
  case "saturday":
    console.log(`It's Saturday, time to relax!`);
    break;
  case "sunday":
    console.log(`It's Sunday, time to relax and prepare for the week!`);
    break;
  default:
    console.log(`invalid input - type one of the weekday please.`);
}
// log the result depend on user input
