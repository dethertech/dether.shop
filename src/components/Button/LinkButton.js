import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper } from './Button';

const LinkWrapper = Wrapper.withComponent(Link).extend`
  &.active
  &:active {
    color: inherit;
  }
`;

const LinkButton = ({ children, theme, fullWidth, to, ...rest }) => (
  <LinkWrapper fullWidth={fullWidth} theme={theme} to={to} {...rest}>
    {children}
  </LinkWrapper>
);

LinkButton.propTypes = {
  fullWidth: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'light']),
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

LinkButton.defaultProps = {
  fullWidth: false,
  theme: 'light',
};

export default LinkButton;
