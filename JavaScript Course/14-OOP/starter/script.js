'use strict';

// Convention: constructor functions start with uppercase letter.
// Only function declarations and function expressions are allowed, arrow functions are not bc of this keyword.
const Person = function (firstName, birthYear) {
  // console.log(this)
  // Creating instance properties and setting the values
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// We call the constructor function using the "new" operator.
const person = new Person('Person1', 1991);
console.log(person);

// Behind the scenes:
// 1. New {} object is created
// 2. Function is called, this = {} ('this' will point to)
// 3. {} linked to prototype
// 4. Function automatically returns {}

const matilda = new Person('Matilda', 2017);

const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const test = 'Test';

console.log(matilda instanceof Person);
console.log(test instanceof Person);
