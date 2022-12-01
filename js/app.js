'use strict';

console.log('hello');

let username = prompt('What is your name?');
alert('Greetings ' + username + '! Answer the following wisely');

function questionOne() {
  let oneQuestion = prompt('Did I attend college in Cali? Y/N').toLowerCase();

  if (oneQuestion === 'yes' || oneQuestion === 'y')

    alert('Nope!');

  else if (oneQuestion === 'no' || oneQuestion === 'n')
    alert('Correct! I atteneded in Washington');
}
function questionTwo() {
  let twoQuestion = prompt('Is my favorite color black?').toLocaleLowerCase();

  if (twoQuestion === 'yes' || twoQuestion === 'y')
    alert('Nope! I have no favorite color!');

  else if (twoQuestion === 'no' || twoQuestion === 'n')
    alert('Correct! I have no favorite color!');
}
function questionThree() {
  let threeQuestion = prompt('Do I have children?').toLowerCase();

  if (threeQuestion === 'yes' || threeQuestion === 'y')
    alert('Correct, I have a crazy two year old.');

  else if (threeQuestion === 'no' || threeQuestion === 'n')
    alert('Incorrect! He drives me crazy but I love him!');
}
function questionFour() {
  let fourQuestion = prompt('Am I the oldest in my family of three siblings?').toLowerCase();

  if (fourQuestion === 'yes' || fourQuestion === 'y')
    alert('I wish, middle child.');

  else if (fourQuestion === 'no' || fourQuestion === 'n')
    alert('Correct, I am definitely a middle child.');
}
function questionFive() {
  let fiveQuestion = prompt('Do I know how to box?').toLowerCase();

  if (fiveQuestion === 'yes' || fiveQuestion === 'y')
    alert('Facts!');

  else if (fiveQuestion === 'no' || fiveQuestion === 'n')
    alert('I can a little');
}

function numberGuessGame() {
  // Guessing number game

  let sixQuestion = prompt('Guess a number');

  // console.log(sixQuestion)
  //           0 1 2 3 4 5 6 7 8 9
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //outer for loop (slow loop)
  // prompt try again
  //
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (sixQuestion < array[6]) {
      alert('Guess to low try again');
      sixQuestion = prompt('Guess a number');

    } else if (sixQuestion > array[6]) {
      alert('Guess to high try again');
      sixQuestion = prompt('Guess a number');
    }
    else if (sixQuestion === array[6]) {
      alert('Bingo!');
      break;
    }
  }
}
function fruitGuessingGame() {

  //outer for loop (slow loop)
  // prompt try again
  //
  let juice = ['pineaple', 'watermelon', 'orange', 'apple', 'strawberry', 'peach', 'pomegrante'];

  let sevenQuestion = prompt('What is my favorite fruit juice? Pineaple, watermelon, orange, apple, strawberry, peach, or pomegrante?');

  for (let i = 0; i < juice.length; i++) {
    if (juice[i] === 'watermelon' || juice[i] === 'apple' || juice[i] === 'pomegrante')
      alert('Great Guess!');
    break;
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
numberGuessGame();
fruitGuessingGame();
