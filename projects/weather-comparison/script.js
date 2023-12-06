// Call Weather API
const callAPIs = () => {
  const request1 = new XMLHttpRequest();
  request1.open(
    'GET',
    'https://api.open-meteo.com/v1/forecast?latitude=36.04&longitude=14.29&current=temperature_2m,is_day,weather_code&timezone=auto&forecast_days=1'
  );
  request1.send();
  request1.onload = () => {
    if (request1.status === 200) {
      updateIcon(
        JSON.parse(request1.response).current.weather_code,
        JSON.parse(request1.response).current.is_day,
        1
      );
      updateTemp(JSON.parse(request1.response).current.temperature_2m, 1);
    } else {
      console.log(`Error ${request1.status}`);
    }
  };

  const request2 = new XMLHttpRequest();
  request2.open(
    'GET',
    'https://api.open-meteo.com/v1/forecast?latitude=52.16&longitude=4.5&current=temperature_2m,is_day,weather_code&timezone=auto&forecast_days=1'
  );
  request2.send();
  request2.onload = () => {
    if (request2.status === 200) {
      updateIcon(
        JSON.parse(request2.response).current.weather_code,
        JSON.parse(request2.response).current.is_day,
        2
      );
      updateTemp(JSON.parse(request2.response).current.temperature_2m, 2);
    } else {
      console.log(`Error ${request2.status}`);
    }
  };
};
window.addEventListener('load', callAPIs);

// Update Icon
const updateIcon = (weatherCode, day, side) => {
  var iconName;
  switch (weatherCode) {
    case 0:
    case 1:
    case 2:
      if (day === 0) {
        iconName = 'moon';
      } else {
        iconName = 'sun';
      }
      break;
    case 3:
      if (day === 0) {
        iconName = 'cloud-moon';
      } else {
        iconName = 'cloud-sun';
      }
      break;
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
      iconName = 'cloud-fog';
      break;
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
      iconName = 'cloud-drizzle';
      break;
    case 60:
    case 61:
    case 62:
    case 63:
      iconName = 'cloud-rain';
      break;
    case 64:
    case 65:
      iconName = 'cloud-rain-heavy';
      break;
    case 66:
    case 67:
      iconName = 'cloud-hail';
      break;
    case 68:
    case 69:
      iconName = 'cloud-sleet';
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
      iconName = 'cloud-snow';
      break;
    case 79:
      iconName = 'cloud-hail';
      break;
    default:
      iconName = 'question-lg';
  }
  document.getElementById('icon' + side).classList.add('bi-' + iconName);
};

//Update Temperature
const updateTemp = (temp, side) => {
  document.getElementById('temp' + side).innerHTML = Math.round(temp) + '°';
};
