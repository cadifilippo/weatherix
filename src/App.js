import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Forecast from './components/Forecast';
import Header from './components/Header';
import Weather from './components/Weather';
import useLocation from './hooks/useLocation';
import Layout from './view/Layout';

import 'react-toastify/dist/ReactToastify.css';
import apiWeather from './helpers/api-weather';
import Search from './components/Search';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { location, state, isLoading: isLocationLoading } = useLocation();
  const [weather, setWeather] = useState({});
  const [currLocation, setCurrLocation] = useState();

  // useEffect(() => {
  //   console.log(state?.error);
  //   if (state?.error) {
  //     toast.warn(state?.error, {
  //       position: toast.POSITION.BOTTOM_CENTER,
  //       theme: 'colored',
  //       toastId: state?.error,
  //       role: 'alert',
  //     });
  //   }
  // }, [state]);

  useEffect(() => {
    if (!isLocationLoading && !state?.error) {
      apiWeather(location)
        .then((data) => {
          console.log({ data });
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      console.log('🧨 Imposible cargar localización');
      setIsLoading(false);
    }
  }, [location, isLocationLoading, state]);

  const changeLocation = (q) => {
    setIsLoading(true);
    apiWeather({ ip: q })
      .then((data) => {
        if (data?.error) {
          toast.warn('Ubicación no encontrada', {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: 'colored',
            toastId: data?.error,
            role: 'alert',
          });
        }
        console.log({ location: data.location });
        const temp = {
          city: data.location.name,
          state: data.location.region,
          countryNativeName: data.location.country,
        };
        setCurrLocation(temp);
        setWeather(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  console.log({
    isLocationLoading,
    location,
    current: weather?.current,
    forecast: weather?.forecast?.forecastday,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Layout isDay={weather?.current?.is_day === 1}>
        {currLocation ? (
          <Header location={currLocation} />
        ) : (
          <Search onChangeLocation={changeLocation} />
        )}
        {/* <Weather weather={weather?.current} /> */}

        {/* <pre style={{ fontSize: '2rem' }}>
          {JSON.stringify({ city, country, flag, gmt, state }, null, 2)}
        </pre>
        <pre style={{ fontSize: '2rem' }}>
          {JSON.stringify(
            {
              temp_c,
              temp_f,
              is_day,
              condition,
              wind_mph,
              wind_kph,
              wind_degree,
              wind_dir,
              pressure_mb,
              pressure_in,
              precip_mm,
              precip_in,
              humidity,
              cloud,
              feelslike_c,
              feelslike_f,
              vis_km,
              vis_miles,
              uv,
              gust_mph,
              gust_kph,
            },
            null,
            2
          )}
        </pre>
        {forecast.forecastday.map((day, idx) => (
          <pre style={{ fontSize: '2rem' }} key={idx}>
            {JSON.stringify(day, null, 2)}
          </pre>
        ))} */}
      </Layout>
      {weather?.forecast?.forecastday && (
        <Forecast forecast={weather?.forecast?.forecastday} />
      )}
      <ToastContainer style={{ fontSize: '1.4rem', fontWeight: 'bold' }} />
    </>
  );
}

export default App;
