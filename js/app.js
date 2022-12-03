// 'use strict';

// // // console.log('hello');

// let userName = prompt('What is your name?');
// alert('Greetings ' + userName + '! Answer the following wisely');
// let score = 0;

// function questionOne() {
//   let question = prompt('Did I attend college in Cali? Y/N').toLowerCase();

//   if (question === 'yes' || question === 'y') {
//     alert('Nope!');
//     score++;
//   } else if (question === 'no' || question === 'n') {
//     alert('Correct! I atteneded in Washington');
//   }
// }
// function questionTwo() {
//   let question = prompt('Is my favorite color black?').toLocaleLowerCase();

//   if (question === 'yes' || question === 'y') {
//     alert('Nope! I have no favorite color!');
//     score++;
//   } else if (question === 'no' || question === 'n') {
//     alert('Correct! I have no favorite color!');
//   }
// }
// function questionThree() {
//   let question = prompt('Do I have children?').toLowerCase();

//   if (question === 'yes' || question === 'y') {
//     alert('Correct, I have a crazy two year old.');
//     score++;
//   } else if (question === 'no' || question === 'n')
//     alert('Incorrect! He drives me crazy but I love him!');
// }
// function questionFour() {
//   let question = prompt(
//     'Am I the oldest in my family of three siblings?'
//   ).toLowerCase();

//   if (question === 'yes' || question === 'y') {
//     alert('I wish, middle child.');
//     score++;
//   } else if (question === 'no' || question === 'n') {
//     alert('Correct, I am definitely a middle child.');
//   }
// }

// function questionFive() {
//   let question = prompt('Do I know how to box?').toLowerCase();

//   if (question === 'yes' || question === 'y') {
//     alert('Facts!');
//   } else if (question === 'no' || question === 'n') {
//     alert('I can a little');
//   }
// }

// function numberGuessGame() {
//   //   //   // Guessing number game

//   // console.log(sixQuestion);
//   //           0 1 2 3 4 5 6 7 8 9
//   // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   //outer for loop (slow loop)
//   // prompt try again
//   //

//   let tries;

//   for (tries = 0; tries < 4; tries++) {
//     let question = prompt('Guess a number from 1-10');
//     // eslint-disable-next-line eqeqeq
//     if (question == 7) {
//       alert('Bingo!');
//       score++;
//       break;
//     } else if (question < 7) {
//       alert('To low');
//     } else if (question > 7) {
//       alert('To high');
//     } else {
//       alert('not a valid number');
//     }
//   }
//   if (tries === 4) alert('The correct answer is 7');
// }

// function fruitGuessingGame() {
//   //outer for loop (slow loop)
//   // prompt try again
//   //
//   let fruits = [
//     'pineaple',
//     'watermelon',
//     'orange',
//     'apple',
//     'strawberry',
//     'peach',
//     'pomegrante',
//   ];
//   let guess = 6;

//   for (let j = 0; j < 6; j++) {
//     let answer = prompt('What are my favorite fruits?');
//     let foundMatch = false;
//     for (let i = 0; i < fruits.length; i++) {
//       if (answer.toLowerCase() === fruits[i]) {
//         foundMatch = true;
//         break;
//       }
//     }
//     if (foundMatch) {
//       alert('You got it!');
//       score++;
//       break;
//     } else {
//       --guess;
//       alert(`you have ${guess} tries left`);

//     }
//   }
//   alert('Possible answers; pineaple, watermelon, orange, apple, strawberry, peach, or pomegrante,');
//   alert(`thank you for playing ${userName}. You got ${score} out of 7 correct `);
// }

// questionOne();
// questionTwo();
// questionThree();
// questionFour();
// questionFive();
// numberGuessGame();
// fruitGuessingGame();
