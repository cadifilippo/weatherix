import { APP_NAME } from './config/config';
import useLocation from './hooks/useLocation';
import useWeather from './hooks/useWeather';

function App() {
  const { location } = useLocation();
  const { weather } = useWeather(location);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        () => {
          console.log('Unable to retrieve your location');
        }
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{APP_NAME}</h1>
        <button onClick={getLocation}>Usar mi GeoLocation</button>
        <pre>{JSON.stringify(location, null, 2)}</pre>
        <pre>{JSON.stringify(weather, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
