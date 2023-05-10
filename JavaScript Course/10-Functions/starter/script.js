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

/* 
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

console.log(addVAT3()(100));

// Jonas' solution
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT4 = addTaxRate(0.23);
console.log(addVAT4(100));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #15.

/* 
Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
    1.1.
    Display a prompt window for the user to input the number of the
    selected option. The prompt should look like this:
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)
        1.2.
        Based on the input number, update the 'answers' array property. For
        example, if the option is 3, increase the value at position 3 of the array by 1. 
        Make sure to check if the input is a number and if the number makes
        sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
*Data 1: [5, 2, 3]
*Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 
GOOD LUCK 
*/
/* 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const favLang = Number(
      prompt(`${this.question}\n${this.options.join(
        '\n'
      )}\n(Write option number)
  
    `)
    );

    // if (typeof favLang === 'number' && favLang >= 0 && favLang <= 3) {
    //   this.answers[favLang]++;
    // }

    typeof favLang === 'number' &&
      favLang < this.answers.length &&
      this.answers[favLang]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); // when working with eventHandlers or even higher tier functions, always use the bind method

// *Data 1: [5, 2, 3]
// *Data 2: [1, 5, 3, 9, 6, 1]

const data_1 = {
  answers: [5, 2, 3], // the object shall contain this property since the method calls this property
};

// poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call(data_1, 'string');
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Immediately invoked function expressions (IIFE).

/* 
Yes, Immediately Invoked Function Expressions (IIFE) can be considered anonymous functions in JavaScript because they do not have a name and are executed immediately after they are defined. They are often used to create a private scope for variables and functions to avoid polluting the global namespace.
*/
/* 
const runOnce = function () {
  console.log('This will never run again ?');
};

runOnce();
runOnce();

// IIFE
(function () {
  // Provides private scope
  const isPrivate = 23;
  console.log('This will only run once !');
})(); // the function getting called via ()

// console.log(isPrivate);

// IIFE - arrow functions
(() => {
  console.log(`This will also run only once !`);
})();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Closures.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place

console.dir(booker);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// More closure examples.

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    // Inherits the variables of the parent environment in which it was created
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  // const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1_000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

// Closure has priority over the scope chain
const perGroup = 1999;

boardPassengers(180, 3); 

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #16.

/* 
This is more of a thinking challenge than a coding challeng e

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // Has the variable in the backpack
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
