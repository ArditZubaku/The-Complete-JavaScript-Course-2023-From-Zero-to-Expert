// // Importing module
// // Creating a namespace to use for imports
// // import { addToCart, qt, totalPrice as price } from './shoppingCart.js';
// // Both types of imports in one line:
import * as ShoppingCart from './shoppingCart.js';
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

console.log(ShoppingCart.qt);
