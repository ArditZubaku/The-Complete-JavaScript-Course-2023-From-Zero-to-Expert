'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderFood: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Object destructuring as function argument
  // Order doesn't matter!!!
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '10:30',
    address = 'TestAddress',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicios pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}.`
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
