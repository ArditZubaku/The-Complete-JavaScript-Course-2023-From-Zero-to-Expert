'use strict';
/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Constructor functions and the "new" operator.

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

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Prototypes.

// Each and every function in JS has a property called 'prototype'.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2007);
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// Now, all the objects created by the "Person" constructor will get access to the methods of the prototype property.

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
// So, by this we can conclude that jonas is not prototype of Person, Person is prototype of jonas.

// Setting properties on the prototype:
Person.prototype.species = 'Humans'; // Not own property of the object
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
