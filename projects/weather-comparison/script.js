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
    case 3:
      if (day === 0) {
        iconName = 'cloud-moon';
      } else {
        iconName = 'cloud-sun';
      }
  }
  document.getElementById('icon' + side).classList.add('bi-' + iconName);
};

//Update Temperature
const updateTemp = (temp, side) => {
  document.getElementById('temp' + side).innerHTML = Math.round(temp) + '°';
};
