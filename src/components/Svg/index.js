import React from 'react';
import { PropTypes } from 'prop-types';

import * as icons from './svgr';

function Svg(props) {
  const SelectedIcon = icons[props.type];
  /* eslint-disable no-console */
  if (!SelectedIcon)
    console.warn('The icon ', props.type, ' is not available.');
  /* eslint-enable no-console */
  return SelectedIcon ? <SelectedIcon {...props} /> : null;
}

Svg.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Svg;
