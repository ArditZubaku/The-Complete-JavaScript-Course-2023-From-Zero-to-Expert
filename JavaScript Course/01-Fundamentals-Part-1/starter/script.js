// let js = "amazing";
// /* if (js === "amazing") alert("JavaScript is FUN!");
//  */
// // 40 + 5 + 10 + 20 - 5;

// console.log(40 + 5 + 10 + 20 - 5);

// console.log("Person");
// console.log(23);

// let nameOfVariable = "Variable";
// console.log(nameOfVariable);
// console.log(nameOfVariable);
// console.log(nameOfVariable);

// // let variable&test = "Error";
// // let function = "Error";

// let CONSTANT = "Constant";

// let $allowed = "Allowed convention";

// console.log($allowed);

// // the value holds the datatype not the variable
// true;

// console.log(true);

// // typeof operator
// console.log(typeof true);
// console.log(typeof $allowed);
// console.log(typeof CONSTANT);
// console.log(typeof 23);

// let test = "String";
// console.log(typeof test);
// test = false;
// console.log(typeof test);

// // undefined = value and datatype
// let year;
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// // bug
// console.log(typeof null);


/* 
// can change
let age = 30;
age = 31;

// can not change
const birth = 1991;
birth = 1990;

// constants should be initialized
// const job;

let isBlockScoped = true;
var isFunctionScoped = true;



// never use var, use const always besides the cases u need the variable to change

*/

// Math operators
const currentYear = 2023;

const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// 2**3 = 2^3 = 8

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x+10
x *= 4; // x = x * 4
x++; // x = x+1
x--; // x = x-1 
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageJonas >= ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas <= ageSarah);

const isFullAge = ageSarah >= 18;

const now = 2037;
const age1 = now - 1991;
const age2 = now - 2018;

let z, y;
z = y = 10 - 5 + 24 + 2;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);







