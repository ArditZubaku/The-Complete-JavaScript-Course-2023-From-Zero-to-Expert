'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  // Computing property names
  [weekDays[0]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[weekDays.length - 1]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`Test${1 + 1}`]: {},
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // Before ES6:
  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  // Before ES6:
  // orderFood: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // ES6 enhanced object literals (writing methods)
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Object destructuring as function argument
  // Order doesn't matter!!!
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '10:30',
    address = 'TestAddress',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicios pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Here is your delicios pizza with ${mainIngredient} and ${
        otherIngredients.length ? otherIngredients : 'nothing else'
      }.`
    );
  },
};
/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring arrays
const array = [2, 3, 4];
const a = array[0];
const b = array[1];
const c = array[2];

// Destructuring with destructuring assignment
const [x, y, z] = array;
console.log(x);
console.log(y);
console.log(z);
console.log(array); // Original array stays untouched

const [first, second] = restaurant.categories;
console.log(first, second);

// Accessing first and n-th
const [first1, , third] = restaurant.categories;
console.log(first1, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching values:
// Old way:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Destructuring way:
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Nested destructuring
console.log(restaurant.orderFood(2, 0));
// Receive 2 return values from a function
const [firstValue, secondValue] = restaurant.orderFood(2, 1);
console.log(firstValue, secondValue);

// What if nested array ?
const nested = [2, 3, [4, 6]];
const [number2, , array1] = nested;
console.log(number2, array1);
// Destructuring inside desctructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring objects

// For object destructuring we use {} bc this is how we create objs ???

// Order doesnt matter when dealing with objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Receiving the properties but renaming them:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(`Renamed variables: `, restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 50 };
// {a, b } = obj;
// FIX*** - When JS sees {} it alludes to a code block, and we can't assign anything to a code block
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c }, // Variables = red
} = openingHours;
// console.log(fri);
console.log(o, c);

const obj2 = {
  time: '22:30',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  mainIndex: 2,
  starterIndex: 2,
};

const obj3 = Object.assign({}, obj2);
delete obj3.time;
delete obj3.address;
// console.log(obj3);

restaurant.orderDelivery(obj2);
console.log();
restaurant.orderDelivery(obj3);
*/
/* 
////////////////////////////////////////////////////////////////////////////////////////////
// The spread operator {...}

// The spread operator in JavaScript is denoted by ... and is a powerful feature
// that allows an iterable such as an array, a string, or an object expression to be expanded
// or "spread" into a set of individual elements.
// Basically it unpacks all the array,etc elements at once
// When used with an array, the spread operator "spreads out"
// the elements of the array and returns them as separate values.

const array = [7, 8, 9];
const wrongWay = [1, 2, array[0], array[1], array[2]];
console.log(array);
console.log(wrongWay);

// Using the spread operator
const newArray = [1, 2, ...array];
// const newArray2 = [1, 2, array]; // Matrix
console.log(newArray);
// console.log(newArray2);

console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Spread operator does not create new values itself

// Shallow copy of an array
const mainMenuCopy = [...restaurant.mainMenu];

// Merge 2 arrays
const mergedArray = [...mainMenuCopy, ...restaurant.mainMenu];
console.log(mergedArray);

// Objects are not iterables
// Iterables: Arrays, Strings, Maps, Sets.
const test = 'Test';
console.log(...test);
const letters = [...test];
console.log(letters);
console.log(letters[2]);
// console.log(`Test: ${...test}`); // Won't work

const ingredients = [
  //   prompt(`Let's make pasta!
  // Ingredient 1? `),
  //   prompt(`Ingredient 2?`),
  //   prompt(`Ingredient 3?`),
  'cheese',
  'asparagus',
  'eggs',
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Since ES2018 spread operator works even on Objects even tho they are not iterables

// Objects
const obj = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj, d: 4, e: 5 };
console.log(obj);
console.log(obj2);

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: `Giuseppe`,
};

console.log(newRestaurant);
console.log(`--------------------------------------------------------`);

// Shallow object copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Changed';
restaurantCopy.categories[0] = 'Changed';
console.log(restaurantCopy.name);
console.log(restaurant.name);
console.log(restaurantCopy.categories[0]);
console.log(restaurant.categories[0]);

// const restaurantCopy2 = Object.assign({}, restaurant);
// console.log(restaurantCopy2);
// console.log(restaurant);
// restaurantCopy2.name = 'Changed';
// restaurantCopy2.categories[0] = 'Changed';
// console.log(restaurantCopy2);
// console.log(restaurant);
*/
/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Rest pattern and rest parameters.

// The rest pattern looks exactly like the spread operator {...} but actually does the opposite.

