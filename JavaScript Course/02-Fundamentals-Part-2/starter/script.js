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

/*
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
*/

//////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #5

/* 
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§To calculate average of 3 values, add them all together and divide by 3
§To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 
GOOD LUCK 
*/
/* 
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDoplhins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgDolphins === avgKoalas) {
        console.log(`Draw!`);
    }
    else {
        console.log(`No winner!`);
    }
}

checkWinner(scoreDoplhins, scoreKoalas);

scoreDoplhins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

 */
//////////////////////////////////////////////////////////////////////////////////////
// Introduction to arrays

const friend1 = "Michael";
const friend2 = "Steve";
const friend3 = "Peter";

const friends = ['Michael', 'Steve', 'Peter'];
console.log(friends);

// Different way
const years = new Array(1991, 1984, 'Test');
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends.length - 1); // the last index

// Changing values
friends[2] = 'Jay';
console.log(friends);

// Even tho we declared it as const we can change its value since an array is not a primitive value
// We can only change elements one by one, we can not do a total re-assignment of the array

// friends = ['This is not allowed'];


// Different values at the same time
const jonas = ['Jonas', 'Schmedtmann', 2023 - 1991, 'Teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsArray = [1990, 1967, 2002, 2021, 2018];

const age1 = calcAge(yearsArray[0]);
const age2 = calcAge(yearsArray[1]);
const age3 = calcAge(yearsArray[2]);
const age4 = calcAge(yearsArray[3]);
// const age5 = calcAge(yearsArray.length - 1);

const ages = [age1, age2, age3, age4, calcAge(yearsArray.length - 1)];

console.log(ages);
console.log(ages.toString());






















