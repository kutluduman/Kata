let prompt = require("prompt-sync")();


const getRandomNumber = () => {

  return Math.ceil(Math.random() *100);

}

const secretNumber = getRandomNumber();
let yourNumber = undefined;
let pastNumbers = [];


while(yourNumber!==secretNumber) {

yourNumber = prompt("Guess a number : ");

if(!Number(yourNumber)) {

  console.log("This is not a number! Give a number");

} else if(pastNumbers.includes(yourNumber)) {

console.log("You already gave this number before. Try new number");

} else {

  if(yourNumber>secretNumber) {
    console.log("Your guess is too high");
  } else if(yourNumber<secretNumber) {
    console.log("Your guess is too low");
  } else {

    console.log("You got it correct! Your attempts were " + pastNumbers.length);

  }

  pastNumbers.push(yourNumber);

  } 

}



