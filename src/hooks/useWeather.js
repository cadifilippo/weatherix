import { useEffect, useState } from 'react';
import { RAPID_API_KEY } from '../config/config';

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': RAPID_API_KEY,
  },
};

const useWeather = (location) => {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();

  console.log({ location });

  const q =
    location?.ip || `${location?.city},${location?.state},${location?.country}`;

  useEffect(() => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${q}&days=5&lang=es`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('🚔', data);
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }, [location]);

  return { weather };
};

export default useWeather;
