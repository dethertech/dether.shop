import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const shakeAnim = keyframes`
  10%, 90% {transform: translate3d(-1px, 0, 0);}
  20%, 80% {transform: translate3d(2px, 0, 0);}
  30%, 50%, 70% {transform: translate3d(-4px, 0, 0);}
  40%, 60% {transform: translate3d(4px, 0, 0);}
`;

const ShakeWrapper = styled.div`
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  ${({ shake }) =>
    shake &&
    css`
      animation: ${shakeAnim} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    `};
`;

/**
 * Shake component Animation
 * @extends PureComponent
 */

class Shake extends PureComponent {
  static propTypes = {
    toggle: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
      .isRequired,
  };

  static defaultProps = {
    toggle: 0,
  };

  state = {
    shake: false,
    toggle: 0,
  };

  componentWillReceiveProps = ({ toggle: propToggle }) => {
    const { toggle: stateToggle } = this.state;

    if (propToggle > stateToggle) {
      this.setState({ shake: true, toggle: propToggle });
      setTimeout(() => this.setState({ shake: false }), 850);
    }
  };

  render = () => {
    const { children } = this.props;
    const { shake } = this.state;

    return <ShakeWrapper shake={shake}>{children}</ShakeWrapper>;
  };
}

export default Shake;
