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

//////////////////////////////////////////////////////////////////////////////////
