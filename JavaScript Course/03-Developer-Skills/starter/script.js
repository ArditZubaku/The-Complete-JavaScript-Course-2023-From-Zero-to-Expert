// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2023 - birthYear;

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
