import React, { Component } from 'react';
import SearchBox from './SearchBox';
import DisplayImage from './DisplayImage';
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

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    console.log(this);
    console.log(e.target);
    this.setState({
      activeIndex: +e.target.dataset.index
    });
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBox />
        <DisplayImage photos={this.state.photos} activeIndex={this.state.activeIndex} />
        <Gallery photos={this.state.photos} handleClick={this.handleClick} />
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
