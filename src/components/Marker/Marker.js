import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MapMarker = styled.div`
  cursor: pointer;
`;

class Marker extends PureComponent {
  static propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
      .isRequired,
  };

  static defaultProps = {
    handleClick: () => {},
  };

  render() {
    const { handleClick, children } = this.props;

    return <MapMarker onClick={handleClick}>{children}</MapMarker>;
  }
}

export default Marker;
