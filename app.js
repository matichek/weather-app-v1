// init storage

const storage = new Storage();

// Get stored location data

const weatherLocation = storage.getLocationData();

// Init weather Objects

const weather = new Weather(weatherLocation.city);

// Init UI

const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change locatin event

document.getElementById('w-change-btn').addEventListener('click', (e)=> {

  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  // set location in ls

  storage.setLocationData(city);

  e.preventDefault();

  // get and display weather

  getWeather();

  // close modal

  $('#locModal').modal('hide');

})

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
    
  })
  .catch(err => console.log(err));
}

