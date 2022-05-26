import { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Header from './components/Header';
import Weather from './components/Weather';
import useLocation from './hooks/useLocation';
import useWeather from './hooks/useWeather';
import loadingLottie from './assets/lotties/loading.json';
import Layout from './view/Layout';
import Lottie from 'react-lottie-player';

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
    return (
      <Lottie
        loop
        animationData={loadingLottie}
        play
        style={{
          alignItems: 'center',
          background:
            'linear-gradient(0deg,rgba(227, 179, 243, 1), rgba(20, 4, 186, 1))',
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          margin: '0 auto',
          paddingBottom: '20%',
          width: '100vw',
        }}
      />
    );
  }

  return (
    <>
      <Layout isDay={weather?.current?.is_day === 1}>
        <Header location={location} />
        <Weather weather={weather?.current} />
      </Layout>
      <Forecast forecast={weather?.forecast?.forecastday} />
    </>
  );
}

export default App;
