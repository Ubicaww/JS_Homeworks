const apiKey = prompt("Введіть ключ(відправив разом з дз)");

const dateElem = document.getElementById('current-date');
const timeElem = document.getElementById('current-time');
const cityElem = document.getElementById('city');
const tempElem = document.getElementById('temp');
const iconElem = document.getElementById('weather-icon');
const descElem = document.getElementById('description');
const humidityElem = document.getElementById('humidity');
const windElem = document.getElementById('wind');
const refreshBtn = document.getElementById('refresh-btn');

function updateDateTime() {
  const now = new Date();
  
  const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'];
  const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  dateElem.textContent = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()} - ${days[now.getDay()]}`;

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeElem.textContent = `${hours}:${minutes}`;
}

function getWeather() {
  if (!apiKey) {
    cityElem.textContent = "Ключ не введено";
    descElem.textContent = "Будь ласка, оновіть сторінку та введіть API Key";
    return;
  }

  refreshBtn.disabled = true;
  cityElem.textContent = "Оновлення...";

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=50.45&lon=30.52&appid=${apiKey}&units=metric&lang=uk`)
    .then(weatherResponse => {
      if (!weatherResponse.ok) {
        throw new Error(`Статус сервера: ${weatherResponse.status}`);
      }
      return weatherResponse.json();
    })
    .then(data => {
      cityElem.textContent = data.name;
      tempElem.textContent = `${Math.round(data.main.temp)}°C`;
      descElem.textContent = data.weather[0].description;
      humidityElem.textContent = data.main.humidity;
      windElem.textContent = data.wind.speed;
      
      const iconCode = data.weather[0].icon;
      iconElem.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      updateDateTime();
    })
    .catch(error => {
      console.error("Помилка запиту:", error);
      cityElem.textContent = "Помилка!";
      descElem.textContent = "Перевірте API Key";
    })
    .finally(() => {
      refreshBtn.disabled = false;
    });
}

getWeather();
refreshBtn.addEventListener('click', getWeather);