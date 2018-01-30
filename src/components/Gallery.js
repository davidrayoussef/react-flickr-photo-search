import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({photos}) => {
  const renderPhotos = photos.slice(0, 4).map(photo => (
    <img key={photo.src} src={photo.src} alt={photo.title} />
  ));

  return (
    <footer>
      { renderPhotos }
    </footer>
  );
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Gallery;
