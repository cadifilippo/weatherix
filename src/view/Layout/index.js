import PropTypes from 'prop-types';
import View from './view';

const Layout = ({ children, isDay }) => {
  return <View isDay={isDay}>{children}</View>;
};

Layout.propTypes = {
  children: PropTypes.node,
  isDay: PropTypes.bool,
};

export default Layout;
