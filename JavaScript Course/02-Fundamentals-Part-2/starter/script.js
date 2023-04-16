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


/* 
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

 */

/* 
//////////////////////////////////////////////////////////////////////////////////////
// Basic array operations (methods)

const friends = ['Michael', 'Steve', 'Peter'];

// Add elements to the end
const newLength = friends.push('LastElement'); // Every function that performs actions on arrays returns a value
                                               // ex. this returns a value (the new mutated length)
console.log(friends);
console.log(newLength);

// Add elements to the beginning
friends.unshift('FirstElement');
console.log(friends);

// Remove the last element
friends.pop();
const poppedElement = friends.pop();
console.log(friends);
console.log(poppedElement);

// Remove the first element
friends.shift();
console.log(friends);
console.log('The element that was removed: ' + friends.shift());

// The index of a certain element
console.log(friends.indexOf('Steve'));
console.log(friends.indexOf("Doesn't exist"));

// Check if it contains a certain element
console.log(friends.includes('Steve'));
console.log(friends.includes('searchElement'));
friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

friends.includes('Peter') ? console.log('You have a friend called Peter') : console.log('You have no friend named Peter');;

// if (console.log("Test")) {
//     console.log("Works");
// }

 */

//////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #6

/* 
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 
GOOD LUCK 
*/
/*
const calcTip = (bill) => 50 <= bill && bill <= 300 ? 0.15 * bill : 0.2 * bill;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);
*/
/* 
//////////////////////////////////////////////////////////////////////////////////////
// Introduction to objects

// In JavaScript objects are considered data structure.

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2023 - 1991,
    'Teacher',
    [
        'Michael',
        'Peter',
        'Steve'
    ]
];

// Objects = key:value pairs
// Object literal syntax
const jonasObj = {
    firstName: 'Jonas', // key = property
    lastName: 'Schmedtmann',
    age: 2023 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steve']
}

// Use arrays for structured data, use objects for unstructured data
 */

/* 
//////////////////////////////////////////////////////////////////////////////////////
// Dot vs bracket notation

const jonasObj = {
    firstName: 'Jonas', // key = property
    lastName: 'Schmedtmann',
    age: 2023 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steve']
}

console.log(jonasObj); // logs properties in a alphabetic order

console.log(jonasObj.lastName);
console.log(jonasObj['lastName']); // we can use expressions to compute this string

const nameKey = 'Name';
console.log(jonasObj['first' + nameKey]);
console.log(jonasObj['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Jonas ? 
Choose between firstName, lastName, age, job and friends.`);

console.log(jonasObj[interestedIn]);

// We get undefined when trying to access a property that doesn't exist.

if (jonasObj[interestedIn]) {
    console.log(jonasObj[interestedIn]);
} else {
    console.log('Wrong input! \n\
Choose between firstName, lastName, age, job and friends.');
}

// Add new properties to the object
jonasObj.location = 'Portugal';
jonasObj['twitter'] = '@jonasschmedtmann';
console.log(jonasObj);

// Challenge
// Write dynamically: "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is called ${jonasObj.friends[jonasObj.friends.indexOf('Michael')]}`);
// OR
console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is called ${jonasObj.friends.find(name => name === "Michael")}`);
 */

/* 
//////////////////////////////////////////////////////////////////////////////////////
// Object methods

// Functions are values meaning that they always return a value.
// A function that is attached to an object is called a method. That's why methods get access to the "this" keyword.
const jonasObj = {
    firstName: 'Jonas', // key = property
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steve'],
    hasDriversLicense: true,
    // Do not use arrow functions inside objects since arrow functions don't have a "this" context.
    // calcAge: function () { // we can use it since the function returns a value, and we store values into properties
    //     console.log(this); // this = the object 
    //     // return 2023 - jonasObj.birthYear;
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        // Adds a new property
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    // Challenge 
    // "Jonas is a 46-year old teacher, and he has a/no driver's license."
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

// console.log(jonasObj.calcAge(jonasObj.birthYear));
// console.log(jonasObj['calcAge'](jonasObj.birthYear));
console.log(jonasObj.calcAge());
console.log(jonasObj['calcAge']());
// console.log(jonasObj.calcAge());
// console.log(jonasObj.calcAge());
// console.log(jonasObj.calcAge());
console.log(jonasObj.age);
console.log(jonasObj.age);
console.log(jonasObj.age);
console.log(jonasObj.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license."
console.log(jonasObj.getSummary());
 */

//////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #7

/* 
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (${johnSmith.fullName()} and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John Smith's BMI (28.3) is higher than ${johnSmith.fullName()}'s (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 
*/
/* 
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.BMI = Number(this.mass / (this.height ** 2)).toPrecision(4);
    }
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    // BMI:0,
    calcBMI: function () {
        return this.BMI = Number(this.mass / (this.height ** 2)).toPrecision(4);
    }
}

if (markMiller.calcBMI() > johnSmith.calcBMI()) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s (${johnSmith.BMI})!`);
} else {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.fullName}'s (${markMiller.BMI})!`);
}
*/
/* 
//////////////////////////////////////////////////////////////////////////////////////
// Iteration: the FOR loop

console.log('Lifting weights repetion 1');
console.log('Lifting weights repetion 2');
console.log('Lifting weights repetion 3');
console.log('Lifting weights repetion 4');
console.log('Lifting weights repetion 5');

console.log();

// for loop keeps running while condition is true
for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetion ${i}`);
}
*/
/* 
//////////////////////////////////////////////////////////////////////////////////////
// Looping arrays, breaking and continuing

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2023 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steve'],
    true
]

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from the array
    console.log(jonasArray[i], "", typeof jonasArray[i]);
    // Filling a new array
    // types[i] = typeof jonasArray[i];
    // Different way
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2002];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);


// Continue and break
// Continue exits the current iteration and goes to the next one meanwhile break terminates the whole loop

console.log('--CONTINUE--');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') {
        continue;
    }
    console.log(jonasArray[i], "", typeof jonasArray[i]);
}

console.log('--BREAK--');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') {
        console.log(jonasArray[i], "", typeof jonasArray[i]);
        break;
    }
}
*/

//////////////////////////////////////////////////////////////////////////////////////
// Looping backwards and loops in loops

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2023 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steve'],
    true
]

// Looping backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

// Loop inside of a loop
for (let exercise = 0; exercise < jonasArray.length; exercise++) {
    console.log(`---Starting exercise [${exercise}]---`);
    for (let rep = 0; rep < jonasArray.length; rep++) {
        console.log(`   Lifting weight rep ${rep}`);
    }
}