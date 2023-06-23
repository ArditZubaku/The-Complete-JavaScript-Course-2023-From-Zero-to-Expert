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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Refactoring for Project Architecture.

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Using the Geolocation API.

    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert("Couldn't get current position");
      });
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    // console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Displaying a map using Leaflet library.

    // 'map' is the id of a html element that will hold/display the map

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 20); // 20 = zoom level
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);

    L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors - Tiles courtesy of ' +
        '<a href="https://www.hotosm.org/">Humanitarian OpenStreetMap Team</a>',
      maxZoom: 19,
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(map_Event) {
    this.#mapEvent = map_Event;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField(evt) {
    evt.preventDefault();
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      // Every returns true only if every value in the predicate is true
      inputs.every(input => Number.isFinite(input));
    const positiveInputs = (...inputs) => inputs.every(input => input > 0);

    e.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      const inputs = [distance, duration, cadence];
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(...inputs) ||
        !positiveInputs(...inputs)
      )
        return alert('Inputs have to be positive numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      const inputs = [distance, duration, elevation];
      // Check if data is valid
      if (!validInputs(...inputs) || !positiveInputs(...inputs.slice(0, -1)))
        return alert('Inputs have to be positive numbers');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    // Render workout on map as marker
    this.renderWorkoutMarker(workout);
    // Render workout on list

    // Hide form + clear input fields

    inputDistance.value =
      inputDuration.value =
      inputElevation.value =
      inputCadence.value =
        '';
  }

  renderWorkoutMarker(workout) {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Displaying a map marker.
    // Display marker
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        '<b style="font-size: 20px; font-family: \'DejaVu Sans Mono\',monospace; color: #ffffff;">Workout</b>'
        // workout.distance
      )
      .openPopup();
  }
}

const app = new App();
// app._getPosition();

console.log(firstName);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Managing workout data: Creating classes.

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // km
    this.duration = duration; // min
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 34, 178);
const cycle1 = new Cycling([39, -12], 27, 95, 523);

console.log(run1, cycle1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating a new workout.
