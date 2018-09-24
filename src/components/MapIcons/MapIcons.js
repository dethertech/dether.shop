import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import tokens from '../../styles/tokens';

import Shop from './Shop';

const FullSVGWrapper = styled.div`
  width: 40px;
  height: 40px;
  transform: translateX(-50%) translateY(-50%);
`;

const Wrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  padding: 0.4rem;
  border-radius: 50%;
  border: solid 0.3rem ${tokens.colors.white};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  background: ${({ bg }) => bg};
  transform: translateX(-50%) translateY(-50%);

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

const isLarge = n => n.toString().length === 1;

const isXLarge = n => n.toString().length === 2;

const isXXLarge = n => n.toString().length > 2;

export const ClusterShopIcon = ({ num }) => (
  <Wrapper
    bg="#59E1CC"
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

export const ShopIcon = () => (
  <FullSVGWrapper>
    <Shop />
  </FullSVGWrapper>
);
