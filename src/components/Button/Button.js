import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tokens from '../../styles/tokens';

const buttonThemes = {
  primary: {
    text: tokens.colors.white,
    bg: tokens.colors.gradients.blue,
    border: 'transparent',
  },
  light: {
    text: tokens.colors.blue,
    bg: tokens.colors.white,
    border: tokens.colors.blue,
  },
  danger: {
    text: tokens.colors.blue,
    bg: tokens.colors.white,
    border: tokens.colors.blue,
  },
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

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ isSmall }) =>
    isSmall &&
    css`
      font-size: ${tokens.fontSizes.s};
      padding: ${tokens.spaces.xs} ${tokens.spaces.m};
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

const Button = ({
  onClick,
  children,
  theme,
  fullWidth,
  disabled,
  isSmall,
  width,
}) => (
  <Wrapper
    isSmall={isSmall}
    fullWidth={fullWidth}
    theme={theme}
    disabled={disabled}
    onClick={onClick}
    width={width}
  >
    {children}
  </Wrapper>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  isSmall: PropTypes.bool,
  fullWidth: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'light', 'danger']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  theme: 'light',
  isSmall: false,
  width: null,
  onClick: () => {},
};

export default Button;
