import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Layout.module.css';

var cx = classNames.bind(styles);

const View = ({ children, isDay }) => (
  <div className={cx('main', { 'is-day': isDay })}>{children}</div>
);

View.propTypes = {
  children: PropTypes.node,
  isDay: PropTypes.bool,
};

export default View;
