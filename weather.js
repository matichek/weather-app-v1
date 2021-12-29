// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?q=grosuplje&?units=metric&appid=27f854da02953ebe531f33961c6df6db

class Weather {
  constructor(city) {

    // input your own API key
    this.apiKey = "";
    this.city = city;
  }

  

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData
  }

  changeLocation(city, state) {
    this.city = city; 
    this.state = state;
  }


}