'use strict';
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Default parameters
const bookings = [];

// ES6 way
const createBooking = function (
  flightNum,
  numPassengers = 1,
  //   price = 1.99 * 1.2
  price = 1.99 * numPassengers
) {
  // Before ES6:
  //   numPassengers = numPassengers || 1;
  //   price = price = 1.99;

  const booking = {
    flightNum, // creates a value with this name and assigns its value
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
// Defaults get overridden
createBooking('LH1123', 2, 800);
createBooking('LH1123', 5);
// createBooking('LH1123', , 1000); // can not skip parameters
createBooking('LH123', undefined, 1000); // this is the equivalence of skipping the parameter because setting it to undefined is the same as not setting it at all
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pass by values vs Pass by reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas',
  passport: 12312325414,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 12312325414) {
    // alert('Check in!');
    console.log('Check in!');
  } else {
    // alert('Wrong passport!');
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
console.log('--------------------------------------------');

const newPassport = person => {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas)
console.log(flight);
console.log(jonas);

// Jonas is saying that JS is only pass-by-value even tho it may look like it has pass-by-reference too
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// First-class and higher-order functions

// Functions are objects ?

// First-class functions = means that functions are values
// Higher-order function = a function that receives another function as an argument (callback)
//                     = a function that returns a new function
//                     = does both

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

console.log(greet('Test'));

const greeterHey = greet('Hey'); // returns the function(name){}

greeterHey('Jonas');
greeterHey('Steve');

// greet('Hello') returns a function therefore it is a function so what we basically are doing is:
// someFunction('Jonas')
greet('Hello')('Jonas');

// Rewriting the greet function with only arrow functions
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

console.log(greet2('Test 2'));
greet2('Hello')('Jonas 2');
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(101, 'Person 1');
lufthansa.book(239, 'Person 2');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// CALL METHOD
// book(23, 'Test'); // Does not work
book.call(eurowings, 23, 'Test'); // The object to which "this" should point to and the other args
console.log(eurowings);

book.call(lufthansa, 129, 'Person 3');
console.log(lufthansa);

const swiss = {
  // Property names shall have the same exact format as the ones in the object which we call the method
  airline: 'Swiss Airline',
  iataCode: 'CH',
  bookings: [],
};

book.call(swiss, 343, 'Swiss 1');
console.log(swiss);

// APPLY METHOD - not used that much anymore
const arrayOfData = [583, 'Test value'];
book.apply(swiss, arrayOfData);
console.log(swiss);

// Doing APPLY method way with CALL method
book.call(swiss, ...arrayOfData);
console.log(swiss);
