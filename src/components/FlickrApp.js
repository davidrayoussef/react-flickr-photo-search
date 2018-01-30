import React, { Component } from 'react';
import SearchBox from './SearchBox';
import DisplayImage from './DisplayImage';
import PropTypes from 'prop-types';

class FlickrApp extends Component {
  state = {
    photos: [
      { src: 'dogs1.jpg' },
      { src: 'dogs2.jpg' },
      { src: 'dogs3.jpg' },
      { src: 'dogs4.jpg' }
    ]
  }

  render() {
    const { photos } = this.state;
    const renderPhotos = photos.map(photo => (
      <img key={photo.src} src={require(`../images/${photo.src}`)} />
    ));

    return (
      <div className="wrapper">
        <SearchBox />
        <DisplayImage />
        <footer>
          {renderPhotos}
        </footer>
      </div>
    );
  }
}

FlickrApp.defaultProps = {
};

FlickrApp.propTypes = {
};

export default FlickrApp;
