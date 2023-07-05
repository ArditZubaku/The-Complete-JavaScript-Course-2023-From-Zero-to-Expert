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
  countriesContainer.style.opacity = '1';
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
// console.log(request);

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

/*
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
  });*/

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
/*
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
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #26.

///////////////////////////////////////
// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. 
Pretend you're working on your own 

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image (use document.createElement('img')) 
and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element 
with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. 
In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image 
(HINT: Use the image element returned by the createImage promise to hide the current image. 
You will need a global variable for that);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. 
Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK
*/

/*
const imgContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error(`Image not found at ${imgPath}`));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(resolvedValue => {
    currentImg = resolvedValue;
    console.log('Image 1 loaded');
    return wait(4);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(resolvedValue => {
    currentImg = resolvedValue;
    console.log('Image 2 loaded');
    return wait(4);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => {
    console.error(err);
  });
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Consuming promises with async/await.

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async () => {
  // Await keyword will stop the code execution at this point of the code until the promise is fulfilled
  // The async keyword makes it possible to not block the main thread (the call stack), so it makes the code look like
  // synchronous even though it is asynchronous
  // Async/Await = syntax sugar over .then()

  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
  //   console.log(res)
  // );

  // Geolocation
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  // Reverse geocoding
  const resGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=452597663231142705335x118628`
  );
  const geoData = await resGeo.json();
  console.log(geoData);

  const response = await fetch(
    `https://restcountries.com/v3.1/name/${geoData.country}`
  );

  const data = await response.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
console.log('Executed FIRST');
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Error handling with try...catch.

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (e) {
//   alert(e.message);
// }

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async () => {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=452597663231142705335x118628`
    );
    if (!resGeo.ok) {
      throw new Error('Error fetching geolocation');
    }
    const geoData = await resGeo.json();
    console.log(geoData);

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${geoData.country}`
    );
    if (!response.ok) {
      throw new Error('Error fetching country');
    }
    const data = await response.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (e) {
    console.error(e.message);
    renderError(`Something went wrong! ${e.message}`);
  }
};
whereAmI();
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Returning values from async functions.

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async () => {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=452597663231142705335x118628`
    );
    if (!resGeo.ok) {
      throw new Error('Error fetching geolocation');
    }
    const geoData = await resGeo.json();

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${geoData.country}`
    );
    if (!response.ok) {
      throw new Error('Error fetching country');
    }
    const data = await response.json();
    renderCountry(data[0]);
    return `You are in ${geoData.city} ${geoData.country}`;
  } catch (e) {
    renderError(`Something went wrong! ${e.message}`);
    // Reject the promise returned from async function
    throw e;
  }
};
// console.log('Start');
// const city = whereAmI();
// console.log(city + ' Proof that ASYNC function always returns a promise');
// whereAmI()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(e => console.error(e))
//   .finally(() => {
//     console.log('Finish');
//   });

/!*
In JavaScript, IIFEs (Immediately Invoked Function Expressions) are a way to create a self-executing function.
They are commonly used to create a new scope and avoid polluting the global namespace.
An IIFE is defined as a function expression that is immediately invoked after it is defined.
It is typically wrapped in parentheses to indicate that it is a function expression and then followed
by an additional pair of parentheses to invoke it immediately.
Here's an example of an IIFE:

(function() {
  // code to be executed immediately
})();

*!/

console.log('Start');
(async function () {
  try {
    const res = await whereAmI();
    console.log(res);
  } catch (e) {
    throw e;
  }
  console.log('Finish');
})();
*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Running promises in parallel.

const get3Countries = async (country_1, country_2, country_3) => {
  try {
    // const [data_1] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country_1}`
    // );
    // const [data_2] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country_2}`
    // );
    // const [data_3] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country_3}`
    // );

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${country_1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country_2}`),
      getJSON(`https://restcountries.com/v3.1/name/${country_3}`),
    ]);
    // console.log([data_1.capital[0], data_2.capital[0], data_3.capital[0]]);

    console.log(data.map(city => city[0].capital[0]));
  } catch (e) {
    // If one promise rejects, everything rejects
    console.error(e);
  }
};

get3Countries('kosovo', 'albania', 'switzerland');
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Other promise combinators: race, allSettled, and any.

// Promise.race - basically whichever "wins" first gets executed (resolved or rejected doesn't matter).
// (async () => {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/korea`),
//   ]);
//
//   console.log(res[0]);
// })();

const timeout = s => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long!`));
    }, s * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(1)])
  .then(res => console.log('HERE:', res[0]))
  .catch(err => console.log(err));

// Promise.allSettled - returns the results of all the settled promises (resolved or rejected), doesn't short-circuit.
Promise.allSettled([Promise.resolve('Success 1'), Promise.reject('Failed 1')])
  .then(res => {
    console.log(...res);
  })
  .catch(err => {
    console.error(err);
  });

// Promise.any - returns the first resolved promise, rejected promises are ignored
Promise.any([Promise.resolve('Success 2'), Promise.reject('Failed 2')])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

/*
The differences between  Promise.all ,  Promise.race , and  Promise.any  are as follows: 
1.  Promise.all : Returns a Promise that fulfills with an array of values when all the Promises 
in the input iterable have fulfilled. If any of the Promises reject, the returned Promise will reject with the reason 
of the first rejected Promise. 
2.  Promise.race : Returns a Promise that fulfills or rejects as soon as any of the Promises 
in the input iterable settles (fulfills or rejects). The returned Promise adopts the settled state 
(fulfilled or rejected) of the first settled Promise in the input iterable. 
3.  Promise.any : Returns a Promise that fulfills as soon as any of the Promises in the input iterable fulfills. 
If all the Promises reject, the returned Promise will reject with an AggregateError containing all the rejection reasons 
In summary, Promise.all waits for all Promises to fulfill, Promise.race settles as soon as any Promise settles, 
and Promise.any fulfills as soon as any Promise fulfills.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #27

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await 
(only the part where the promise is consumed). Compare the two versions, think about the big differences, 
and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' 
function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 
5. Add the 'parallel' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 
*/

const imgContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error(`Image not found at ${imgPath}`));
    });
  });
};
//
// let currentImg;
//
// createImage('img/img-1.jpg')
//   .then(resolvedValue => {
//     currentImg = resolvedValue;
//     console.log('Image 1 loaded');
//     return wait(4);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(resolvedValue => {
//     currentImg = resolvedValue;
//     console.log('Image 2 loaded');
//     return wait(4);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => {
//     console.error(err);
//   });

// PART 1:

const loadNPause = async () => {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-1.jpg');
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = 'none';
  } catch (e) {
    console.error(e);
  }
};
// loadNPause();

// PART 2:
const loadAll = async imgArray => {
  try {
    const imgs = imgArray.map(async img => await createImage(img));
    console.log(imgs);

    const resolvedImgs = await Promise.all(imgs);
    console.log(resolvedImgs);

    resolvedImgs.forEach(img => img.classList.add('parallel'));
  } catch (e) {
    console.log(e);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
