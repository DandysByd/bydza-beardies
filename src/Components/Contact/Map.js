import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import '../../Styles/map.css'


function Map() {


  return <div className="map-div">
    <iframe
      id='map'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3661785193103!2d15.77325844424222!3d50.02323401092903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcc9b4023cf59%3A0xdc9fdc4fe5d20d8b!2zxb1lbGV6bmnEjW7DrWhvIHBsdWt1IDIxODksIDUzMCAwMiBQYXJkdWJpY2UgVi1aZWxlbsOpIFDFmWVkbcSbc3TDrQ!5e0!3m2!1scs!2scz!4v1644320870355!5m2!1scs!2scz"
      height="480px"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    />
  </div>;
}

export default Map;
