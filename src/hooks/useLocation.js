import { useEffect, useRef, useState } from 'react';
import apiLocation from '../helpers/api-location';
import navigatorLocation from '../helpers/navigation-location';

const useLocation = () => {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({});

  useEffect(() => {
    let queue = 1;
    navigatorLocation()
      .then((location) => {
        console.log('promise ok', { location });
      })
      .catch(({ error }) => {
        setState({ ok: false, error });
        queue++;
        apiLocation()
          .then((location) => {
            console.log('api ok', { location });
          })
          .catch(({ error }) => {
            console.error('api error', { error });
          })
          .finally(() => {
            queue--;
            console.log('::::: chau interno', { queue });
            if (queue === 0) {
              console.log('::::: false');
              setIsLoading(false);
            }
          });
      })
      .finally(() => {
        queue--;
        console.log('::::: chau final', { queue });
        if (queue === 0) {
          setIsLoading(false);
        }
      });
  }, []);

  // useEffect(() => {
  //   if (!location?.city) {
  //     fetch(
  //       'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8',
  //       OPTIONS
  //     )
  //       .then((response) => response.json())
  //       .then(
  //         ({
  //           city,
  //           country,
  //           countryNativeName,
  //           flag,
  //           ip,
  //           gmt,
  //           state,
  //           timezone,
  //         }) => {
  //           const data = {
  //             city,
  //             country,
  //             countryNativeName,
  //             flag,
  //             ip,
  //             gmt,
  //             state,
  //             timezone,
  //           };
  //           setLocation(data);
  //           localStorage.setItem('location', JSON.stringify(data));
  //         }
  //       )
  //       .catch(() => setLocation(false));
  //   }
  //   setIsLoading(false);
  // }, [location]);

  return { location, isLoading, state };
};

export default useLocation;
