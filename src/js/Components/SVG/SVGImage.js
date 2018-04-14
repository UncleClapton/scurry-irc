import React from 'react';

const SVGImage = ({ d, ...props }) => (
  <svg viewBox="0 0 10 10" height="10px" width="10px" {...props}>
    <path fill="currentColor" d={d} />
  </svg>
);

export default SVGImage;
