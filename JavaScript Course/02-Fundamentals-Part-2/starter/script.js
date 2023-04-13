'use strict'; // has to be the very first statement
// strict mode forbids us from doing certain things and creates visible errors to us
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriverLicense = true;
}

if (hasDriversLicense) {
    console.log("I can drive :D");
}

const private = 34;
const interface = "Test";
 */

/* function nameOfFunc() {
    console.log("Test function");
}

// Calling = running = invoking the function
nameOfFunc();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

fruitProcessor(5, 0);
const juice = fruitProcessor(0, 5);
console.log(juice);
console.log(fruitProcessor(1, 10));

nameOfFunc(10); // since the defined function uses no parameters, it wont use the arguments at all neither
const nameOfFunction = nameOfFunc();
console.log(nameOfFunction); // a function that doesn't return anything, returns undefined. */
/////////////////////////////////////////////////////////////////
// Function declarations vs expressions

// Function declarations are used to define functions that can be called later 
// Function expressions are used to define functions that can be called now

// Called above the line it was defined
console.log(calcAge1(2010));

// Function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

/* calcAge1 = "test";
console.log(calcAge1); */

// A function is just a value in JavaScript
// Function declarations can be called above the line that they were defined
// Function expressions can not be called above the line that they were defined