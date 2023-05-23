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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

//////////////////////////////////////////////////////////////////////////////////////////////////
// Creating DOM elements.

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((element, index) => {
    const depositOrWithdrawal = element > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class='movements__row'>
      <div class='movements__type movements__type--${depositOrWithdrawal}'>${
      index + 1
    } ${depositOrWithdrawal}</div>
      <div class='movements__value'>${element}€</div>
    </div>
    `;

    // <!-- beforebegin -->
    // <p>
    //   <!-- afterbegin -->
    //   foo
    //   <!-- beforeend -->
    // </p>
    // <!-- afterend -->

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  const balance = account.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = movements => {
  const incomes = movements
    .filter(movement => movement > 0)
    .reduce((v1, v2) => v1 + v2, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(movement => movement < 0)
    .reduce((v1, v2) => v1 + v2, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(movement => movement < 0)
    .map(deposit => deposit * (1.2 / 100))
    .filter(interest => interest >= 1)
    .reduce((v1, v2) => v1 + v2, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = accounts => {
  accounts.forEach(
    account =>
      (account['username'] = account['owner']
        .toUpperCase()
        .split(' ')
        .map(element => element.charAt(0))
        .join(''))
  );
};

createUsernames(accounts);

const updateUI = function (account) {
  displayMovements(account.movements);
  // Display balance
  calcDisplayBalance(account);
  // Display summary
  calcDisplaySummary(account);
};

// Event handlers
let currentAccount;
btnLogin.addEventListener('click', event => {
  // Prevent form from submitting
  event.preventDefault();
  // console.log('LOGIN');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(
      ' '[0]
    )}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // Remove focus
    inputLoginPin.blur();

    // Display movements
    updateUI(currentAccount);
    // console.log('LOGIN');
  }
});

btnTransfer.addEventListener('click', event => {
  // Prevents reloading the form
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // console.log('Transfer valid.');

    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', ev => {
  ev.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some(movement => movement >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // Clear input fields
  inputLoanAmount.value = inputTransferTo.value = '';
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// The findIndex method.
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  // console.log('Delete');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = '0';
  }

  inputTransferAmount.value = inputTransferTo.value = '';
});

let sorted = false;

btnSort.addEventListener('click', event => {
  event.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #17.

/* 
Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 
*/
/* 
const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCopy = dogsJulia.slice();
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);
  // Fill with only wanted data:
  // const dogsJuliaCopy = dogsJulia.slice(1,3);
  console.log(dogsJuliaCopy);

  const dogs = dogsJuliaCopy.concat(dogsKate);
  console.log(dogs);

  dogs.forEach((element, index) => {
    if (element < 3) {
      console.log(`Dog number ${index + 1} is still a puppy.`);
    } else {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${element} years old.`
      );
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// Data transformations: map, filter, reduce

// Map creates a new array -> whatever function we ask it to do, it maps the new values to a new array

// Filter creates a new array -> with values that satisfy a certain given condition

// Reduce returns a value -> reduces all array elements down to one single value (e.g adding all elements together)

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Data transformations: The map method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

const newMovements = movements.map(element => Math.round(element * euroToUSD));

console.log(newMovements);
console.log(movements);

// Same thing using a for-of loop
// let newMovements2 = [];
const newMovements2 = [];
for (const element of movements) {
  newMovements2.push(Math.round(element * euroToUSD));
}
console.log(newMovements2);

// Like the forEach method, map has 3 parameters too
const movementsDescriptions = movements.map(
  (movement, index) =>
    `Movement ${index + 1}: You ${
      movement > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(movement)}.`
);

console.log(movementsDescriptions);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Computing usernames.

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

const createUsernames = accounts => {
  accounts.forEach(
    account =>
      (account['username'] = account['owner']
        .toUpperCase()
        .split(' ')
        .map(element => element.charAt(0))
        .join(''))
  );
};

const user = 'Steven Thomas Williams'; // Username = STW
// createUsernames(user);
createUsernames(accounts);
console.log(accounts);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// The filter method.

/* 
To determine if filter() returns a new array or not based on reading the documentation, you should look for language indicating whether the method is pure or impure.

A pure function is one that does not modify its arguments and always returns a new value. According to the documentation, the filter() method is a pure function. This means that filter() does not modify the original array, but instead creates a new array containing the elements that pass the test.
*/
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using for-of
const newArray = [];
for (const movement of movements) {
  if (movement > 0) {
    newArray.push(movement);
  }
}

// Using filter
const deposites = movements.filter(movement => movement > 0);
console.log(deposites);

const withdrawals = movements.filter(movement => movement < 0)
*/
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// The reduce method.

// We use the reduce method to boil down all the elements in an array to one single value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// Accumulator -> snowball
const balance = movements.reduce((accumulator, currentValue, index, array) => {
  console.log(`Iteration nr: ${index}: ${accumulator}`);
  return accumulator + currentValue;
}, 1000);

console.log(balance);

// Same thing, via for-of
let balance2 = 0;
for (const movement of movements) balance2 += movement;
console.log(balance2);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #18.

/* 
// Coding Challenge #2


Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 
*/
/* 
const calcAverageHumanAge = ages => {
  const humanAges = ages.map(e => {
    return e <= 2 ? e * 2 : 16 + e * 4;
  });

  // console.log(humanAges);

  const adults = humanAges.filter(e => e >= 18);

  const average = Math.round(
    adults.reduce((v1, v2) => v1 + v2, 0) / adults.length
  );

  return `Adults: ${adults}
  Average age: ${average}`;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// The magic of chaining methods.

// Consider method chaining as a pipeline.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositUSD = movements
  .filter(movement => movement > 0)
  // .map(movement => movement * 1.1)
  .map((movement, index, array) => {
    // console.log(array);
    return movement * 1.1;
  })
  .reduce((v1, v2) => v1 + v2, 0);

console.log(totalDepositUSD);

*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #19.

/*
Coding Challenge #3

Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK
*/
/*
const calcAverageHumanAge = ages =>
  ages
    .map(e => (e <= 2 ? e * 2 : 16 + e * 4))
    .filter(e => e >= 18)
    .reduce((v1, v2, i, array) => v1 + v2 / array.length, 0);
// Only the second value is divided, since that value after division is added to the accumulator
// which means that every value gets divided before being added to.

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//////////////////////////////////////////////////////////////////////////////////////////////////
// The find method.

// Like filter but returns one value (the first) that fits the condition not an entire array.

const firstWithDrawl = movements.find(movement => movement < 0);
console.log(firstWithDrawl);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Some and every methods.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Checks for equality
console.log(movements.includes(-130));

// Some = includes but with a condition and not just a value
console.log(movements.some(movement => movement === -130));

const anyDeposit = movements.some(movement => movement > 5000);
console.log(anyDeposit);

// Every = like Some, but returns true only if all the values meet the condition
console.log(movements.every(movement => movement > 0));
console.log(account4.movements.every(movement => movement > 0));

// Passing callbacks as separate functions
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Flat and flatmap methods.

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // Removes nested arrays (hence flattens the array)

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // Default: one level deep flattening
console.log(arrDeep.flat(2)); // Two levels deep

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance1 = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance1);

const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((v1, v2) => v1 + v2, 0);
console.log(overallBalance2);

// Flat x Map in one place = flatMap()

const overallBalance3 = accounts
  .flatMap(acc => acc.movements) // Goes only one level deep, if needed deeper use flat()
  .reduce((acc, mov) => acc + mov, 0);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Sorting arrays.

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // Mutates original array
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort()); // sort() sorts in a strings way => -1 comes before 1, etc

// return < 0 => A, B (keep order)
// return > 0 => B, A (switch order)

// ASC
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b); // if a>=b => a-b >= 0 => return 1, if a<b => a-b < 0 => return -1
console.log(movements);

// DESC
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// More ways of creating and filling arrays.

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5)); Doesn't work

// x.fill(1); // Mutates the array
x.fill(1, 3, 5); // Fill with 1s from 3 to 5
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.fill(100, 1, 9);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from(
  { length: arr.length },
  (_, index) => index + 1 // _ means we dont need that
);
console.log(z);

labelBalance.addEventListener('click', () => {
  // Converting NodeList to array
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ' '))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  movementsUI2.map(el => Number(el.textContent.replace('€', '')));
});
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// Summary: Which array method to use ? 

/* To mutate original array:
-Add to original: push() => end, unshift() => start
-Remove from original: pop() => end, shift() => start, splice() => anywhere
-Others: reverse(), sort(), fill()
*/

////////////////////////////////////////////////////////////////////////////

/* A new array: 
-Computed from original: map()
-Filtered using condition: filter()
-Portion of original: slice()
-Adding original to other: concat()
-Flattening the original: flat(), flatMap()
*/

////////////////////////////////////////////////////////////////////////////

/* An array index:
-Based on value: indexOf()
-Based on test condition(): findIndex()
*/

////////////////////////////////////////////////////////////////////////////

/* An array element:
-Based on test condition: find()
*/

////////////////////////////////////////////////////////////////////////////


/* Know if array includes:
-Based on value: includes()
-Based on test condition: some(), every()
*/

////////////////////////////////////////////////////////////////////////////


/* A new string:
-Based on separator string: join()
*/

////////////////////////////////////////////////////////////////////////////

/* To transform to value:
-Based on accumulator: reduce()
*/

////////////////////////////////////////////////////////////////////////////

/* To just loop array:
-Based on callback: forEach()
*/
