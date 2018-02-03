import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import Slider from './Slider';
import Gallery from './Gallery';

class FlickrApp extends Component {
  state = {
    searchTerm: 'cats',
    activeIndex: 0,
    loading: true,
    photos: []
  }

  constructor() {
    super();

    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    const { searchTerm, activeIndex } = this.state;
    const photoCount = Math.min(this.props.photoCount, this.props.maxPhotoCount);
    const apiKey = process.env.FLICKR_APP_API_KEY;
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=${photoCount}&page=1&safe_search=1&format=json&nojsoncallback=1`;

    fetch(url)
      .then(res => res.json())
      .then(({photos}) => photos.photo.map(photo => (
        {
          title: photo.title,
          src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          thumb: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`
        }
      )))
      .then(photos => this.setState({
        photos: photos,
        activeIndex: 0,
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

    this.fetchPhotos();
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
    if ( e.target.nodeName === 'IMG' ) {
      this.setState({
        activeIndex: +e.target.dataset.index
      });
    }
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
    const { loading, photos, activeIndex } = this.state;
    const { fetchPhotos, handleFormSubmit, handleInputChange, handleLeftArrowClick, handleRightArrowClick, handleThumbnailClick } = this;

    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }
    return (
      <div className="wrapper">
        <SearchBox
          fetchPhotos={fetchPhotos}
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
