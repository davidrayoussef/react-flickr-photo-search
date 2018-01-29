import React from 'react';
import { render } from 'react-dom';
import FlickrApp from './components/FlickrApp';
import './style.css';

render(
  <FlickrApp />,
  document.getElementById("app")
);
