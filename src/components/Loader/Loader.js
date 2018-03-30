import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const loaderSize = {
  l: '6rem',
  s: '2rem',
  xs: '1.6rem',
  m: '4rem',
};

const Loader = styled.div`
  font-size: ${({ size }) => loaderSize[size]};
  padding: 0.2em;
  width: 1.6em;
  height: 1.6em;
  overflow: hidden;
  display: inline-block;

  &::after {
    display: block;
    content: '';
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 0.1em solid rgba(0, 0, 0, 0.1);
    border-top-color: rgba(0, 0, 0, 0.35);
    animation: ${spin} 0.5s infinite linear;
    transform: translateZ(0);
  }
`;

Loader.propTypes = {
  size: PropTypes.oneOf(['l', 's', 'm']),
};

Loader.defaultProps = {
  size: 'm',
};

export default Loader;
