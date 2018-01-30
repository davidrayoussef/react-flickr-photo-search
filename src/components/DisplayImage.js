import React from 'react';
import PropTypes from 'prop-types';

const DisplayImage = () => {
  return (
    <main>
      <img src={require(`../images/dogs1.jpg`)} />
    </main>
  );
}

DisplayImage.propTypes = {

};

export default DisplayImage;
