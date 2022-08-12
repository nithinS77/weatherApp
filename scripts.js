function fetchWeather(city) {
  let place = search.value || city;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=6fa99e1f96f024f79970c5a3532b2ac6`
  ).then((data) => data.json().then((res) => displayWeather(res)));
}

function displayWeather(res) {
  console.log(res);
  const name = res.name;
  const { temp, humidity } = res.main;
  const wind = res.wind.speed;
  const desc = res.weather[0].description;
  var icon = res.weather[0].icon
  let html = `
          <h2 class="city">${name}</h3>
          <h2>${Math.round(temp - 273.15)}° C</h2>
          <h4>${desc}</h4>
          <img src='https://openweathermap.org/img/wn/${icon}@2x.png'></img>
          <h4>Humidity: ${humidity}</h4>
          <h4>Wind speed: ${wind}km/hr</h4>`;

  document.querySelector('.weather').innerHTML = html;
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
}

fetchWeather('mumbai');
