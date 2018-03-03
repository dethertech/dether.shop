import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import WrapperMap from './GoogleMapWrapper/';
import ShopMarker from './Markers/ShopMarker';
import InfoCard from './InfoCard/';
import SearchBar from './SearchBar/';
import {
  setCenterPosition as setCenterPositionAction,
  setMapInitiated as setMapInitiatedAction,
  fetchAll as fetchAllAction,
  fetchPosition as fetchPositionAction,
  fetchUserInfo as fetchUserInfoAction
} from '../../actions/map';
import { distance, getClusterData } from '../../helpers/map';

const MapWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  overflow: hidden;

  /* hide google legal mentions */
  .gmnoprint,
  .gm-style-cc,
  iframe + div {
    display: none !important;
  }
`;

export class Map extends Component {
  static propTypes = {
    setCenterPosition: PropTypes.func.isRequired,
    setMapInitiated: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired,
    fetchPosition: PropTypes.func.isRequired,
    fetchUserInfo: PropTypes.func.isRequired,
    centerPosition: PropTypes.shape({}).isRequired,
    mapInitiated: PropTypes.bool.isRequired,
    shops: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.shopsCluster = [];
    this.propsMap = {
      center: this.props.centerPosition,
      zoom: 16,
      bounds: { nw: { lat: 85, lng: -180 }, se: { lat: -85, lng: 180 } },
      size: { width: 375, height: 600 }
    };
  }

  async componentWillMount() {
    const {
      centerPosition,
      fetchAll,
      fetchPosition,
      fetchUserInfo,
      setMapInitiated,
      shops
    } = this.props;

    this.updateCluster(shops);

    await Promise.all([fetchPosition(), fetchUserInfo()]);
    fetchAll(centerPosition);
    setMapInitiated();
  }

  shouldComponentUpdate(nextProps /* , nextState */) {
    const keysToTest = ['centerPosition', 'mapInitiated', 'shops'];
    let needUpdate = false;
    keysToTest.forEach(e => {
      needUpdate = needUpdate || nextProps[e] !== this.props[e];
    });
    return needUpdate;
  }

  componentWillUpdate(nextProps) {
    this.updateCluster(nextProps.shops);
  }

  updateCluster(shops) {
    this.shopsCluster = getClusterData(shops, this.propsMap);
  }

  changeHandler = propsMap => {
    const { center } = propsMap;
    const { mapInitiated, setCenterPosition, fetchAll, centerPosition } = this.props;
    this.propsMap = propsMap;
    // Fetch shops if position changed more than 100m

    if (mapInitiated && distance(centerPosition, center) > 100) {
      setCenterPosition(center);
      const radius = distance(center, propsMap.bounds.se) / 1000;
      fetchAll(center, radius);
    }
  };

  render() {
    const { centerPosition } = this.props;
    const ShopsMarkers = this.shopsCluster.map(shop => (
      <ShopMarker {...shop} key={shop.id} shop={shop} />
    ));
    return (
      <MapWrapper>
        <WrapperMap changeHandler={this.changeHandler} center={centerPosition}>
          {ShopsMarkers}
        </WrapperMap>
        <InfoCard />
        <SearchBar />
      </MapWrapper>
    );
  }
}

const mapStateToProps = ({ app, map }) => ({
  ...app,
  ...map
});

const mapDispatchToProps = dispatch => ({
  setCenterPosition: bindActionCreators(setCenterPositionAction, dispatch),
  setMapInitiated: bindActionCreators(setMapInitiatedAction, dispatch),
  fetchAll: bindActionCreators(fetchAllAction, dispatch),
  fetchPosition: bindActionCreators(fetchPositionAction, dispatch),
  fetchUserInfo: bindActionCreators(fetchUserInfoAction, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map));
