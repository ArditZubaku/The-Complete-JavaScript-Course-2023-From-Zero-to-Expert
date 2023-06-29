'use strict';

const btn = document.querySelector('.btn-country');
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
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json()
      // err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json()
      // A promise in which an error happened is a rejected promise
      // First way: passing a 2nd callback
      // err => alert(err)
    )
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

btn.addEventListener('click', event => {
  getCountryData('kosovo');
});

getCountryData('asdasd')