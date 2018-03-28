import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import tokens from '../../styles/tokens';

const Wrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  padding: 0.4rem;
  border-radius: 50%;
  border: solid 0.3rem ${tokens.colors.white};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  background: ${({ bg }) => bg};

  ${({ l }) =>
    l &&
    css`
      padding-top: 0.6rem;
      width: 3rem;
      height: 3rem;
    `};

  ${({ xl }) =>
    xl &&
    css`
      padding-top: 0.9rem;
      width: 3.6rem;
      height: 3.6rem;
    `};

  ${({ xxl }) =>
    xxl &&
    css`
      padding-top: 1.3rem;
      width: 4.6rem;
      height: 4.6rem;
    `};

  svg {
    display: block;
    width: 1.2rem;
    fill: ${tokens.colors.white};
    overflow: visible;
  }

  div {
    color: ${tokens.colors.white};
    text-align: center;
    font-size: 1.2rem;
    line-height: 1;
    font-weight: bold;
  }
`;

const isLarge = n => n.toString().length === 2;

const isXLarge = n => n.toString().length === 3;

const isXXLarge = n => n.toString().length > 3;

export const ClusterShopIcon = ({ num }) => (
  <Wrapper
    bg="#EDD36B"
    l={isLarge(num)}
    xl={isXLarge(num)}
    xxl={isXXLarge(num)}
  >
    <div>{num}</div>
  </Wrapper>
);

ClusterShopIcon.propTypes = {
  num: PropTypes.number.isRequired,
};

/* eslint-disable max-len */
export const ShopIcon = () => (
  <Wrapper bg="#EDD36B">
    <svg viewBox="0 0 22 22">
      <circle
        fill="none"
        strokeWidth="0.3rem"
        stroke="#fff"
        cx="11"
        cy="7"
        r="5"
      />
      <rect width="20" height="15" x="1" y="7" rx="2" />
    </svg>
  </Wrapper>
);
/* eslint-enable max-len */
