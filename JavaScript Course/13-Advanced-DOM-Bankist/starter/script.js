'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(modal => modal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Selecting, creating and deleting elements

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Styles, attributes and classes

// Styles
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
message.style.backgroundColor = '#37383d'; // Gets added as inline style.
message.style.width = '120%'; // Write it exactly as you would do in CSS.

console.log(message.style.height); // Only works for the set ones.
console.log(message.style.backgroundColor);
console.log(message.style.color); // Even though it exists in the stylesheet, we didn't set it via code.

// To get those styles:
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // Works with only standard attributes

// Setting the values
logo.alt = 'Beautiful minimalist logo';

// console.log(logo.designer); // Non-standard
console.log(logo.getAttribute('designer'));

// Setting the attributes
logo.setAttribute('company', 'Bankist');

// Getting the attributes
console.log(logo.src); // Absolute path
console.log(logo.getAttribute('src')); // Relative path

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
const link2 = document.querySelector('.nav__link--btn');
console.log(link2.getAttribute('href'));

// Data attributes - attributes that start with data - are stored in the dataset object
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use - overrides all the existing classes
// logo.className = 'test'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementing smooth scrolling.
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1Coordinates = section1.getBoundingClientRect(); //
  console.log(s1Coordinates);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  // Viewport
  console.log(
    'Height/width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1Coordinates.left + window.scrollX,
  //   s1Coordinates.top + window.scrollY // scrollY = the height length that is scrolled from the top until the viewport
  // );

  // window.scrollTo({
  //   left: s1Coordinates.left + window.scrollX,
  //   top: s1Coordinates.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // Modern browsers way:
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Types of events and event handlers

// If you want to read more about: https://developer.mozilla.org/en-US/docs/Web/Events

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
  // h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1); // Mouseenter = kinda like the hover event in CSS
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Older way:
// h1.onmouseenter = function(e) {
//   alert('Event handler => Using onmouseenter.')
// }

// addEventListener is the better way for the fact that you can add multiple events to the same element
// you can also remove them, etc.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event propagation in practice.

// rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// addEventListener listens only for events in the bubbling phase
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target);
  },
  false // Setting the option to true activates the capturing phase
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event delegation: Implementing page navigation.

// Without event delegation: This way is wrong for the fact that it creates an event listener for each element
// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// With event delegation: Create an event listener for the parent and have children elements use it because of propagation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target); // Where the event actually occurred
  // Matching strategy - Hardest part to come with
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
