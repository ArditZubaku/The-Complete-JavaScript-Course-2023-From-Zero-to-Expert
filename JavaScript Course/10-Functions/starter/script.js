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
/* 
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
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The bind method

// This method returns a new function, doesn't immediately call the function

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

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

// book.call(eurowings, 123, 'Test');

// Using the bind method:
const bookEurowings = book.bind(eurowings); // Return a new function in which "this" will always point to the passed object
const bookLufthansa = book.bind(lufthansa);
const bookSwiss = book.bind(swiss);

bookEurowings(123, 'Steven Williams');
console.log(eurowings);

// Can pass multiple args which then will be used as pre-defined

const bookEurowings23 = book.bind(eurowings, 23);
bookEurowings23(123, 'Martha Williams'); // The second argument wasnt taken at all cus now it takes only one argument since we pre-set the first one
bookEurowings23('John Williams');
console.log(eurowings);

// With Event listeners
lufthansa.planes = 300;
lufthansa['buyPlane'] = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

console.log(lufthansa);

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// In this case the this keyword is the button itself, since we know that the this keyword belongs to the 'element' that calls the function.
// We use the bind method to fix this problem, bc this method returns a new function, and we need to pass a function, not call it.

// Partial application - pre-setting parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // We set the this keyword to null since its use is not in our interest in this case
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));

const addVAT2 = (value, rate = 0.23) => value + value * rate;
console.log(addVAT2(100));

// Challenge - achieve the same thing as we did with the bind method but now using callbacks

const addVAT3 =
  (rate = 0.23) =>
  value =>
    value + value * rate;

console.log(addVAT3(/* 0.24 */)(100));

// Jonas' solution
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT4 = addTaxRate(0.23);
console.log(addVAT4(100));
