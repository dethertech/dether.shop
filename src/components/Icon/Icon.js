import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  display: block;
  overflow: visible;
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `};
`;

const Line = styled.line.attrs({
  vectorEffect: 'non-scaling-stroke',
})`
  stroke: ${({ theme }) => theme.color};
  stroke-width: ${({ theme }) => theme.strokeWidth};
  fill: ${({ theme }) => theme.fill};
`;

const Polyline = Line.withComponent('polyline');

const icons = {
  close: theme => (
    <React.Fragment>
      <Line theme={theme} x1="0" y1="0" x2="12" y2="12" />
      <Line theme={theme} x1="0" y1="12" x2="12" y2="0" />
    </React.Fragment>
  ),
  prev: theme => (
    <React.Fragment>
      <Line theme={theme} x1="0" y1="6" x2="12" y2="6" />
      <Polyline theme={theme} points="6 0 0 6 6 12" />
    </React.Fragment>
  ),
  carretDown: theme => <Polyline theme={theme} points="0 3 6 9 12 3" />,
  carretUp: theme => <Polyline theme={theme} points="0 9 6 3 12 9" />,
  carretRight: theme => <Polyline theme={theme} points="3 0 9 6 3 12" />,
  check: theme => <Polyline theme={theme} points="0 6 4 10 12 1" />,
};

const Icon = ({ size, name, color, strokeWidth, fill }) => (
  <Svg viewBox="0 0 12 12" size={size}>
    {icons[name]({ color, strokeWidth, fill })}
  </Svg>
);

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  fill: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

Icon.defaultProps = {
  size: '1.2rem',
  color: '#000',
  strokeWidth: '0.1rem',
  fill: 'none',
};

export default Icon;
