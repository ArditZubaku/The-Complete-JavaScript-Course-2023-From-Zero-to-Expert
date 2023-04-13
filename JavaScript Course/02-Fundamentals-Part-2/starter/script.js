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
/* /////////////////////////////////////////////////////////////////
// Function declarations vs expressions

// Function declarations are used to define functions that can be called later 
// Function expressions are used to define functions that can be called now

// Called above the line it was defined
console.log(calccalcAge1(2010));

// Function declaration
function calccalcAge1(birthYear) {
    return 2023 - birthYear;
}

const calcAge1 = calccalcAge1(2002);
console.log(calcAge1);

// Function expression
const calccalcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const calcAge2 = calccalcAge2(1991);
console.log(calcAge2);

/* calccalcAge1 = "test";
console.log(calccalcAge1); */

// A function is just a value in JavaScript
// Function declarations can be called above the line that they were defined
// Function expressions can not be called above the line that they were defined */

/* 
///////////////////////////////////////////////////
// Arrow functions

// Function exp. version:
const calccalcAge = function thisNameDoesntMatter(birthYear) {
    return 2023 - birthYear;
}
console.log(calccalcAge(2008));

// Arrow function version(special form of func. exp):
const calccalcAge3 = birthYear => 2023 - birthYear; // return happens implicitly in one-line codes

// Invoking is the same:
console.log(calccalcAge3(1995));

// A more complex arrow function:
const yearsUntilRetirement = (birthYear, firstName) => {
    const calcAge = 2023 - birthYear;
    const retirement = 65 - calcAge;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

const test = (parameter1, parameter2) => {
    // To use the 'return' keyword explicitly there has to be curly braces, in one-liners we dont use curly braces neither the keyword return 
    return parameter1 + parameter2
};

console.log(yearsUntilRetirement(1991, "Jonas"));

// A big problem/difference with arrow functions is that they dont get a 'this' keyword.  

*/

/* 
///////////////////////////////////////////////////
// Functions calling other functions

function cutFruitIntoPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitIntoPieces(apples);
    const orangePieces = cutFruitIntoPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(4, 8));
 */

/////////////////////////////////////////////
// Reviewing functions

const calcAge = function (birthYear) {
    return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }


}

console.log(yearsUntilRetirement(2002, "FirstName"));
console.log(yearsUntilRetirement(1950, "Old"));
































