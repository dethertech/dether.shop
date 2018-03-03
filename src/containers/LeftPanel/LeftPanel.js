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
  setBalance as setBalanceAction,
  setUserCertified as setUserCertifiedAction
} from '../../actions/user';
import { setShop as setShopAction } from '../../actions/shop';

import tr from '../../translate';

// component
import LoaderScreen from '../../components/Screens/LoaderScreen';
import AddShopRouter from '../AddShopRouter';

const isCertifiedHelper = () => true;

/**
 * LeftPanel containers
 * @extends PureComponent
 */
export class LeftPanel extends PureComponent {
  static propTypes = {
    isAppInitialized: PropTypes.bool.isRequired,
    setMetamaskInstalled: PropTypes.func.isRequired,
    setEthAddress: PropTypes.func.isRequired,
    isWeb3: PropTypes.func.isRequired,
    getShop: PropTypes.func.isRequired,
    setShop: PropTypes.func.isRequired,
    hasShop: PropTypes.bool.isRequired,
    getBalance: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
    isCertified: PropTypes.func.isRequired,
    setUserCertified: PropTypes.func.isRequired,
    hasTransactionPending: PropTypes.bool.isRequired,
    setAppInitialized: PropTypes.func.isRequired,
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
      setBalance,
      isCertified,
      setUserCertified
    } = this.props;

    if (!isAppInitialized) {
      const ethAddress = await isWeb3();
      if (ethAddress) {
        const [shop, balance, certified] = await Promise.all([
          getShop(), getBalance(), isCertified()
        ]);

        if (shop) setShop(shop);
        if (balance) setBalance(balance);
        if (certified) setUserCertified(certified);
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
      return <AddShopRouter />;
    }
    return <div>Add shop</div>;
  }
}

const mapStateToProps = ({ app, shop }) => ({
  isAppInitialized: app.isAppInitialized,
  hasShop: !!shop.shop,
  hasTransactionPending: !!shop.transactionHash
});

const mapDispatchToProps = dispatch => ({
  setAppInitialized: bindActionCreators(setAppInitializedAction, dispatch),
  setMetamaskInstalled: bindActionCreators(setMetamaskInstalledAction, dispatch),
  setEthAddress: bindActionCreators(setEthAddressAction, dispatch),
  setShop: bindActionCreators(setShopAction, dispatch),
  setBalance: bindActionCreators(setBalanceAction, dispatch),
  setUserCertified: bindActionCreators(setUserCertifiedAction, dispatch),
  isWeb3: isWeb3Helper,
  getShop: getShopHelper,
  getBalance: getBalanceHelper,
  isCertified: isCertifiedHelper
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
