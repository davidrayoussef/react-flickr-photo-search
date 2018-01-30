import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlickrApp extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <header>
          <input placeholder="Search" />
        </header>
        <main>
          <img style={{border: '1px solid black', height: 500 }} />
        </main>
        <footer>
          <img style={{border: '1px solid black'}} />
          <img style={{border: '1px solid black'}} />
          <img style={{border: '1px solid black'}} />
          <img style={{border: '1px solid black'}} />
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
