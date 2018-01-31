import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({photos, handleClick}) => {
  const renderPhotos = photos.slice(0, 4).map((photo,i) => (
    <img
      key={photo.src}
      src={photo.src}
      alt={photo.title}
      data-index={i}
      onClick={handleClick}
    />
  ));

  return (
    <footer>
      { renderPhotos }
    </footer>
  );
}

Gallery.propTypes = {
  // handleClick: PropTypes.function.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
