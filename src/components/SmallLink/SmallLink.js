import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '../../components';

const SmallLink = ({ link, children }) => (
  <ButtonLink isSmall onClick={() => window.open(link)}>
    {children}
  </ButtonLink>
);

SmallLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
};

SmallLink.defaultProps = {
  children: null,
};

export default SmallLink;
