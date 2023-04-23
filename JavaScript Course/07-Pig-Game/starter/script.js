'use strict';

// Selecting by id
const score0Element = document.querySelector('#score--0');
// Faster way
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active'); // removes if there, adds if not
};

// Rolling dice functionality
buttonRoll.addEventListener('click', () => {
  if (playing) {
    //1. Generate a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNumber}.png`;

    // 3. Check for rolled '1': if true,
    if (diceNumber !== 1) {
      // Add dice to the current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active plauer's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2.Check score ? >=100
    // If so, finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      console.log(playing);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .getElementById(`won--${activePlayer}`)
        .classList.remove('hidden');
      diceElement.classList.add('hidden');
    } else {
      // If not, switch to the next player
      switchPlayer();
    }
  }
});

const resetTheGame = () => {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  document.getElementById(`won--${activePlayer}`).classList.add('hidden');
  document.getElementById(`won--${activePlayer + 1}`).classList.add('hidden');
};

buttonNew.addEventListener('click', resetTheGame);
