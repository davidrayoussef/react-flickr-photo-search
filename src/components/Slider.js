import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({activeIndex, photos, handleLeftArrowClick, handleRightArrowClick}) => {
  if (photos.length) {
    return (
      <main>
        <svg onClick={handleLeftArrowClick} className="icon-arrow left" viewBox="0 0 22 22">
          <line x1="5.8" y1="0.2" x2="17" y2="11.2"></line>
          <line x1="16.9" y1="11" x2="5.6" y2="21.8"></line>
        </svg>
        <img src={photos[activeIndex].src} alt={photos[activeIndex].title} />
        <svg onClick={handleRightArrowClick} className="icon-arrow right" viewBox="0 0 22 22">
          <line x1="5.8" y1="0.2" x2="17" y2="11.2"></line>
          <line x1="16.9" y1="11" x2="5.6" y2="21.8"></line>
        </svg>
      </main>
    );
  }
  else return null;
};

Slider.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired
};

export default Slider;
