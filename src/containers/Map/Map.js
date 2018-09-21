import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import WrapperMap from './GoogleMapWrapper';
import ShopMarker from './Markers/ShopMarker';
import InfoCard from './InfoCard/';
import SearchBar from './SearchBar/';
import IconLocalisation from '../../components/Icon/svg/Localisation';

import {
  setCenterPosition as setCenterPositionAction,
  setMapInitiated as setMapInitiatedAction,
  fetchAll as fetchAllAction,
  fetchPosition as fetchPositionAction,
} from '../../actions/map';
import { initializeClientInfo as initializeClientInfoAction } from '../../actions/app';
import { distance, getClusterData, LatLng } from '../../helpers';
import tokens from '../../styles/tokens';

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CenterIcon = styled.div`
  position: absolute;
  right: ${tokens.spaces.s};
  top: ${tokens.spaces.xxl};
  margin-top: ${tokens.spaces.xxl};
  padding: ${tokens.spaces.s};
  cursor: pointer;
`;

export class Map extends Component {
  static propTypes = {
    setCenterPosition: PropTypes.func.isRequired,
    setMapInitiated: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired,
    fetchPosition: PropTypes.func.isRequired,
    initializeClientInfo: PropTypes.func.isRequired,
    centerPosition: PropTypes.shape({}).isRequired,
    mapInitiated: PropTypes.bool.isRequired,
    shops: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      shopsCluster: [],
    };
    this.propsMap = {
      center: this.props.centerPosition,
      zoom: 16,
      bounds: { nw: { lat: 85, lng: -180 }, se: { lat: -85, lng: 180 } },
      size: { width: 375, height: 600 },
    };
  }

  async componentDidMount() {
    const {
      fetchPosition,
      initializeClientInfo,
      setMapInitiated,
      shops,
    } = this.props;

    this.updateCluster(shops);

    await Promise.all([fetchPosition(), initializeClientInfo()]);
    this.interval = setInterval(this.refreshShops, 30000);
    this.refreshShops();
    setMapInitiated();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shops !== this.props.shops) {
      this.updateCluster(nextProps.shops);
    }
  }

  shouldComponentUpdate(nextProps /* , nextState */) {
    const keysToTest = ['centerPosition', 'mapInitiated', 'shops'];
    let needUpdate = false;
    keysToTest.forEach(e => {
      needUpdate = needUpdate || nextProps[e] !== this.props[e];
    });
    return needUpdate;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  refreshShops = () => {
    const { centerPosition, fetchAll } = this.props;
    fetchAll(centerPosition, 1000);
  };

  updateCluster = shops => {
    this.setState({
      shopsCluster: getClusterData(shops, this.propsMap),
    });
  };

  changeHandler = propsMap => {
    const center = LatLng(propsMap.center);
    const {
      mapInitiated,
      setCenterPosition,
      fetchAll,
      centerPosition,
    } = this.props;
    this.propsMap = { ...propsMap, center };

    // Fetch shops if position changed more than 100m
    if (mapInitiated && distance(centerPosition, center) > 100) {
      setCenterPosition(center);
      const radius = distance(center, propsMap.bounds.se) / 1000;
      fetchAll(center, radius);
    }
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.updateCluster(this.props.shops);
    }, 200);
  };

  mapClick = () => {
    if (this.refSearch) {
      this.refSearch.getWrappedInstance().forceBlur();
    }
  };

  zoomPlus = () => {
    this.propsMap.zoom += 2;
    this.forceUpdate();
  };

  render() {
    const { centerPosition, fetchPosition } = this.props;
    const ShopsMarkers = this.state.shopsCluster.map(shop => (
      <ShopMarker
        {...shop}
        key={shop.id}
        shop={shop}
        onClusterClick={this.zoomPlus}
      />
    ));
    return (
      <MapWrapper>
        <WrapperMap
          onClick={this.mapClick}
          changeHandler={this.changeHandler}
          center={centerPosition}
          zoom={this.propsMap.zoom}
        >
          {ShopsMarkers}
        </WrapperMap>
        <InfoCard />
        <SearchBar
          ref={e => {
            this.refSearch = e;
          }}
        />
        <CenterIcon onClick={fetchPosition}>
          <IconLocalisation />
        </CenterIcon>
      </MapWrapper>
    );
  }
}

const mapStateToProps = ({ map }) => ({
  ...map,
});

const mapDispatchToProps = dispatch => ({
  setCenterPosition: bindActionCreators(setCenterPositionAction, dispatch),
  setMapInitiated: bindActionCreators(setMapInitiatedAction, dispatch),
  fetchAll: bindActionCreators(fetchAllAction, dispatch),
  fetchPosition: bindActionCreators(fetchPositionAction, dispatch),
  initializeClientInfo: bindActionCreators(
    initializeClientInfoAction,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
