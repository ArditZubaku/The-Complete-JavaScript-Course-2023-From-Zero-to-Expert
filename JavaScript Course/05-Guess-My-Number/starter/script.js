'use strict';

//////////////////////////////////////////////////////////////////////////////////////////
// Project #1 - Guess my number!

/* 
//////////////////////////////////////////////////////////////////////////////////////////
// Selecting an element - accessing it by html class name
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20 ;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

//////////////////////////////////////////////////////////////////////////////////////////
// Handling click events

const secretNumber = Math.trunc(Math.random() * 20) + 1; // We add +1 to compensate the removal
// of the decimal part that trunc() does
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  //////////////////////////////////////////////////////////////////////////////////////////
  // Implementing the game logic
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Insert a number please 😊';
  }
  // When a player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    //////////////////////////////////////////////////////////////////////////////////////////
    // Manipulating CSS styles
    
    // We need to specify strings when manipulating with CSS styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = 'Too high!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game. Try again!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.message').textContent = 'Too low!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game. Try again!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
