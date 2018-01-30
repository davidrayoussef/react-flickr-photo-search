import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({photos}) => {
  return (
    <footer>
      {
        photos.map(photo => (
          <img key={photo.src} src={require(`../images/${photo.src}`)} />
        ))
      }
    </footer>
  );
}

Gallery.propTypes = {

};

export default Gallery;
