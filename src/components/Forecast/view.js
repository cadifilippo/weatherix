import PropTypes from 'prop-types';
import Day from './Day';
import styles from './Forecast.module.css';

const View = ({ forecast }) => (
  <section className={styles.forecast}>
    {forecast.map((day, i) => (
      <Day key={day.date} i={i} data={day} />
    ))}
  </section>
);

View.propTypes = {
  forecast: PropTypes.array,
};

export default View;
