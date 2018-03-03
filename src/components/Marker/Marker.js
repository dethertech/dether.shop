import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//  __MAPBOX__ import MapboxGl from 'mapbox-gl';
const MapboxGl = {}; // __MAPBOX__ remove

class Marker extends PureComponent {
  static propTypes = {
    handleClick: PropTypes.func,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    mapBox: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    html: PropTypes.string.isRequired,
  };

  static defaultProps = {
    mapBox: false,
    handleClick: () => {},
  };

  static contextTypes = {
    map: PropTypes.shape({})
  };

  componentDidMount() {
    const { mapBox, lat, lng, html, handleClick } = this.props;
    if (mapBox) {
      const el = document.createElement('div');
      el.innerHTML = html;
      el.onclick = handleClick;

      this.marker = new MapboxGl.Marker(el)
        .setLngLat([lng, lat])
        .addTo(this.context.map);
    }
  }

  componentWillUnmount() {
    if (this.props.mapBox)
      this.marker.remove();
  }

  render() {
    const { mapBox, handleClick, children } = this.props;
    if (!mapBox) {
      return (
        <div onClick={handleClick} >
          {children}
        </div>
      );
    }
    return null;
  }
}

export default Marker;
