import React from 'react';

const BurgerSVG = props => (
  <svg viewBox="0 0 10 10" height="10px" width="10px" {...props}>
    <path fill="currentColor" d="M0 1v1h10V1H0zm.018 4v1h10V5h-10zM0 9v1h10V9H0z" />
  </svg>
);

export default BurgerSVG;
