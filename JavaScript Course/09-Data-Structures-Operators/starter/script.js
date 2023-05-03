'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

////////////////////////////////////////////////////////////////////////////////////////////
// Enhanced object literals

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
  // [`Test${1 + 1}`]: {},
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

/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Optional chaining (.?)

console.log(restaurant.openingHours);

if (restaurant.openingHours.Mon) {
  console.log(restaurant.openingHours.Mon.open);
}

if (restaurant.openingHours.Fri) {
  console.log(restaurant.openingHours.Fri.open);
}

// Without Optional chaining:
// console.log(restaurant.openingHours.mon.open);
// it shows TypeError cus it is trying to do undefined.open which is impossible

// With optional chaining if a property doesn't exist undefined is returned immediately
// and it wont further try anything like the above mentioned undefined.open
console.log(restaurant.openingHours.mon?.open);

console.log(restaurant?.openingHours?.Mon?.close?.toString()?.charAt(0));

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  // const open = restaurant.openingHours[day]?.open || `closed`;
  // Nullish coalescing operator is used because of the problems with values like zero
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}.`);
}

// Using Optional chaining to check if a method exists:
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderFood?.(0, 2) ?? `Method does not exist`);

// Using Optional chaining to check if an array is empty:
const array = [{ name: `Jonas`, email: `test@gmail.com` }];
console.log(array[0]?.name ?? `Array is empty`);

 */
/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Looping objects: object keys, values and entries.

// Property names:
const properties = Object.keys(openingHours);
console.log(properties);

let openString = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  // console.log(day);
  openString += `${day}, `;
}

openString = openString.slice(0, -1).concat('.');

console.log(openString);

// Property values:
const values = Object.values(openingHours);
console.log(values);

// Entries = names+values together
const entries = Object.entries(openingHours);
console.log(entries);

// Looping over the object
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

*/

////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #12.

/* 
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 
*/
/* 
const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [goalNumber, player] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${player}`);
}

// 2.
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}
console.log((average / odds.length).toFixed(1));

// 3.
const printOdd = (team, odd) => {
  if (team === 'x') {
    console.log(`Odd of draw: ${odd}`);
    return;
  }
  console.log(`Odd of victory ${team}: ${odd}`);
};
printOdd(game.team1, game.odds.team1);
printOdd(
  Object.keys(game.odds).find(key => key === 'x'),
  game.odds.x
);
printOdd(game.team2, game.odds.team2);

console.log('\nJonas solution:');
for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${str}: ${odd}`);
}

// 4. Bonus
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
*/
/* 
scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
}```

In this first line, we define an object called `game` using the `const` keyword. 
The object has one property called `scored`, which is an array of strings representing the names of the players who scored in a game.

```const scorers = {};```

Here, we define another object called `scorers`, which will hold the count of how many goals each player scored in the game. 
We initialize the object as an empty object using the curly braces `{}` notation.

```for (const player of game.scored) {```

This is a `for...of` loop that iterates over each element of the `game.scored` array. 
We use the `const` keyword to define a variable `player` that will hold the current element being iterated over.

```scorers[player] ? scorers[player]++ : (scorers[player] = 1);```

This line of code is a ternary operator, which is a shorthand way of writing an if/else statement. 
Here's what it means:

- If `scorers[player]` is truthy (e.g. not undefined, null, 0, false, or an empty string), then increment it by 1 using the `++` operator.
- Otherwise, set `scorers[player]` to 1 using the assignment operator `=`.

So in other words, this line of code checks if the player's name already exists as a property in the `scorers` object. 
If it does, it increments the value associated with that property by 1 to represent that the player has scored another goal. 
If the player's name doesn't exist as a property in the `scorers` object, it creates a new property with the player's name 
and sets its value to 1 to represent that the player has scored their first goal.

*/

////////////////////////////////////////////////////////////////////////////////////////////
// Sets

/* 
One of the main features of a Set is that it only contains unique values. If you try to add a value that already exists in the Set, it will not be added again. This makes Sets useful for tasks like removing duplicates from an array or tracking unique values in a dataset. 
*/
/* 
// Set can hold mixed data types.
// Accepts iterables

const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Pizza', 'Pasta']);

console.log(ordersSet);

// Since Strings are iterables:
console.log(new Set('String'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('new value');
console.log(ordersSet);

ordersSet.delete('new value');
console.log(ordersSet);

// You can not retrieve values out of a set
console.log(ordersSet[0]);

// ordersSet.clear();
// console.log(ordersSet);

// Looping
for (const order of ordersSet) {
  console.log(order);
}

// Use case example:

let staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];

const positions = new Set(staff);
console.log(positions);
// Converting back to an array
staff = [...positions];
console.log(staff);

// OR, easier way:
const positions2 = [...new Set(staff)];
console.log(positions2);

const numberOfPositions = new Set(staff).size;
console.log(numberOfPositions);

console.log(`Different letters in a string: ${new Set('Mississippi').size}`);

*/

