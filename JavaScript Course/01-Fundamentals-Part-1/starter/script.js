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

/* // Math operators
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
 */


/////////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body
Mass Index), which is calculated using the formula:
BMI = mass / height xx 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in
variables

2. Calculate both their BMIs using the formula (you
can even implement both versions)

3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a
higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.

GOOD LUCK 
*/

/* const marksWeight_1 = 78;
const marksHeight_1 = 1.69;
const jonasWeight_1 = 92;
const jonasHeight_1 = 1.95;

const marksBMI_1 = marksWeight_1 / (marksHeight_1 ** 2);
const jonasBMI_1 = jonasWeight_1 / (jonasHeight_1 ** 2);

const markHigherBMI_1 = marksBMI_1 > jonasBMI_1;

console.log("Mark");
console.log("Weight:" + marksWeight_1, "Height:" + marksHeight_1, "BMI:" + marksBMI_1);

console.log("Jonas");
console.log("Weight: " + jonasWeight_1);
console.log("Height: " + jonasHeight_1);
console.log("BMI: " + jonasBMI_1);
console.log();
console.log("Mark has a higher BMI?: " + markHigherBMI_1);

console.log();
console.log();

const marksWeight_2 = 95;
const marksHeight_2 = 1.88;
const jonasWeight_2 = 85;
const jonasHeight_2 = 1.76;

const marksBMI_2 = marksWeight_2 / (marksHeight_2 ** 2);
const jonasBMI_2 = jonasWeight_2 / (jonasHeight_2 ** 2);

const markHigherBMI_2 = marksBMI_2 > jonasBMI_2;

console.log("Mark");
console.log("Weight:" + marksWeight_2, "Height:" + marksHeight_2, "BMI:" + marksBMI_2);

console.log("Jonas");
console.log("Weight: " + jonasWeight_2);
console.log("Height: " + jonasHeight_2);
console.log("BMI: " + jonasBMI_2);
console.log();
console.log("Mark has a higher BMI?: " + markHigherBMI_2); */


/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2023;

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + " years old " + job + " .";

console.log(jonas);


// Template literals
const jonas2 = `I'm ${firstName} a ${currentYear - birthYear} years old ${job} .`;

const noInsertions = `Just a regular String.`

console.log("String with \n\
 new line \n\
 3rd line");

console.log(`Multi line 
with 
literals`); */


/* 
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license 🚗. ");
}

const age2 = 15;

if (age2 >= 18) {
    console.log("Sarah can start driving license 🚗.");
} else {
    const years = 18 - age2;
    console.log(`Sarah is too young. She shall wait another ${years} years :).`);
}

const birthYear = 2002;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); */

/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

/* const marksWeight_1 = 78;
const marksHeight_1 = 1.69;
const jonasWeight_1 = 92;
const jonasHeight_1 = 1.95;

let marksBMI_1 = marksWeight_1 / (marksHeight_1 ** 2);
const jonasBMI_1 = jonasWeight_1 / (jonasHeight_1 ** 2);

const markHigherBMI_1 = marksBMI_1 > jonasBMI_1;

console.log("Mark");
console.log("Weight:" + marksWeight_1, "Height:" + marksHeight_1, "BMI:" + marksBMI_1);

console.log("Jonas");
console.log("Weight: " + jonasWeight_1);
console.log("Height: " + jonasHeight_1);
console.log("BMI: " + jonasBMI_1);
console.log();
console.log("1.");
if (markHigherBMI_1) {
    console.log("Mark's BMI is higher than John's!");
} else {
    "John's BMI is higher than Mark's!"
}
console.log();
console.log("2.");

marksBMI_1 = jonasBMI_1 - 1;
const markHigherBMI_2 = marksBMI_1 > jonasBMI_1;

if (markHigherBMI_2) {
    console.log(`Mark's BMI (${marksBMI_1}) is higher than John's (${jonasBMI_1})!`);
} else {
    console.log(`John's BMI (${jonasBMI_1}) is higher than Mark's (${marksBMI_1})!`);
} */


// Type conversion 
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear + 0));
console.log(Number(inputYear) + 10);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));
console.log(String(23) + " 00");

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); // '+' triggers String(), '-' triggers Numbers()
console.log('23' * 2); // Numbers()

let n = '1' + 1; // 11
n = n - 1;       // 10
console.log(n);

console.log(2 + 3 + 5 + '5');
console.log('10' - '3' - '2' + 5 + '1000');