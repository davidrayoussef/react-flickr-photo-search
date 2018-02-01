import React from 'react';
import PropTypes from 'prop-types';
import debounce from '../helpers/debounce';

const SearchBox = ({fetchPhotos, handleFormSubmit, handleInputChange}) => {
  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search"
          autoFocus
          onChange={handleInputChange}
          onKeyUp={() => debounce(fetchPhotos, 600)}
        />
      </form>
    </header>
  );
};

SearchBox.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchBox;
