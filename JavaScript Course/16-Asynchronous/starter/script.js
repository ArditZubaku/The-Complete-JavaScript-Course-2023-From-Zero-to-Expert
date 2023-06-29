'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// setTimeout(() => {
//     console.log("Test")
// }, 3000);
// console.log('Outside')

// Old school way

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}"  alt="State flag"/>
          <div class="country__data"> 
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1_000_000
            ).toFixed(2)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              // country === 'usa' ? data.languages.eng : data.languages.sqi
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              // country === 'albania'
              //   ? data.currencies.ALL.name
              //   : country === 'usa'
              //   ? data.currencies.USD.name
              //   : data.currencies.EUR.name
              Object.values(Object.values(data.currencies)[0])[0]
              // Object.values(Object.values(data.currencies)[0])[1]
            }</p>
          </div>
        </article>
                    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = '1';
  });
};

getCountryData('kosovo');
getCountryData('albania');
getCountryData('usa');
getCountryData('germany');

const data = {
  languages: {
    eng: 'English',
  },
};
