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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);
  // document.querySelector('.message').textContent = 'Correct number!';

  if (!guess) {
    document.querySelector('.message').textContent = 'Insert a number please 😊';
  }
});
