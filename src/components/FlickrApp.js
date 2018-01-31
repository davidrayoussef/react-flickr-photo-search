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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  componentWillMount() {
     document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentDidMount() {
    this.fetchPhotos(this.state.searchTerm);
  }

  fetchPhotos(searchTerm) {
    const photoCount = Math.min(this.props.photoCount, this.props.maxPhotoCount);
    const apiKey = '188ac9a8bb5d3352dd8d114ca8e93061';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=${photoCount}&page=1&safe_search=1&format=json&nojsoncallback=1`;

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

  handleInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.fetchPhotos(this.state.searchTerm);
  }

  handleLeftArrowClick() {
    this.slideLeft();
  }

  handleRightArrowClick() {
    this.slideRight();
  }

  handleKeyPress(e) {
    if (document.querySelector('input') === document.activeElement) return;
    if (e.key === 'ArrowRight') this.slideRight();
    if (e.key === 'ArrowLeft') this.slideLeft();
  }

  handleThumbnailClick(e) {
    this.setState({
      activeIndex: +e.target.dataset.index
    });
  }

  slideLeft() {
    const { activeIndex, photos } = this.state;

    this.setState({
      activeIndex: activeIndex === 0 ? photos.length - 1 : activeIndex - 1
    });
  }

  slideRight() {
    const { activeIndex, photos } = this.state;

    this.setState({
      activeIndex: (activeIndex + 1) % photos.length
    });
  }

  render() {
    const { photos, activeIndex } = this.state;
    const { handleFormSubmit, handleInputChange, handleLeftArrowClick, handleRightArrowClick, handleThumbnailClick } = this;

    return (
      <div className="wrapper">
        <SearchBox
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
        <Slider
          photos={photos}
          activeIndex={activeIndex}
          handleLeftArrowClick={handleLeftArrowClick}
          handleRightArrowClick={handleRightArrowClick}
        />
        <Gallery
          photos={photos}
          activeIndex={activeIndex}
          handleThumbnailClick={handleThumbnailClick}
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
