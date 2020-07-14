import React from 'react';

const IconChecked = (props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <circle
      fill="#fff"
      cx="50"
      cy="50"
      r="30"
      stroke={props.color}
      strokeWidth="20"
    />
  </svg>
);

export default IconChecked;
