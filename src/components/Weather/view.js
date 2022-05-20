import PropTypes from 'prop-types';
import Lottie from 'react-lottie-player';
import windLottie from '../../assets/lotties/wind.json';
import healthLottie from '../../assets/lotties/healty-weather.json';
import styles from './Weather.module.css';

const View = ({
  image,
  temp,
  wind,
  pressure,
  precip,
  humidity,
  cloud,
  feelslike,
  vis,
  uv,
  gust,
}) => (
  <div className={styles.content}>
    <img className={styles.image} src={image} alt="weather icon" />
    <h2 className={styles.temp}>{`${temp}º`}</h2>
    <p className={styles.text}>STC {`${feelslike}º`}</p>
    <div className={styles.info}>
      <div className={styles.card}>
        <div className={styles.label_container}>
          <span className={styles.label}>{wind}</span>
          <span className={styles.minilabel}>kmph</span>
        </div>
        <Lottie
          loop
          animationData={windLottie}
          play
          style={{ width: 70, height: 70, margin: '-5px' }}
        />
      </div>
      <div className={styles.card}>
        <div className={styles.label_container}>
          <span className={styles.midlabel}>{precip} mm</span>
          <span className={styles.midlabel}>{humidity} %</span>
          <span className={styles.midlabel}>{pressure} mb</span>
        </div>
        <Lottie
          loop
          animationData={healthLottie}
          play
          style={{ width: 70, height: 70, margin: '-5px' }}
        />
      </div>
    </div>
  </div>
);

View.propTypes = {
  image: PropTypes.string,
  temp: PropTypes.number,
  wind: PropTypes.number,
  wind_degree: PropTypes.number,
  wind_dir: PropTypes.string,
  pressure: PropTypes.number,
  precip: PropTypes.number,
  humidity: PropTypes.number,
  cloud: PropTypes.number,
  feelslike: PropTypes.number,
  vis: PropTypes.number,
  uv: PropTypes.number,
  gust: PropTypes.number,
};

export default View;
