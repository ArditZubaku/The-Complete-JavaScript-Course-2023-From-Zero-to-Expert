'use strict';

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


