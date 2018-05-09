/* eslint-disable max-len */
import React from 'react';

const Avatar = props => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <circle id="a" cx={31.571} cy={31.571} r={31.571} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle
        cx={31.571}
        cy={31.571}
        r={31.571}
        transform="translate(.657)"
        fill="#000"
        fillRule="nonzero"
      />
      <circle
        cx={31.571}
        cy={31.571}
        r={31.571}
        transform="translate(.657)"
        fill="#EDD36B"
        fillRule="nonzero"
      />
      <circle
        stroke="#FFF"
        strokeWidth={2}
        cx={32.228}
        cy={31.571}
        r={30.571}
      />
      <g transform="translate(.657)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M39.953 21.529h5.824a3.788 3.788 0 0 1 3.789 3.788v16.851a3.788 3.788 0 0 1-3.789 3.789H17.364a3.788 3.788 0 0 1-3.788-3.789v-16.85a3.788 3.788 0 0 1 3.788-3.79h5.824v-.942c0-4.187 3.393-7.581 7.574-7.581h1.618c4.183 0 7.573 3.394 7.573 7.581v.943zm-1.894 0v-.943A5.683 5.683 0 0 0 32.38 14.9h-1.618a5.684 5.684 0 0 0-5.68 5.687v.943H38.06l-.001-.001z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
);

export default Avatar;
