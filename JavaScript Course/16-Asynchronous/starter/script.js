'use strict';

const btn2 = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// setTimeout(() => {
//     console.log("Test")
// }, 3000);
// console.log('Outside')

const renderError = message => {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags?.png}" alt="State flag"/>
      <div class="country__data">
        <h3 class="country__name">${data.name?.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1_000_000
        ).toFixed(2)} Million</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages ? Object.values(data.languages)[0] : ''
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies
            ? Object.values(Object.values(data.currencies)[0])[0]
            : ''
        }</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};

/*const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbor country (2)
    const neighbour = data.borders?.[0];

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      // const [data2] = JSON.parse(request2.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      // Render country 2
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('kosovo');
// getCountryAndNeighbour('albania');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);*/

// Older way:
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// Modern way:
const request = fetch(`https://restcountries.com/v3.1/name/kosovo`);
console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       // json() method is a method available in all the resolved values
//       // returns a new promise
//       return response.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     });
// };
const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country not found:`
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error(`No neighbour found!`);

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found:`
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    // Handles all the errors, no matter where they happen in the chain
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong: ${err.message}.Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};
// btn2.addEventListener('click', function () {
//   getCountryData('kosovo');
// });

// getCountryData('asd-asd');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #25.

/* 
Coding Challenge #1.

In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. 
For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) 
(these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful 
location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. 
Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating.
3. Once you have the data, take a look at it in the console to see all the attributes that you received about 
the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. 
If you reload fast, you will get this error with code 403. 
This is an error with the request. Remember, fetch() does NOT reject the promise in this case. 
So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute 
from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture 
(you can even copy this code, no need to type the same code).

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK
*/

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=452597663231142705335x118628`
//   )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Error has happened: ${response.status}`);
//
//       console.log(response);
//
//       return response.json();
//     })
//     .then(data => {
//       //   console.log(data)
//       console.log(`You are in ${data.city}, ${data.country}`);
//
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found: ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.error(error.message))
//     .finally(() => (countriesContainer.style.opacity = '1'));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The Event Loop in practice.
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {} // Taking longer
  console.log(res);
});
console.log('Test end');

// The code outside any callback will run first.
// The resolved promise will be put in the microtask queue.
// Even if the microtask takes too long, the callbacks in the callback queue will be delayed until itcompletes
// The timeout will be put in the callback queue.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Building a simple promise.
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!!!');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // Calling resolve function, marks the promise as fulfilled.
      resolve(
        'Whatever we pass in here, will be the result of the promise that will be available in the .then()'
      );
    } else {
      reject(new Error('The error message that will go into the .catch()'));
    }
  }, 2000);
});

lotteryPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

// Promisifying setTimeout
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));
// wait(2)
//   .then(() => {
//     console.log(
//       'Here we can run any code that we wanted to be executed after 2 seconds'
//     );
//     return wait(1);
//   })
//   .then(() => console.log('Extra 1 second'));

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//             setTimeout(() => {
//                 console.log('4 seconds passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Doing the same thing but with the promisified version
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//   });
//
// Promise.resolve('Resolved value').then(x => console.log(x));
// Promise.reject('Rejected value')
//   .then(x => console.log(x))
//   .catch(x => console.error(x));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promisifying the Geolocation API.

console.log(`Getting position`);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    ////////////////////////////////////////////////////////
    // Method 1
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     resolve(position);
    //   },
    //   positionError => {
    //     reject(positionError);
    //   }
    // );
    /////////////////////////////////////////////////////////
    // Method 2
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(position => {
  console.log(position);
});

const whereAmI = function () {
  getPosition()
    .then(position => {
      // console.log(position.coords);

      // Renaming variables
      const { latitude: lat, longitude: lng } = position.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=452597663231142705335x118628`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Error has happened: ${response.status}`);

      console.log(response);

      return response.json();
    })
    .then(data => {
      //   console.log(data)
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found: ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(error.message))
    .finally(() => (countriesContainer.style.opacity = '1'));
};

btn2.addEventListener('click', whereAmI);
