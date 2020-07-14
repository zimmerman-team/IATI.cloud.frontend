import React from 'react';

const SvgComponent = (props) => (
  <svg width={10} height={6} {...props}>
    <defs>
      <path id="prefix__a" d="M7 9.5l5 5 5-5z" />
    </defs>
    <use fill="#A1AEBD" transform="translate(-7 -9)" xlinkHref="#prefix__a" />
  </svg>
);

export default SvgComponent;
