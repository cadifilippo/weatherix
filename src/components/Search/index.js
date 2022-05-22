import { useState } from 'react';
import PropTypes from 'prop-types';
import View from './view';

const Search = ({ onChangeLocation }) => {
  const [query, setQuery] = useState('');

  const onSubmit = (query) => {
    if (query?.length > 0) {
      onChangeLocation(query);
    }
  };

  return <View query={query} setQuery={setQuery} onSubmit={onSubmit} />;
};

Search.propTypes = {
  onChangeLocation: PropTypes.func,
};

export default Search;
