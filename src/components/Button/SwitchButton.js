import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button';

const SwitchButton = ({ children, fullWidth, checked, onClick, ...rest }) => (
  <Wrapper
    fullWidth={fullWidth}
    theme={checked ? 'primary' : 'light'}
    onClick={onClick}
    {...rest}
  >
    {children}
  </Wrapper>
);

SwitchButton.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SwitchButton.defaultProps = {
  checked: false,
  fullWidth: false,
};

export default SwitchButton;
