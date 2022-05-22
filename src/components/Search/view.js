import PropTypes from 'prop-types';
import search from '../../assets/icons/search.png';
import styles from './Search.module.css';

const View = ({ query, setQuery, onSubmit }) => (
  <header className={styles.header}>
    <input
      type="text"
      className={styles.input}
      placeholder="Ingresa ciudad, coódigo postal o ip"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyUp={(e) => e.key === 'Enter' && onSubmit(query)}
    />
    <button className={styles.button} onClick={() => onSubmit(query)}>
      <img className={styles.search} src={search} alt={`search icon`} />
    </button>
  </header>
);

View.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default View;
