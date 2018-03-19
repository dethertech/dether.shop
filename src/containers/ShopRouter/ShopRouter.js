import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hasEnoughMoneyToAddShop } from '../../reducers/user';
/*
Containers
*/
import AddShopHome from '../AddShopHome';
import PhoneVerification from '../PhoneVerification';
import AddShopForm from '../AddShopForm';
import AddFormVerification from '../AddFormVerification';
import ShowShop from '../ShowShop';

/**
* AddShopRouter containers
* @extends PureComponent
*/
class ShopRouter extends PureComponent {
  static propTypes = {
    isUserVerified: PropTypes.bool.isRequired,
    hasShop: PropTypes.bool.isRequired,
    hasAccount: PropTypes.bool.isRequired
  };

  render() {
    const { hasShop, isUserVerified, hasAccount } = this.props;
    if (hasShop)
      return <ShowShop />;
    if (hasAccount) {
      return (
        <Switch>
          {isUserVerified && <Route exact path="/add-form" component={AddShopForm} />}
          {isUserVerified &&
            <Route exact path="/add-form/verification" component={AddFormVerification} />}
          {!isUserVerified && <Route exact path="/add-phone" component={PhoneVerification} />}
          <Route path="/" component={AddShopHome} />
        </Switch>
      );
    }
    return <Route path="/" component={AddShopHome} />;
  }
}

const mapStateToProps = ({ user, shop, app }) => ({
  isUserVerified: user.isCertified,
  hasAccount: app.isMetamaskInstalled && hasEnoughMoneyToAddShop(user),
  hasShop: !!shop.shop
});

export default withRouter(connect(mapStateToProps, null)(ShopRouter));
