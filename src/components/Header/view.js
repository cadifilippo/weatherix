import PropTypes from 'prop-types';
import styles from './Header.module.css';

const View = ({ city, country, flag, state }) => (
  <header className={styles.header}>
    <section className={styles.left}>
      <h1 className={styles.title}>{city}</h1>
      <h3 className={styles.subtitle}>{`${state}, ${country}`}</h3>
    </section>
    <section className={styles.right}>
      <img className={styles.flag} src={flag} alt={`${city} flag`} />
    </section>
  </header>
);

View.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  flag: PropTypes.string,
  state: PropTypes.string,
};

export default View;
