const API_KEY = //'lfsdjh*18d95e96e88b346c5cc77c39ae4759f7/ldfskjsd';

export const getWeatherUrl = ({ city, countryCode }) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_KEY}`;

export const getForecastUrl = ({ city, countryCode }) =>
  `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${API_KEY}`;
