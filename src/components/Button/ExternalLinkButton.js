import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button';

const LinkWrapper = Wrapper.withComponent('a').extend`
  &.active
  &:active {
    color: inherit;
  }
`;

const ExternalLinkButton = ({ children, theme, fullWidth, href, ...rest }) => (
  <LinkWrapper fullWidth={fullWidth} theme={theme} href={href} {...rest}>
    {children}
  </LinkWrapper>
);

ExternalLinkButton.propTypes = {
  fullWidth: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'light']),
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ExternalLinkButton.defaultProps = {
  fullWidth: false,
  theme: 'light',
};

export default ExternalLinkButton;
