import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Slider from './Slider';
import Gallery from './Gallery';
import PropTypes from 'prop-types';

class FlickrApp extends Component {
  state = {
    searchTerm: 'dogs',
    activeIndex: 0,
    loading: true,
    photos: []
  }

  constructor() {
    super();

    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    const { searchTerm } = this.state;
    const photoCount = Math.min(this.props.photoCount, this.props.maxPhotoCount);
    const apiKey = '188ac9a8bb5d3352dd8d114ca8e93061';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=${photoCount}&page=1&format=json&nojsoncallback=1`;

    fetch(url)
      .then(res => res.json())
      .then(({photos}) => photos.photo.map(photo => (
        {
          title: photo.title,
          src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        }
      )))
      .then(photos => this.setState({
        photos: photos,
        loading: false
      }))
      .catch(err => console.log(err));
  }

  handleThumbnailClick(e) {
    this.setState({
      activeIndex: +e.target.dataset.index
    });
  }

  handleLeftArrowClick() {
    const { activeIndex, photos } = this.state;

    this.setState({
      activeIndex: activeIndex === 0 ? photos.length - 1 : activeIndex - 1
    });
  }

  handleRightArrowClick() {
    const { activeIndex, photos } = this.state;

    this.setState({
      activeIndex: (activeIndex + 1) % photos.length
    });
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBox />
        <Slider
          photos={this.state.photos}
          activeIndex={this.state.activeIndex}
          handleLeftArrowClick={this.handleLeftArrowClick}
          handleRightArrowClick={this.handleRightArrowClick}
        />
        <Gallery
          photos={this.state.photos}
          activeIndex={this.state.activeIndex}
          handleThumbnailClick={this.handleThumbnailClick}
        />
      </div>
    );
  }
}

FlickrApp.defaultProps = {
  maxPhotoCount: 25
};

FlickrApp.propTypes = {
  photoCount: PropTypes.number.isRequired,
  maxPhotoCount: PropTypes.number.isRequired
};

export default FlickrApp;
