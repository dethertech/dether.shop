import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tokens from '../../styles/tokens';

const buttonThemes = {
  primary: {
    text: tokens.colors.white,
    bg: tokens.colors.gradients.blue,
    border: 'transparent'
  },
  light: {
    text: tokens.colors.blue,
    bg: tokens.colors.white,
    border: tokens.colors.blue
  },
  danger: {
    text: tokens.colors.white,
    bg: tokens.colors.gradients.pink,
    border: 'transparent'
  }
};

export const Wrapper = styled.button`
  display: inline-block;
  font-size: ${tokens.fontSizes.l};
  border-radius: ${tokens.radius.m};
  line-height: 1.15em;
  padding: ${tokens.spaces.s} ${tokens.spaces.l};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${({ theme }) => css`
    color: ${buttonThemes[theme].text}; /* for LinkButton */
    background: ${buttonThemes[theme].bg};
    border: solid 1px ${buttonThemes[theme].border};
  `};

  ${({ disabled }) =>
    disabled &&
    css`
      &,
      &:active {
        background: ${tokens.colors.grey.lighter} !important;
        color: ${tokens.colors.white};
        border-color: transparent;
        box-shadow: none;
        cursor: default;
      }
    `};

  &:active {
    box-shadow: inset 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  }
`;

const Button = ({ onClick, children, theme, fullWidth, disabled }) => (
  <Wrapper fullWidth={fullWidth} theme={theme} disabled={disabled} onClick={onClick}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'light', 'danger']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  theme: 'light',
  onClick: () => {}
};

export default Button;
