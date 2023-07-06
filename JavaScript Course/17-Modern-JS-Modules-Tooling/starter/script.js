// Importing module
// Creating a namespace to use for imports
// import { addToCart, qt, totalPrice as price } from './shoppingCart.js';
// Both types of imports in one line:
import * as ShoppingCart from './shoppingCart.js';
import add, {
  addToCart,
  cart,
  qt,
  totalPrice as price,
} from './shoppingCart.js';

console.log('Importing module');

addToCart('bread', 5);
// console.log(totalPrice, totalQuantity)
console.log(price, qt);

console.log(ShoppingCart.totalPrice);

// We name it ourselves, and now it will import the default export
// import add from './shoppingCart.js'

add('test1', 10);
add('test2', 20);
add('test3', 30);
console.log(cart);
