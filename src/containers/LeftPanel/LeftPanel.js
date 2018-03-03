import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  getShop as getShopHelper,
  getBalance as getBalanceHelper,
  isWeb3 as isWeb3Helper
} from '../../helpers/ethereum';
import {
  setAppInitialized as setAppInitializedAction,
  setMetamaskInstalled as setMetamaskInstalledAction
} from '../../actions/app';
import {
  setEthAddress as setEthAddressAction,
  setBalance as setBalanceAction
} from '../../actions/user';
import { setShop as setShopAction } from '../../actions/shop';

import tr from '../../translate';

// component
import LoaderScreen from '../../components/Screens/LoaderScreen';
import AddShopRouter from '../AddShopRouter';

/**
 * LeftPanel containers
 * @extends PureComponent
 */
export class LeftPanel extends PureComponent {
  static propTypes = {
    isAppInitialized: PropTypes.bool.isRequired,
    hasShop: PropTypes.bool.isRequired,
    hasTransactionPending: PropTypes.bool.isRequired,
    setMetamaskInstalled: PropTypes.func.isRequired,
    setAppInitialized: PropTypes.func.isRequired
    // TODO setShop: PropTypes.bool.isRequired
  };

  componentWillMount() {
    this.initApp();
  }

  async initApp() {
    const {
      isAppInitialized,
      setMetamaskInstalled,
      setAppInitialized,
      setEthAddress,
      isWeb3,
      getShop,
      setShop,
      getBalance,
      setBalance
    } = this.props;

    if (!isAppInitialized) {
      const ethAddress = await isWeb3();
      if (ethAddress) {
        const shop = await getShop();
        const balance = await getBalance();
        console.log(balance);
        if (shop) setShop(shop);
        if (balance) setBalance(balance);
        setMetamaskInstalled(true);
        setAppInitialized(true);
        setEthAddress(ethAddress);
      }
    }
  }

  render() {
    const { isAppInitialized, hasShop, hasTransactionPending } = this.props;

    if (!isAppInitialized) {
      return (
        <LoaderScreen
          title={tr('loaderInitializer.title')}
          message={tr('loaderInitializer.message')}
        />
      );
    } else if (!hasShop || hasTransactionPending) {
      console.log('RENDERED AddShop');
      return <AddShopRouter />;
    }
    console.log('RENDERED NOTING');
    return <div>Add shop</div>;
  }
}

const mapStateToProps = ({ app, shop }) => ({
  isAppInitialized: app.isAppInitialized,
  hasShop: !!shop.point,
  hasTransactionPending: !!shop.transactionHash
});

const mapDispatchToProps = dispatch => ({
  // TODO setHasWeb3: bindActionCreators(actions.app.setHasWeb3, dispatch),
  setAppInitialized: bindActionCreators(setAppInitializedAction, dispatch),
  setMetamaskInstalled: bindActionCreators(setMetamaskInstalledAction, dispatch),
  setEthAddress: bindActionCreators(setEthAddressAction, dispatch),
  setShop: bindActionCreators(setShopAction, dispatch),
  setBalance: bindActionCreators(setBalanceAction, dispatch),
  isWeb3: isWeb3Helper,
  getShop: getShopHelper,
  getBalance: getBalanceHelper
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
