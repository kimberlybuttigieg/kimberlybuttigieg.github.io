/* Geocaching */
const search = (city) => {
  const key = 'bd7c929ef4d6c1851df92fc4aa340f2a';
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`
  );
  request.send();
  request.onload = () => {
    if (request.status === 200 && JSON.parse(request.response)[0]) {
      const cityName = JSON.parse(request.response)[0].name;
      const country = JSON.parse(request.response)[0].country;
      document.getElementById('location').innerHTML = `${cityName}, ${country}`;

      updateData(
        JSON.parse(request.response)[0].lon,
        JSON.parse(request.response)[0].lat
      );
    }
  };
};

/* Updating data */
const updateData = (lon, lat) => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&timezone=auto&forecast_days=1`
  );
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      const temp = Math.round(
        JSON.parse(request.response).current.temperature_2m
      );
      const humidity = JSON.parse(request.response).current
        .relative_humidity_2m;
      const windSpeed = JSON.parse(request.response).current.wind_speed_10m;
      const isDay = JSON.parse(request.response).current.is_day;

      var symbol;
      switch (JSON.parse(request.response).current.weather_code) {
        case 0:
        case 1:
        case 2:
          if (isDay) {
            symbol = 'sun';
          } else {
            symbol = 'moon';
          }
          break;
        case 3:
          if (isDay) {
            symbol = 'cloud-sun';
          } else {
            symbol = 'cloud-moon';
          }
          break;
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
          symbol = 'cloud-rain';
          break;
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
          symbol = 'cloud-snow';
          break;
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
          symbol = 'cloud-rain';
          break;
        default:
          symbol = 'question';
      }

      document.getElementById('symbol').className = 'bi';
      document.getElementById('symbol').classList.add('bi-' + symbol);
      document.getElementById('temp').innerHTML = temp + ' °C';
      document.getElementById('humidity').innerHTML = humidity + '%';
      document.getElementById('windSpeed').innerHTML = windSpeed + 'km/h';
    }
  };
};

/* Enter search */
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', search);
searchBar.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' && searchBar.value) {
    search(encodeURIComponent(searchBar.value));
  }
});

/* Default case */
window.addEventListener('load', search('London'));
