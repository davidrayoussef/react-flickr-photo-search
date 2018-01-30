import React, { Component } from 'react';
import SearchBox from './SearchBox';
import DisplayImage from './DisplayImage';
import Gallery from './Gallery';
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
    return (
      <div className="wrapper">
        <SearchBox />
        <DisplayImage />
        <Gallery photos={this.state.photos} />
      </div>
    );
  }
}

FlickrApp.defaultProps = {
};

FlickrApp.propTypes = {
};

export default FlickrApp;