// 1) Destructuring with REST pattern

// SPREAD, because on the RIGHT side of = operator
const array = [1, 2, ...[3, 4, 5]];
// const test = [1, , ]
// console.log(test);

// REST = the rest of the elements, because on the LEFT side of = operator
// This one will pack all the left elements into 'c' array
// const [a, b, ...c, ...test] = [1, 2, 3, 4, 5];
//A rest element must be last in a destructuring pattern
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(c);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza);
console.log(risotto);
console.log(otherFood);

// Objects
const { sat: weekend, ...weekDays } = restaurant.openingHours;
console.log(weekend);
console.log(weekDays);

// 2) Functions
// REST parameters - no matter how many we pass, REST will pack them into a single array

// GATHER/COLLECT
const add = function (...args) {
  // console.log(args);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7, 8, 9);

const spread = [23, 5, 7];
// SPREAD
add(...spread);

restaurant.orderPizza('mushrooms', 'onions', `olives`, `spinach`);
restaurant.orderPizza('oneArgument');

// if([]){
//   console.log('Test');
// }

// USE SPREAD OPERATOR where you would otherwise write values separated by a comma
// USE REST PATTERB where you would otherwise write variable names separated by a comma
*/

/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Short circuiting (&& and ||)

// Logical operators: Can use ANY data type, return ANY data type, do short-circuiting

console.log(`-------------------OR-------------------`);
console.log(3 || 'Jonas'); // If the first value is a TRUTHY value, return that.
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// It will log the first TRUTHY value it finds (short-circuiting) if that exists. Otherwise...
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
console.log(undefined || 0 || '' || 23 || 'Hello' || null);
console.log(0 || undefined || null); // The last FALSY value

restaurant.numGuests = 30;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Short-circuiting way:
restaurant.numGuests2 = 50;
const guests2 = restaurant.numGuests2 || 10;
console.log(guests2);

console.log(`-------------------AND-------------------`);
// Works exactly the opposite way of short-circuiting with OR
// For the AND evaluation to be true, all the operands have to be true,
// so when it finds a false value it short-circuits without evaluating the other values
// since it knows that the expression will be false in the end.
console.log(0 && 'Jonas'); // Short-circuits when the first value is FALSY.
console.log('Jonas' && 10);
console.log(true && 0);
console.log(undefined && null);
console.log(`Hello` && 23 && null && undefined && `Jonas`);
console.log(true && `True` && 10); // The last TRUTHY value

// Example
// Checking if it exists
if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

*/

/* 
////////////////////////////////////////////////////////////////////////////////////////////
// The nullish coalescing operator (??).

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests || 10; // It will assign 10 even tho 0 is the number we want
console.log(guests1);

// Solution with "??"
// Works almostthe same as || operator, but instead of FALSY values it evaluates NULLISH values
// NULLISH values: null and undefined (doesn't include 0 or empty string)
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////
// Logical assignment operators.

const restaurant1 = {
  name: `Capri`,
  // numGuests: 20,
  numGuests: 0,
  // here owner is undefined
};

const restaurant2 = {
  name: `La Piazza`,
  owner: `Giovanni Rossi`,
  // here numGuests is undefined
};

// Adding the numGuests property to the objects that do not have it
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// Via OR assignment operator - assigns a value to a variable if that variable is currently falsy
// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

// FIX*** Via The Logical Nullish Assignment operator
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// AND assignment operator
// restaurant2.owner = restaurant2.owner && `<ANONYMOUS>`;
// restaurant1.owner = restaurant1.owner && `<ANONYMOUS>`;
restaurant1.owner &&= `<ANONYMOUS>`; // assigns a value to the variable only if it currently truthy
restaurant2.owner &&= `<ANONYMOUS>`;

console.log(restaurant1);
console.log(restaurant2);
*/

////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #11.

/* 
We're building a football betting app (soccer for my American friends)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnabry',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// console.log('---1---');
// // const player1 = [...game.players[0]];
// // const player2 = [...game.players[1]];
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2.
// console.log('---2---');
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3.
// console.log('---3---');
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// console.log('---4---');
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// console.log('---5---');
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// // 6.
// console.log('---6---');
// const printGoals = (...playerNames) => {
//   console.log(...playerNames, `scored ${playerNames.length} goals.`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// console.log('---7---');
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');
// // team2 < team1 || console.log('Team 1 is more likely to win');

/* 
////////////////////////////////////////////////////////////////////////////////////////////
// The FOR-OF loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

console.log();

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [position, element] of menu.entries())
  console.log(`${position}: ${element}`);

console.log();

console.log([...menu.entries()]);

 */

////////////////////////////////////////////////////////////////////////////////////////////
// Enhanced object literals
