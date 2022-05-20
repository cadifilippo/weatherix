import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { CONDITIONS_CODES } from '../../constants/conditions';

import View from './view';

const Weather = ({ weather }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const folder = weather?.is_day === 1 ? 'day' : 'night';
    const code = weather?.condition?.code;
    import(
      `../../assets/images/${folder}/${CONDITIONS_CODES[code].icon}.png`
    ).then((img) => setImage(img.default));
  }, [weather]);

  const {
    temp_c: temp,
    wind_kph: wind,
    wind_degree,
    wind_dir,
    pressure_mb: pressure,
    precip_mm: precip,
    humidity,
    cloud,
    feelslike_c: feelslike,
    vis_km: vis,
    uv,
    gust_kph: gust,
  } = weather;

  return (
    <View
      image={image}
      temp={temp}
      wind={wind}
      wind_degree={wind_degree}
      wind_dir={wind_dir}
      pressure={pressure}
      precip={precip}
      humidity={humidity}
      cloud={cloud}
      feelslike={feelslike}
      vis={vis}
      uv={uv}
      gust={gust}
    />
  );
};

Weather.propTypes = {
  weather: PropTypes.object,
};

export default Weather;
