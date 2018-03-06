import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
export const ShopRouter = ({ hasShop, isUserVerified }) => (!hasShop ?
  <Switch>
    <Route exact path="/add-form" component={AddShopForm} />
    <Route exact path="/add-form/verification" component={AddFormVerification} />
    {!isUserVerified && <Route exact path="/add-phone" component={PhoneVerification} />}
    <Route path="/" component={AddShopHome} />
  </Switch>
  :
  <ShowShop />
);

ShopRouter.propTypes = {
  isUserVerified: PropTypes.bool.isRequired,
  hasShop: PropTypes.bool.isRequired
};

const mapStateToProps = ({ user, shop }) => ({
  isUserVerified: user.isCertified,
  hasShop: !!shop.shop
});

export default withRouter(connect(mapStateToProps, null)(ShopRouter));
