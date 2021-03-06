import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

const Gallery = ({activeIndex, photos, handleThumbnailClick}) => {
  const startIndex = activeIndex > 1 ? activeIndex - 1 : 0;
  const endIndex = startIndex + 4;

  const renderThumbs = photos.map((photo, i) => (
    <img
      key={photo.src}
      src={photo.thumb}
      className={activeIndex === i ? 'active' : null}
      alt={photo.title}
      data-index={i}
    />
  ));

  return (
    <FlipMove
      className="thumbs-container"
      leaveAnimation={null}
      onClick={handleThumbnailClick}
    >
      { renderThumbs.slice(startIndex, endIndex) }
    </FlipMove>
  );
};

Gallery.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleThumbnailClick: PropTypes.func.isRequired
};

export default Gallery;
