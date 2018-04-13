/* eslint-disable max-len, max-lines */
import React from 'react';

const Name = props => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 18 18"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>icon seller</title>
    <defs>
      <circle id="a" cx={7.512} cy={7.512} r={7.512} />
    </defs>
    <g transform="translate(1.327 1.621)" fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <circle
        stroke="#2A2B43"
        strokeWidth={0.8}
        cx={7.512}
        cy={7.512}
        r={7.912}
      />
      <g mask="url(#b)" stroke="#2A2B43" strokeWidth={0.8}>
        <g transform="translate(3.224 2.343)">
          <circle cx={4.282} cy={2.322} r={2.142} />
          <rect x={0.412} y={6.476} width={7.74} height={3.484} rx={1.742} />
        </g>
      </g>
    </g>
  </svg>
);

export default Name;
