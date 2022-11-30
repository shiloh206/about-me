'use strict';

console.log('hello')

let username = prompt ('What is your name?')
alert('Greetings ' + username + '! Answer the following wisely')


let oneQuestion = prompt ('Did I attend college in Cali? Y/N').toLowerCase();

if(oneQuestion === 'yes' || oneQuestion === 'y')

alert('Nope!')

else if(oneQuestion === 'no' || oneQuestion === 'n')
alert('Correct! I atteneded in Washington')

let twoQuestion = prompt ('Is my favorite color black?').toLocaleLowerCase();

if(twoQuestion === 'yes' || twoQuestion === 'y')
alert ('Nope! I have no favorite color!')

else if(twoQuestion === 'no' || twoQuestion ==='n')
alert('Correct! I have no favorite color!')

let threeQuestion = prompt('Do I have children?').toLowerCase();

if (threeQuestion === 'yes' || threeQuestion === 'y')
alert('Correct, I have a crazy two year old.')

else if (threeQuestion === 'no' || threeQuestion === 'n')
alert ('Incorrect! He drives me crazy but I love him!')


let fourQuestion = prompt ('Am I the oldest in my family of three siblings?').toLowerCase();

if( fourQuestion === 'yes' || fourQuestion === 'y')
alert ('I wish, middle child.')

else if( fourQuestion === 'no' || fourQuestion ==='n')
alert ('Correct, I am definitely a middle child.')

let fiveQuestion = prompt('Do I know how to box?').toLowerCase();

if(fiveQuestion === 'yes' || fiveQuestion === 'y')
alert('Facts!')

else if(fiveQuestion === 'no' || fiveQuestion === 'n')
alert('I can a little')

