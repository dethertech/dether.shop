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
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
  };

  options = {
    styles: googlemapStyle,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy'
  };

  render = () => {
    const { children, center, changeHandler } = this.props;

    return (
      <GoogleMap
        bootstrapURLKeys={{ key: config.googleMapKey }}
        center={center}
        zoom={16}
        options={this.options}
        onChange={changeHandler}
      >
        {children}
      </GoogleMap>
    );
  }
}

export default GoogleMapWrapper;
