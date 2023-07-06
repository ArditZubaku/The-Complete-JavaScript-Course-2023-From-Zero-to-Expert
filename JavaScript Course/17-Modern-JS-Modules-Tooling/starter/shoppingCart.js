// Exporting module
console.log('Exporting module');

// Blocking code
// console.log(`Start fetching users`);
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('Finish fetching users');

const shipping_cost = 10;
export const cart = [];

// First way of named exports
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart.`);
};

const totalPrice = 237;
const totalQuantity = 100;

// Second way
export { totalPrice, totalQuantity as qt };

// Default exports are used when we want to export only one thing per module
// We export the value not the variable
export default (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart.`);
};
