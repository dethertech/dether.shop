import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddShopHome from '../AddShopHome';
import PhoneVerification from '../PhoneVerification';
import AddShopForm from '../AddShopForm';
import AddFormVerification from '../AddFormVerification';
import ShowShop from '../ShowShop';

/**
* AddShopRouter containers
* @extends PureComponent
*/
export const ShopRouter = ({ hasShop, isUserVerified }) => {
  if (!hasShop) {
    return (
      <Switch>
        <Route exact path="/add-form" component={AddShopForm} />
        <Route exact path="/add-form/verification" component={AddFormVerification} />
        {!isUserVerified && <Route exact path="/add-phone" component={PhoneVerification} />}
        <Route path="/" component={AddShopHome} />
      </Switch>
    );
  }
  return <ShowShop />;
};

ShopRouter.propTypes = {
  isUserVerified: PropTypes.bool.isRequired,
  hasShop: PropTypes.bool.isRequired
};

const mapStateToProps = ({ user, shop }) => ({
  isUserVerified: user.isCertified,
  hasShop: !!shop.shop,
  hasTransactionPending: !!shop.transactionHash
});

export default withRouter(connect(mapStateToProps, null)(ShopRouter));
