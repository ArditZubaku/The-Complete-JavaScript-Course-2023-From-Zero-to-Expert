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
