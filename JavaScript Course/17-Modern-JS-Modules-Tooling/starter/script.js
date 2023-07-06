// // Importing module
// // Creating a namespace to use for imports
// // import { addToCart, qt, totalPrice as price } from './shoppingCart.js';
// // Both types of imports in one line:
import * as ShoppingCart from './shoppingCart.js';
// import {test} from "./shoppingCart.js";
const { test } = require('./shoppingCart');
// import add, {
//   addToCart,
//   cart,
//   qt,
//   totalPrice as price,
// } from './shoppingCart.js';
//
// console.log('Importing module');
//
// addToCart('bread', 5);
// // console.log(totalPrice, totalQuantity)
// console.log(price, qt);
//
// console.log(ShoppingCart.totalPrice);
//
// // We name it ourselves, and now it will import the default export
// // import add from './shoppingCart.js'
//
// add('test1', 10);
// add('test2', 20);
// add('test3', 30);
// console.log(cart);

/*
// Top-level await only works in modules
const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await response.json();
console.log(data);
console.log('Test');
// The con of it is the fact that it now blocks the whole module
*/

/*
// The top-level await of the exporting module blocks the whole module
console.log(ShoppingCart.totalPrice);
const getLastPost = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);

const lastPost2 = getLastPost();
lastPost2
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  });
*/

console.log(ShoppingCart.qt);

// Implementing the module pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 2350;
  const totalQuantity = 123;
  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart.`);
  };

  const printOrderedStock = (product, quantity) => {
    console.log(`${quantity} ${product} was ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalQuantity,
    totalPrice,
  };
})();

console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 6);

test();
