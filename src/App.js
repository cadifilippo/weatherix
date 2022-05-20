import { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Header from './components/Header';
import Weather from './components/Weather';
import useLocation from './hooks/useLocation';
import useWeather from './hooks/useWeather';
import Layout from './view/Layout';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { location } = useLocation();
  const { weather } = useWeather(location);

  useEffect(() => {
    if (weather?.current) {
      setIsLoading(false);
    }
  }, [weather]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Layout isDay={weather?.current?.is_day === 1}>
        <Header location={location} />
        <Weather weather={weather?.current} />

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
      <Forecast forecast={weather?.forecast?.forecastday} />
    </>
  );
}

export default App;
