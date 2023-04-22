'use strict';

//////////////////////////////////////////////////////////////////////////////////////////
// Project #2 - Modal

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const showModalButton = document.querySelectorAll('.show-modal'); // returns a NodeList

const openModal = () => {
  console.log('Button clicked');
  modal.classList.remove('hidden'); // we can pass multiple args seperated by commas
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModalButton.length; i++) {
  // console.log(showModalButton[i].textContent);
  showModalButton[i].addEventListener('click', openModal); // we only declare it, so the click calls it
}

closeModalButton.addEventListener('click', closeModal); // method is not called using () bc then JS would execute the method whenever reached the line, and not based on the click invocation
overlay.addEventListener('click', closeModal);

// Global event like keyboard events
document.addEventListener('keydown', (event) => {
  console.log('A key was pressed');
  console.log(event); //KeyboardEvent object
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
