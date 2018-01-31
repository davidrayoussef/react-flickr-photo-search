import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

const Gallery = ({activeIndex, photos, handleThumbnailClick}) => {
  const startIndex = activeIndex > 1 ? activeIndex - 1 : 0;
  const endIndex = startIndex + 4;

  const renderThumbs = photos.map((photo,i) => (
    <img
      key={photo.src}
      src={photo.src}
      className={activeIndex === i ? 'active' : null}
      alt={photo.title}
      data-index={i}
      onClick={handleThumbnailClick}
    />
  ));

  return (
    <FlipMove
      className="thumbs-container"
    >
      { renderThumbs.slice(startIndex, endIndex) }
    </FlipMove>
  );
}

Gallery.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleThumbnailClick: PropTypes.func.isRequired
};

export default Gallery;
