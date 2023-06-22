'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Using the Geolocation API.

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Displaying a map using Leaflet library.

      // 'map' is the id of a html element that will hold/display the map

      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 20); // 20 = zoom level
      // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //   attribution:
      //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      // }).addTo(map);

      L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors - Tiles courtesy of <a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a>',
        maxZoom: 19,
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

      // Handling clicks on map
      map.on('click', function (map_Event) {
        mapEvent = map_Event;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    () => {
      alert("Couldn't get current position");
    }
  );

form.addEventListener('submit', e => {
  e.preventDefault();

  // Clear input fields
  inputDistance.value =
    inputDuration.value =
    inputElevation.value =
    inputCadence.value =
      '';

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Displaying a map marker.
  // Display marker
  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('<b>Test</b>')
    .openPopup();
});

inputType.addEventListener('change', evt => {
  evt.preventDefault();
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

console.log(firstName);
