import React from 'react';
import PropTypes from 'prop-types';

const DisplayImage = ({photos, activeIndex}) => {
  console.log(photos, activeIndex);
  if (photos.length) {
    return (
      <main>
        <img src={photos[activeIndex].src} />
      </main>
    )
  }
  else return null;
}

DisplayImage.propTypes = {

};

export default DisplayImage;
