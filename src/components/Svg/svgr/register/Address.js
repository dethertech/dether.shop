/* eslint-disable max-len, max-lines */
import React from 'react';

const Address = props => (
  <svg
    width={12}
    height={16}
    viewBox="0 0 15 19"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>icon localisation</title>
    <defs>
      <path
        d="M6.512 16.584s6.375-6.249 6.375-9.77a6.375 6.375 0 1 0-12.75 0c0 3.521 6.375 9.77 6.375 9.77z"
        id="a"
      />
    </defs>
    <g transform="translate(1 .826)" fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <path
        stroke="#2A2B43"
        strokeWidth={0.8}
        d="M6.232 16.87a42.26 42.26 0 0 1-1.009-1.044 43.537 43.537 0 0 1-2.212-2.557 26.812 26.812 0 0 1-1.806-2.53C.26 9.215-.263 7.895-.263 6.815a6.775 6.775 0 0 1 13.55 0c0 1.08-.524 2.4-1.469 3.924-.5.808-1.11 1.656-1.806 2.53a43.537 43.537 0 0 1-3.22 3.6l-.28.275-.28-.274z"
      />
      <circle
        stroke="#2A2B43"
        strokeWidth={0.8}
        mask="url(#b)"
        cx={6.512}
        cy={7}
        r={3.197}
      />
    </g>
  </svg>
);

export default Address;
