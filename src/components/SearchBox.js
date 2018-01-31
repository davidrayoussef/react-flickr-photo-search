import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({handleFormSubmit, handleInputChange}) => {
  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search"
          autoFocus
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

SearchBox.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchBox;
