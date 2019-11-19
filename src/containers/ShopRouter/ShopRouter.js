import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hasEnoughMoneyToAddShop } from '../../reducers/user';
import { hasGoodNetwork } from '../../reducers/app';

/*
Containers
*/
import AddShop from '../AddShop';
import Home from '../Home';

import ShowShop from '../ShowShop';

/**
 * AddShopRouter containers
 * @extends PureComponent
 */
class ShopRouter extends PureComponent {
  static propTypes = {
    hasShop: PropTypes.bool.isRequired,
    isUserReady: PropTypes.bool.isRequired,
  };

  render = () => {
    const { hasShop, isUserReady } = this.props;
    if (hasShop) return <ShowShop />;
    if (isUserReady) {
      return <AddShop />;
    }
    return <Home />;
  };
}

const mapStateToProps = ({ user, shop, app }) => ({
  isUserReady:
    app.isMetamaskInstalled &&
    hasEnoughMoneyToAddShop(user, app.licencePrice) &&
    hasGoodNetwork(app) &&
    app.areTermsAccepted,
  hasShop: !!shop.shop,
});

export default connect(mapStateToProps, null)(ShopRouter);
