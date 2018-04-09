import React, { PureComponent } from 'react';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';

/*
  Constants
 */
import { config, googlemapStyle } from '../../../constants';

/**
 * GoogleMapWrapper
 * @extends PureComponent
 */
class GoogleMapWrapper extends PureComponent {
  static propTypes = {
    center: PropTypes.shape({}).isRequired,
    changeHandler: PropTypes.func.isRequired,
    zoom: PropTypes.number,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
      .isRequired,
  };

  static defaultProps = {
    onClick: () => {},
    zoom: 16,
  };

  options = {
    styles: googlemapStyle,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy',
  };

  render = () => {
    const { children, center, changeHandler, onClick, zoom } = this.props;

    return (
      <GoogleMap
        bootstrapURLKeys={{ key: config.googleMapKey }}
        center={center}
        zoom={zoom}
        options={this.options}
        onChange={changeHandler}
        onClick={onClick}
      >
        {children}
      </GoogleMap>
    );
  };
}

export default GoogleMapWrapper;
