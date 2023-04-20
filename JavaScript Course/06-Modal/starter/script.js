'use strict';

//////////////////////////////////////////////////////////////////////////////////////////
// Project #2 - Modal

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');
const showButton = document.querySelectorAll('.show-modal'); // returns a NodeList

for (let i = 0; i < showButton.length; i++) {
  console.log(showButton[i].textContent);
}
