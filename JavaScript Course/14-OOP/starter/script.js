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

/*
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
// So, by this we can conclude that jonas is not prototype of Person, Person is prototype of jonas.???

// Setting properties on the prototype:
Person.prototype.species = 'Humans'; // Not own property of the object
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Prototypal inheritance on built-in objects.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(jonas.__proto__.__proto__.__proto__);
// console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8]; // new Array() same as []
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.constructor.prototype === arr.__proto__);

Array.prototype.newMethodUnique = function () {
  return [...new Set(this)];
};

console.log(arr.newMethodUnique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

console.log(x => x + 1);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #21.

// Coding Challenge #1
/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed + ' km/h');
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed + ' km/h');
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw.speed);
bmw.accelerate();
bmw.brake();

console.log(mercedes.speed);
mercedes.accelerate();
mercedes.brake();
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6 classes.

// Class expression
const PersonClass1 = class {
  // Classes are just special types of functions...
};

// Class declaration
class PersonClass2 {
  // Has to be called "constructor"
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // All the methods will be on the prototype not the object itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName} + test`);
  }
}
const jessica = new PersonClass2('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonClass2.prototype);
jessica.greet();

// Can still add methods to the prototype
PersonClass2.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. Classes are not hoisted (even with function declarations)
// 2. Classes are first-class citizens (can into functions and return them from functions)
// 3. Classes are executed in strict mode