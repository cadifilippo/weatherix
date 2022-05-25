import PropTypes from 'prop-types';
import View from './view';

const Header = ({ location }) => {
  const { city, countryNativeName: country, flag, state } = location;

  return <View city={city} country={country} flag={flag} state={state} />;
};

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
