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
    zoom: 10,
  };

  options = {
    styles: googlemapStyle,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy',
    minZoom: 5,
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
        onGoogleApiLoaded={({ map, maps }) => {
          const forbiddenCountriesLayer = new maps.ImageMapType({
            getTileUrl: (coord, zoomCountry) => {
              // eslint-disable-next-line
              const s = Math.pow(2, zoomCountry);
              const twidth = 256;
              const theight = 256;

              const gBl = map
                .getProjection()
                .fromPointToLatLng(
                  new maps.Point(
                    coord.x * twidth / s,
                    (coord.y + 1) * theight / s,
                  ),
                ); // bottom left / SW

              const gTr = map
                .getProjection()
                .fromPointToLatLng(
                  new maps.Point(
                    (coord.x + 1) * twidth / s,
                    coord.y * theight / s,
                  ),
                ); // top right / NE

              // eslint-disable-next-line
             const bbox = gBl.lng() + "," + gBl.lat() + "," + gTr.lng() + "," + gTr.lat();

              let url = config.geoServer;
              url += '?&service=WMS';
              url += '&version=1.1.0';
              url += '&request=GetMap';
              url += '&layers=dether:selection_non_authorized_4326';
              url += '&styles=';
              url += '&format=image/png';
              url += '&TRANSPARENT=TRUE';
              url += '&srs=EPSG:3857';
              url += `&bbox=${bbox}`;
              url += '&width=256';
              url += '&height=256';
              return url;
            },

            tileSize: new maps.Size(256, 256),
            opacity: 0.85,
            isPng: true,
          });
          map.overlayMapTypes.push(forbiddenCountriesLayer);
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        {children}
      </GoogleMap>
    );
  };
}

export default GoogleMapWrapper;
