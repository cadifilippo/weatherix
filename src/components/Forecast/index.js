import PropTypes from 'prop-types';
import View from './view';

const Forecast = ({ forecast }) => {
  return <View forecast={forecast} />;
};

Forecast.propTypes = {
  forecast: PropTypes.array,
};

export default Forecast;
