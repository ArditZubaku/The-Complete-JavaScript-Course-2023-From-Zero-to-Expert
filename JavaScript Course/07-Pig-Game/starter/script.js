'use strict';

// Selecting by id
const score0Element = document.querySelector('#score--0');
// Faster way
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('dice');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
let currentScore = 0;

// Rolling dice functionality
buttonRoll.addEventListener('click', () => {
  //1. Generate a random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceNumber}.png`;

  // 3. Check for rolled '1': if true,
  if (diceNumber !== 1) {
    // Add dice to the current score
    currentScore += diceNumber;
    current0Element.textContent = currentScore; // CHANGE LATER
  } else {
    // switch to the next player
  }
});
