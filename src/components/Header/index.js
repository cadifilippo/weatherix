import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import View from './view';

const Header = ({ location }) => {
  const [time, setTime] = useState('');
  const { city, countryNativeName: country, flag, state, timezone } = location;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        DateTime.now().setZone(timezone).toLocaleString(DateTime.TIME_SIMPLE)
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timezone]);

  return (
    <View
      city={city}
      country={country}
      flag={flag || `https://countryflagsapi.com/png/${country.toLowerCase()}`}
      time={time}
      state={state}
    />
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
