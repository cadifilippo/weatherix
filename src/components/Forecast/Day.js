import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import arrow from '../../assets/icons/arrow.png';
import styles from './Forecast.module.css';

const TRANSLATE = {
  Monday: 'Lunes',
  Tuesday: 'Martes',
  Wednesday: 'Miércoles',
  Thursday: 'Jueves',
  Friday: 'Viernes',
  Saturday: 'Sábado',
  Sunday: 'Domingo',
};
const DAYS = [
  'Hoy',
  'Mañana',
  TRANSLATE[DateTime.local().plus({ days: 2 }).toFormat('cccc')],
];

const Day = ({ data, i }) => {
  const { day } = data;
  return (
    <section className={styles.card}>
      <h3 className={styles.day}>{DAYS[i]}</h3>
      <img src={`https://${day?.condition?.icon}`} alt={day?.condition?.text} />
      <p className={styles.temp}>{day.avgtemp_c}°C</p>
      <div className={styles.range_temp}>
        <p className={styles.max_temp}>
          {day.maxtemp_c}°C
          <img
            className={styles.arrowUp}
            src={arrow}
            alt="icono temperatura máxima"
          />
        </p>
        <p className={styles.min_temp}>
          {day.mintemp_c}°C
          <img
            className={styles.arrowDown}
            src={arrow}
            alt="icono temperatura mínima"
          />
        </p>
      </div>
    </section>
  );
};

Day.propTypes = {
  data: PropTypes.object,
  i: PropTypes.number,
};

export default Day;
