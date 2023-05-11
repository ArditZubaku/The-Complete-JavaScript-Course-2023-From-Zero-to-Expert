'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Simple array methods.

// Arrays are objects.

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// Extracting/slicing part of the array
console.log(arr.slice(2));
console.log(arr.slice(2, 3)); // last paramater doesnt get included
console.log(arr.slice(-2)); // starts from the end => last two elements
console.log(arr.slice(1, -2));

const arrayCopy = arr.slice();
console.log(arrayCopy);
const arrayCopy2 = [...arr];
console.log(arrayCopy2);

// SPLICE
// Works the same way as slice, but it actually mutates the array
console.log(arr.splice(2)); //Slices the part we want and removes it from the array
console.log(arr);

// Removing the last element of an array
arr.splice(-1);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // Mutates the original array
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // Doesn't mutate
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// The new "at" method.

const array = [1,2,3,4,5];
console.log(array[0]);
console.log(array.at(0));

// Traditional getting the last array element:
console.log(array[array.length-1]);
console.log(array.slice(-1)[0]); // Returns a new array from which we extract the element
//New "at" method
console.log(array.at(-1));

// With strings
console.log('Jonas'.at(0));
console.log('Jonas'.at(-1));
console.log('Jonas'.at(-'Jonas'.length));
*/
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Looping arrays: foreach.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}.`);
  } else {
    console.log(
      `Movement ${i + 1}: You withdrew ${Math.abs(movement)}.`
    );
  }
}

console.log('--- For each ---');

// Foreach provides the current element, current index and the entire array
// Calls the function to be executed on each element
movements.forEach(function (movement, index, array) { // This order of m,i,a args matters
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}.`);
  } else {
    console.log(
      `Movement ${index + 1}: You withdrew ${Math.abs(movement)}.`
    );
  }

  // Continue and break statements don't work inside a forEach loop
});

movements.forEach(element => {
  console.log(element);
});
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Foreach with maps and sets.

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((currentValue, key, entireMap) => {
  console.log(`${key}:  ${currentValue}`);
  l;
  // console.log(entireMap);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR', 'USD']);

currenciesUnique.forEach((currentValue, _, entireSet) => {
  // "_" - throwaway variable - variable completely unneccessary
  console.log(`${currentValue}:  ${currentValue}`);
});
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// Project: "Bankist" app

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Selected elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');