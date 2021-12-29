class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.minTemp = document.getElementById('w-min-temp');
    this.maxTemp = document.getElementById('w-max-temp');
    this.wind = document.getElementById('w-wind');
    this.clouds = document.getElementById('w-clouds');
  }

  paint(weather) {

    this.location.textContent = weather.name;
    
    this.desc.textContent = weather.weather[0].description;

    this.string.textContent = `${weather.main.temp}°C`;

    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

    this.humidity.textContent = `Relative humidty: ${weather.main.humidity}°C`;

    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;

    this.minTemp.textContent = `Min Temp.: ${weather.main.temp_min}°C`;

    this.maxTemp.textContent = `Max Temp: ${weather.main.temp_max}°C`;

    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;

    this.clouds.textContent = `Clouds (%): ${weather.clouds.all}`;
  }
}