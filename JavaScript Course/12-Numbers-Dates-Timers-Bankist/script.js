'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // Day/Month/Year
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    // currency: 'EUR',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class = "movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// Implementing a countdown timer.
const startLogoutTimer = function () {
  const tick = () => {
    const min = Math.trunc(time / 60)
      .toString()
      .padStart(2, '0');
    const sec = time % 60;

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    // When 0, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = '0';
    }
    // Decrease every 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;
  // Call timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = '100';

//////////////////////////////////////////////////////////////////////////////////////////////////
// Internationalizing dates (INTL).

// Experimenting with the API
// const now = new Date();
// // labelDate.textContent = new Intl.DateTimeFormat('sq-AL').format(now);
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   // month: "2-digit",
//   year: 'numeric',
//   // weekday: 'numeric',
// };

// // Getting the locale from the user's browser
// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100';

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // Adding dates to bankist app.

    const now = new Date();
    // labelDate.textContent = new Intl.DateTimeFormat('sq-AL').format(now);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      // month: "2-digit",
      year: 'numeric',
      // weekday: 'numeric',
    };

    // Getting the locale from the user's browser
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Day/Month/Year
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${
    //   day % 10 === 0 ? day.toString().padStart(2, 0) : day
    // }/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); // Rounding loans

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 3500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = '0';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Converting and checking numbers.

// In JS all numbers are floating point numbers
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23'); // Type coercion

// Parsing
console.log(Number.parseInt('30px', 10)); // Every function is also an object ??????
console.log('Should start with a number ', Number.parseInt('e23', 10));
console.log(Number.parseFloat('2.5rem'));
console.log(Number, parseInt('      2.5rem'));
console.log(parseFloat('10.4px')); // Since they are global functions, it works like this too

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Best way for checking if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// Check if it is Integer
console.log(Number.isInteger(20.3));
console.log(Number.isInteger(20));
console.log(Number.isInteger(23 / 0));
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Math and rounding.

console.log(Math.sqrt(9));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 6, 7, 8, 9, 0));
console.log(Math.min('1', '2', 3, 4, 5, 10)); // Type coercion - YES, Type conversion - NO

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1); // Removes the decimal part

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; // Fixed for negative nums
// 0...1 => 0...(max-min) => min...(max-min+min) => min...max
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.4));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// With negative numbers
console.log(Math.trunc(-23.3));
console.log(Math.trunc(-23.4));

// Rounding decimals
console.log((2.7).toFixed(0)); // toFixed adds values after the integer part, and returns a string
console.log((2.4).toFixed(5));
console.log((2.4131312313).toFixed(5));
console.log(+(2.1).toFixed(5)); // Number
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// The remainder operator.

console.log(5 % 2);
console.log(8 % 3);
console.log(8 / 3);

const isEven = n => n % 2 === 0;
console.log(isEven(9));
console.log(isEven(8));
console.log(isEven(100));
console.log(isEven(101));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }

    if (i % 3 === 0) {
      row.style.backgroundColor = 'blue';
    }
  });
});
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Numeric separators.

const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI_1 = 3.14_15;
// const PI_2 = 3._14_15; // Only in between numbers allowed

console.log(Number('230000'));
console.log(Number('230_000')); // Doesn't work with strings
console.log(parseInt('230_000')); // Takes only the first "number part" it finds 
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Working with BigInt.

// BigInt is a 64-bit integer.
// BigInt is immutable.

console.log(2 ** 53 - 1); // Biggest number JS can represent safely
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);

console.log(132132123414312313131321312313132131n); // "n" at the end makes it a bigint
console.log(BigInt(132132123414312313131321312313132131n));

// Operations
console.log(1000n + 100000n);
console.log(12313211322131231n * 121213213213121313132n);

const huge = 2131312211231232121131n;
const reg_num = 1231231313213;
// console.log('Cant mix them', huge * reg_num);
console.log('Can mix them', huge * BigInt(reg_num));

// console.log(Math.sqrt(16n)); // Doesn't work

// Works for comparisons:
console.log(20n > 15);
console.log(20n === 20); // Different data types
console.log(typeof 20n);
console.log(20n == 20); // Loose one works => compares only values
console.log(20n == '20'); // Type coercion

// String concatenation:
console.log(huge + 'is REALLY BIG');

// Divisions
console.log('Returns closest bigint: ', 10n / 3n);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Creating dates.

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2023 19:05:44'));
console.log(new Date('October 24, 2002'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 23, 49, 15, 10));
console.log(new Date(2037, 10, 40, 72, 49, 15, 10)); //  Autocorrects date

console.log(new Date(0)); // Beginning of Unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days after that

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // 0  based => 10 === 11th month
console.log(future.getDate()); // Returns the day of the months
console.log(future.getDay()); // Returns the day of the week => 0 = Sunday...
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // Timestamp === the milliseconds that have passed since 1.1.1970
console.log(new Date(2142253380000));
console.log(Date.now()); // Current timestamp

future.setFullYear(2040);
console.log(future);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////
// Operations with dates.

const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(
  new Date(2037, 3, 14),
  new Date(2037, 3, 24, 10, 8)
);
console.log(days1);

*/

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
// Internationalizing numbers (INTL).

const num = 39823256.45;

const options = {
  // style: 'unit',
  // unit: 'mile-per-hour',
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// Timers: setTimeout and setInterval.

// setTimeout timer runs just once after a defined time
// setInterval timer keeps running basically forever, until we stop it

// Set timeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (arg1, arg2) => console.log(`Here is your pizza with ${arg1} and ${arg2}.`),
  3000,
  ...ingredients
);
console.log('Waiting...');

// Cancel timeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// Set interval
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);

// Real clock:
setInterval(() => {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  console.log(`The time is: ${hour}:${min}:${sec}`);
}, 1000);

