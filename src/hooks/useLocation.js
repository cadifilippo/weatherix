import { useEffect, useState } from 'react';
import { RAPID_API_KEY } from '../config/config';

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host':
      'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
    'X-RapidAPI-Key': RAPID_API_KEY,
  },
};

const useLocation = () => {
  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem('location'))
  );

  useEffect(() => {
    if (!location?.city) {
      fetch(
        'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8',
        OPTIONS
      )
        .then((response) => response.json())
        .then(
          ({
            city,
            country,
            countryNativeName,
            flag,
            ip,
            gmt,
            state,
            timezone,
          }) => {
            const data = {
              city,
              country,
              countryNativeName,
              flag,
              ip,
              gmt,
              state,
              timezone,
            };
            setLocation(data);
            localStorage.setItem('location', JSON.stringify(data));
          }
        )
        .catch(() => setLocation(false));
    }
  }, [location]);

  return { location };
};

export default useLocation;
