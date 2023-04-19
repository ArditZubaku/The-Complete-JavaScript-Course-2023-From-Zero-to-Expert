// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2023 - birthYear; */
/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Using Google, stackoverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: 
// "Given an array of temperatures of one day, calculate the temperature amplitude. 
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

console.log(`---Problem 1---`);

const calcTempAmplitude = function name(temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    if (typeof currentTemp !== 'number') {
      continue;
    }
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);

  return max - min;
};

calcTempAmplitude([3, 7, 4, 6, 1, 2]);
const amplitude = calcTempAmplitude(temperatures);
console.log(`Amplitude: ${amplitude}`);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

console.log(`---Problem 2---`);

const calcTempAmplitude2 = function name(t1, t2) {
  const temperatures = t1.concat(t2);
  console.log(temperatures);
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    if (typeof currentTemp !== 'number') {
      continue;
    }
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);

  return max - min;
};

const amplitude2 = calcTempAmplitude2([3, 7, 4, 6, 1, 2], [1, 2, 3, 4, 5]);
console.log(`Amplitude: ${amplitude2}`);
*/

/* 
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging with the console and breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    // c) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // b) FIND
  console.log(typeof measurement.value);
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;

  return kelvin;
};

// a) IDENTIFY
console.log(measureKelvin());

///////////////////////////////
// Using a debugger

const calcTempAmplitudeBug = function name(t1, t2) {
  const temperatures = t1.concat(t2);
  console.log(temperatures);
  // let max = temperatures[0];
  // let min = temperatures[0];
  let max = 0;
  let min = 0;
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    if (typeof currentTemp !== 'number') {
      continue;
    }

    debugger;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);

  return max - min;
};

const amplitude2 = calcTempAmplitudeBug([3, 7, 4, 6, 1, 2], [1, 2, 3, 4, 5]);
console.log(`Amplitude: ${amplitude2}`);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #9
/* 
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 
*/

const printForecast = arr => {
  let string = '... ';
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}°C in ${i+1} days ... `;
  }
  console.log(string);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
