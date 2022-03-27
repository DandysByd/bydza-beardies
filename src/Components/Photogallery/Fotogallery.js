import React from 'react'
import { useState, useEffect, useRef  } from 'react/cjs/react.development'
import gallery from '../../database/gallery'
import '../../Styles/fotogallery.css'
import useInterval from 'use-interval'
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: require('../../images/Gallery/1.jpg'),
  },
  {
    original: require('../../images/Gallery/2.jpg'),
  },
  {
    original: require('../../images/Gallery/3.jpg'),
  },
  {
    original: require('../../images/Gallery/4.jpg'),
  },
  {
    original: require('../../images/Gallery/5.jpg'),
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery showFullscreenButton={false} autoPlay={true} showPlayButton={false} items={images} />;

  }
}

   
export default MyGallery