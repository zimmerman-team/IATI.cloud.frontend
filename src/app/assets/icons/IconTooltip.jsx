import React from 'react';

const SvgComponent = (props) => (
  <svg width={14} height={14} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#FFF" d="M-548-2140H732v3491H-548z" />
      <path d="M-1-1h16v16H-1z" />
      <path
        fill="#A1AEBD"
        fillRule="nonzero"
        d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333zm.667 10H6.333v-4h1.334v4zm0-5.333H6.333V3.667h1.334V5z"
      />
    </g>
  </svg>
);

export default SvgComponent;
