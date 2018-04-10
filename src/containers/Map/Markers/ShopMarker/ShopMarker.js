import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setShopOnCard as setShopOnCardAction,
  setCenterPosition as setCenterPositionAction,
} from '../../../../actions/map';
import { Marker } from '../../../../components';
import { ShopIcon, ClusterShopIcon } from '../../../../components/MapIcons';

class ShopMarker extends PureComponent {
  static propTypes = {
    setShopOnCard: PropTypes.func.isRequired,
    setCenterPosition: PropTypes.func.isRequired,
    shop: PropTypes.shape({}).isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    numPoints: PropTypes.number.isRequired,
    onClusterClick: PropTypes.func.isRequired,
  };

  static contextTypes = {
    map: PropTypes.shape({}),
  };

  handleClick = () => {
    const { setShopOnCard, shop } = this.props;
    setShopOnCard(shop);
  };

  handlerClusterClick = () => {
    const { lat, lng } = this.props;
    this.props.setCenterPosition({ lat, lng });
    if (this.props.onClusterClick) this.props.onClusterClick();
  };

  render() {
    const { lat, lng, numPoints } = this.props;
    return (
      <Marker
        lat={lat}
        lng={lng}
        handleClick={
          numPoints === 1 ? this.handleClick : this.handlerClusterClick
        }
      >
        {numPoints === 1 ? <ShopIcon /> : <ClusterShopIcon num={numPoints} />}
      </Marker>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setShopOnCard: bindActionCreators(setShopOnCardAction, dispatch),
  setCenterPosition: bindActionCreators(setCenterPositionAction, dispatch),
});

export default connect(null, mapDispatchToProps)(ShopMarker);
