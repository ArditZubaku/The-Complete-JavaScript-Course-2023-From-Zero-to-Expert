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
};

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

// let test1;
// let test2;
// const test = ([test1, test2] = restaurant.categories);
// console.log(test);
