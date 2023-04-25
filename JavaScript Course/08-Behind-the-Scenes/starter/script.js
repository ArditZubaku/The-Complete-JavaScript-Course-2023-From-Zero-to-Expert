'use strict';

// JIT - just-in-time compilation

/////////////////////////////////////////////////////////////////////////
// Scoping in practice

// Global scope
function calcAge(birthYear) {
  // Function scope
  const age = 2023 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      //Function scoped
      var millenial = true;
      const firstName = `Steven`;

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      // Block scoped
      const str = `You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        // Functions are block scoped only in strict mode
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add();
  }

  printAge();

  return age;
}

//Global scope
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

/////////////////////////////////////////////////////////////////////////
