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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
