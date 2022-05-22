import { RAPID_API_KEY } from '../config/config';

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': RAPID_API_KEY,
  },
};

const apiWeather = (location) => {
  const q =
    location?.ip || `${location?.city},${location?.state},${location?.country}`;

  return fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${q}&days=5&lang=es`,
    OPTIONS
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return null;
    });
};

export default apiWeather;
