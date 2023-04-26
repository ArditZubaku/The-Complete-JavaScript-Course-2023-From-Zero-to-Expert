'use strict';

// JIT - just-in-time compilation
/* 
/////////////////////////////////////////////////////////////////////////
// Scoping in practice

// Global scope
function calcAge(birthYear) {
  // Function scope
  const age = 2023 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      //Function scoped
      var millenial = true;
      const firstName = `Steven`;

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      // Block scoped
      const str = `You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        // Functions are block scoped only in strict mode
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add();
  }

  printAge();

  return age;
}

//Global scope
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/
/* 
//////////////////////////////////////////////////////////////////////////////////
// Variable environment: Hoisting and the TDZ.

// Hoisting: Makes some types of variables accesible/usable in the code
// before they are actually declared.

// Function declarations => Hoisted, Initial value = Actual function
// Var variables => Hoisted, Initial value = undefined
// Let and const variables => Not hoisted
// Function expressions and arrow expressions => If declared with var => Hoisted

// Using variables before declaration:
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// Using functions before they are defined:
console.log(addFuncDeclaration(1, 2));
// console.log(addFuncExpression(1, 2));
// console.log(addArrowExpression(1, 2));

// Functions:
function addFuncDeclaration(a, b) {
  return a + b;
}

const addFuncExpression = function (a, b) {
  return a + b;
};

var addArrowExpression = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
*/
/* 
//////////////////////////////////////////////////////////////////////////////////
// The THIS keyword

// Takes the value of (points to) the "owner" of the function
// in which the this keyword is used.

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // Gets own this keyword even tho === undefined
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // Doesn't get own this keyword, inherits parent's
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Obj itself === the owner of the method
    console.log(2023 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2007,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/
/* 
//////////////////////////////////////////////////////////////////////////////////
// Regular functions vs Arrow functions

// var firstName = `Matilda`;

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this); // Obj itself === the owner of the method
    console.log(2023 - this.year);

    // Solution 1***
    // const self = this;
    // const isMillenial = function () {
    //   // console.log(this); // Since this is a regular function call it gets no this keyword
    //   // even tho it is inside an object
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2***
    // Since arrow functions dont get their this keyword but inherit it from the parent
    // in this case inheriting from the parent will mean inheriting from the obj itself
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    // console.log(this);
    console.log(`Hi ${this.firstName}`);
  },
  // greet: function () {
  //   console.log(this);
  //   console.log(`Hi ${this.firstName}`);
  // },
};

jonas.greet();
jonas.calcAge();

// Arguments keyword : only available in regular functions 

const addFuncExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addFuncExpression(2, 5);
addFuncExpression(2, 5, 8, 9, 10);

var addArrowExpression = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrowExpression(2, 3, 4, 5, 5, 6, 6, 7);

*/

//////////////////////////////////////////////////////////////////////////////////
// Primitives vs Reference types (Objects)

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   firstName: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend: ', friend);
// console.log('Me: ', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = `Davis`;

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], // An array is just an object in JS
};

// const or let changes have effect only in the stack, not the heap
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

// Copying the object => creating a new one
const jessicaCopy = Object.assign({}, jessica); // This method works only on the first level = shallow copy!=deep clone
jessicaCopy.lastName = 'Griffin';
jessicaCopy.family.push('Mary', 'John'); // Second level, doesnt get copied!

console.log(`Before marriage: `, jessica);
// console.log(`After marriage:`, marriedJessica);
console.log(`After marriage:`, jessicaCopy);

