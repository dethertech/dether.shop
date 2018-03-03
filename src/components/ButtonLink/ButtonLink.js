import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tokens from '../../styles/tokens';

const buttonThemes = {
  primary: {
    text: tokens.colors.blue
  },
  light: {
    text: tokens.colors.grey.darker
  }
};

const Wrapper = styled.button`
  display: inline-block;
  font-size: ${tokens.fontSizes.m};
  padding-bottom: 0.1em;

  ${({ theme }) => css`
    color: ${buttonThemes[theme].text};
    border-bottom: solid 1px ${buttonThemes[theme].text};
  `};

  ${({ disabled }) =>
    disabled &&
    css`
      &,
      &:active {
        opacity: 0.6;
      }
    `};
`;

const ButtonLink = ({ onClick, children, theme, disabled }) => (
  <Wrapper theme={theme} disabled={disabled} onClick={onClick}>
    {children}
  </Wrapper>
);

ButtonLink.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'light']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

ButtonLink.defaultProps = {
  disabled: false,
  theme: 'light',
  onClick: () => {}
};

export default ButtonLink;
