/* eslint-disable max-len, max-lines */
import React from 'react';

const Shop = props => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 33 33"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>icon shop</title>
    <defs>
      <circle id="a" cx={9.694} cy={9.694} r={9.694} />
      <filter
        x="-49%"
        y="-49%"
        width="198%"
        height="198%"
        filterUnits="objectBoundingBox"
        id="b"
      >
        <feMorphology
          radius={2}
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={2.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g transform="translate(6.762 7)" fill="none" fillRule="evenodd">
      <mask id="c" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#000" filter="url(#b)" xlinkHref="#a" />
      <circle
        stroke="#FFF"
        strokeWidth={2}
        fill="#59E1CC"
        cx={9.694}
        cy={9.694}
        r={10.694}
      />
      <g mask="url(#c)" fill="#FFF">
        <path d="M14.131 5.795H5.71l-.546-1.652a.554.554 0 0 0-.526-.38h-1.13a.554.554 0 0 0 0 1.108h.73l.545 1.652 1.94 5.81a.554.554 0 0 0 .527.38h5.162a.554.554 0 0 0 .531-.397l1.72-5.81a.554.554 0 0 0-.53-.71zM8.79 14.53a1.208 1.208 0 1 1-2.416 0 1.208 1.208 0 0 1 2.416 0M13.234 14.53a1.208 1.208 0 1 1-2.417 0 1.208 1.208 0 0 1 2.417 0" />
      </g>
    </g>
  </svg>
);

export default Shop;
