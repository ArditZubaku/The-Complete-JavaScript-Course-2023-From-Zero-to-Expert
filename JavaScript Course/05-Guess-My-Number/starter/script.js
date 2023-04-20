'use strict';

//////////////////////////////////////////////////////////////////////////////////////////
// Project #1 - Guess my number!

/* 
//////////////////////////////////////////////////////////////////////////////////////////
// Selecting an element - accessing it by html class name
console.log(displayMessage);
displayMessage = 'Correct number!';
console.log(displayMessage);

displaySecretNumber(13;
displayScore(20) ;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

//////////////////////////////////////////////////////////////////////////////////////////
// Handling click events

let secretNumber = Math.trunc(Math.random() * 20) + 1; // We add +1 to compensate the removal
// of the decimal part that trunc() does
let score = 20;
let highscore = 0;

displaySecretNumber('?');
document.querySelector('.guess').focus();

//////////////////////////////////////////////////////////////////////////////////////////
// Refactoring the code: the DRY principle

const displayMessage = (message) => (document.querySelector('.message').textContent = message);
const displayScore = (score) => (document.querySelector('.message').textContent = score);
const displaySecretNumber = (number) => (document.querySelector('.number').textContent = number);
const changeBackground = (backgroundColor) => (document.querySelector('body').style.backgroundColor = backgroundColor);
const changeWidth = (width) => (document.querySelector('.number').style.width = width);

document.querySelector('.check').addEventListener('click', function () {
  //////////////////////////////////////////////////////////////////////////////////////////
  // Implementing the game logic
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage = 'Insert a number please 😊';
  }
  // When a player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    //////////////////////////////////////////////////////////////////////////////////////////
    // Manipulating CSS styles

    // We need to specify strings when manipulating with CSS styles
    changeBackground('#60b347');
    displaySecretNumber(secretNumber);
    changeWidth('30rem');

    //////////////////////////////////////////////////////////////////////////////////////////
    // Implementing highscores

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      displayScore(score);
    } else {
      displayMessage('You lost the game. Try again!');
      displayScore(0);
    }
  }
});

//////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #10
/* 
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeBackground('#222');
  changeWidth('15rem');
  displaySecretNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  displayScore(score);
  document.querySelector('.guess').focus();
});