/*
////////////////////////////////////////////////////////////////////////////////////////////
// Maps: Fundamentals.

// A map is a data structure used to map values to keys. The difference between obj and maps
// is that in maps keys can have any type in difference from objs where keys are always strings.

const restaurantMap = new Map(); // first create empty map
restaurantMap.set('key', 'value');
restaurantMap.set('name', 'Classico Italiano');
restaurantMap.set(1, 'Firenze, Italy');
console.log(restaurantMap.set(2, 'Milano, Italy')); // sets and returns the map also

// Since it returns the updated map itself we can chain it

restaurantMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, `We are open :D`)
  .set(false, `We are closed :(`);
console.log(restaurantMap);

// Reading data from the map
console.log(restaurantMap.get('categories'));
console.log(restaurantMap.get(true));
console.log(restaurantMap.get('true'));

const time = 21;
console.log(
  restaurantMap.get(
    time > restaurantMap.get('open') && time < restaurantMap.get('close')
  )
);

console.log(restaurantMap.has('categories'));
restaurantMap.delete('categories');
console.log(restaurantMap);
console.log(restaurantMap.size);
// restaurantMap.clear();
console.log(restaurantMap);

restaurantMap.set([1, 2, 3], 'Test');
console.log(restaurantMap);
// This won't work since the two arrays dont represent the same thing in memory
console.log(restaurantMap.get([1, 2, 3]));

// Fix:
const array = [1, 2];
restaurantMap.set(array, 'Test2');
console.log(restaurantMap.get(array));

// Storing different data types
restaurantMap.set(document.querySelector('h1'), 'Heading');
*/

/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Maps: Iteration.

// Different way of populating new maps, array of arrays
const question = new Map([
  // Key value pairs array
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C#'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 2],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

// Converting object to map
const hoursMap = new Map(Object.entries(openingHours)); // Since .entries() returns array of arrays
console.log(hoursMap);
// Convert a map to object ? Not quite recommended since maps can have non-String values

// Quiz app
console.log(question.get('question'));

// Iteration
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// Taking the answer from the user
// const answer = Number(prompt('Your answer: '));
const answer = 2;
console.log(answer);

// Printing true or false strings
// if (answer === question.get('Correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

answer === question.get('Correct')
  ? console.log(question.get(true))
  : console.log(question.get(false));

console.log(question.get(question.get('Correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

*/

////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #13

/* 
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:

[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK 
*/
/* 
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const average = [...gameEvents.keys()].pop() / gameEvents.size;
console.log(`An event happened, on average, every ${average} minutes`);

// 4.
for (const [key, value] of gameEvents) {
  // if (key <= 45) {
  //   console.log('[FIRST HALF]  ', key, value);
  // } else {
  //   console.log('[SECOND HALF] ', key, value);
  // }

  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
*/

/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Working with strings - Part 1.

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('Test'.length);

// Methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r')); // if a letter occurres multiple times
console.log(airline.indexOf('Portugal')); // the first occurrence of a word
console.log(airline.indexOf('portugal')); // -1 = error

// Extracting part of a string
console.log(airline.slice(4)); // 4 = the position from where it starts

// All the string methods return a new string since it is impossible to mutate strings

console.log(airline.slice(4, 8)); // the end value is not included in the string
// length = end - start

console.log(airline.slice(0, airline.indexOf(' '))); // first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // last word

console.log(airline.slice(-2)); // extracts backwards from the end
console.log(airline.slice(1, -1));

const checkMiddleSet = seat => {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('Middle seat!');
  } else {
    console.log('Different seat!');
  }
};

checkMiddleSet('11B');
checkMiddleSet('23C');
checkMiddleSet('3E');

// Behind the scenes:
// [Boxing]: when we call a method on a string JS converts that primitive to a String obj
console.log(typeof new String('Test'));
// After the operation is done the Obj is converted back to a primitive
// All string methods return primitives
console.log(typeof new String('Test').slice(1));
*/

////////////////////////////////////////////////////////////////////////////////////////////
// Working with strings - Part 2.

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Test'.toUpperCase());

// Fix capitalization in name
let passenger = 'jOnAs';
const passengerL = passenger.toLowerCase();
const firstLetter = passenger.charAt(0).toUpperCase();
passenger = passengerL.replace(passenger.charAt(0), firstLetter);
console.log(passenger);

// Shorter way
const passengerCorrect = passengerL[0].toUpperCase() + passengerL.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@gmail.com';
const loginEmail = '  Hello@Gmail.Com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);

// Shorter way
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail && email === trimmedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace(/door/g, 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320Neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('A'));
console.log(plane.startsWith('a'));
console.log(plane.startsWith('Ai'));

if (plane.startsWith('Airbus') && plane.endsWith('Neo')) {
  console.log('TRUE');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not allowed!');
  } else {
    console.log('Allowed');
  }
};

checkBaggage('I have a laptop, some food and a KniFe.');
checkBaggage('I have a laptop, some food and a chocolate.');
checkBaggage('I have a laptop, a gun and a chocolate.');
