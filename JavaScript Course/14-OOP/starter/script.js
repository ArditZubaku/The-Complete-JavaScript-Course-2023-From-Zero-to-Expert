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

/*
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
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getters and setters.

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  // Getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Every setter needs to have at least one parameter
  set latest(movement) {
    this.movements.push(movement);
  },
};

// When we call it, we call it as if it was a property, we don't invoke the method
console.log(account.latest);

// When we use setter, we actually set it like we would set any other property
account.latest = 50;
console.log(account.movements);

// Has to be called "constructor"
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // All the methods will be on the prototype not the object itself
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName} + test`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // When setting a property that already exists
  /!*
  In JavaScript, when you define a setter method with the same name as a property,
  the setter method is called instead of the constructor when you try to create a new object.
  *!/
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else throw Error('Invalid full name');
  }

  get fullName() {
    return this._fullName;
  }
}

// const walter = new PersonClass('Walter', 1965);
const walter2 = new PersonClass('Walter White', 1965);
console.log(walter2);

const jessica = new PersonClass('Jessica Davis', 1996);
console.log(jessica.age);
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Static methods.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Adding a static method
Person.hey = function () {
  console.log(this);
  console.log(`Hey there`);
};
// We just do not add it into the prototype, we add it only to the constructor
Person.hey();

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // These methods will be added to .prototype property => Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName} + test`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else throw Error('Invalid full name');
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey there`);
    console.log(this);
  }
}

PersonClass.hey();
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Object.create

// No prototype properties
// No constructor functions
// No new operator

// Manually setting the prototype object to all the Person objects
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // Has nothing to do with constructor
  // Manually initializing object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #22.

// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, 
by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// Coding Challenge #1 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.speed} km/h`);
//   }
//
//   get speedUS() {
//     console.log(`${this.speed / 1.6} mi/h`);
//   }
//
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//     console.log(`${this.speed} km/h`);
//   }
// }
//
// const ford = new Car('Ford', 120);
// ford.accelerate();
// console.log(ford.speed);
// ford.speedUS = 200;
// console.log(ford.speed);
// ford.speedUS;
// ford.brake();
// console.log(ford.speed);
// ford.speedUS;

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance between "classes": constructor functions.

// Implementing inheritance using constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Same parameters as the parent + more
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // In a regular function call the "this" keyword is set to undefined
  // Person(firstName, birthYear);
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
// Has to be positioned here, before we start adding methods to the prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #23.

// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
Notice what happens when you 'accelerate'! HINT: Review the definition of polymorphism.

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
//
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed + ' km/h');
// };
//
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed + ' km/h');
// };
//
// const EV = function (make, speed, battery) {
//   Car.call(this, make, speed);
//   this.battery = battery;
// };
//
// // Linking prototypes in order to be able it to inherit.
// EV.prototype = Object.create(Car.prototype);
//
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.battery = chargeTo;
// };
//
// // It overrides it because it finds it earlier in the prototype chain.
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.battery--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.battery}%. `
//   );
// };
//
// const tesla = new EV('Tesla', 120, 23);
//
// tesla.chargeBattery(90);
// tesla.brake();
// tesla.accelerate();

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance between "classes": ES6 classes.

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // These methods will be added to .prototype property => Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName} + test`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else throw Error('Invalid full name');
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey there`);
    console.log(this);
  }
}

class Student2 extends Person {}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  // Overriding the method:
  calcAge() {
    // super.calcAge();
    console.log(
      `${this.fullName} is born in ${this.birthYear} and studies ${this.course}.`
    );
  }
}

const martha = new Student('Martha Jones', 2012, 'Engineering');
const martha2 = new Student2('Martha Jones', 2012);

console.log(martha);
console.log(martha2);

martha.introduce();

martha2.calcAge();

martha.calcAge();
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance between "classes": Object.Create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study at ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();
