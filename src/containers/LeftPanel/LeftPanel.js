import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import LeftPanelPage from './LeftPanelPage';
import TermsModal from './TermsModal';

import {
  getShop as getShopHelper,
  getBalance as getBalanceHelper,
  isWeb3 as isWeb3Helper,
  isSmsReg as isSmsRegHelper
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
import { addShop as addShopAction } from '../../actions/shop';

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
    addShop: PropTypes.func.isRequired,
    hasShop: PropTypes.bool.isRequired,
    getBalance: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
    isCertified: PropTypes.func.isRequired,
    setUserCertified: PropTypes.func.isRequired,
    hasTransactionPending: PropTypes.bool.isRequired,
    setAppInitialized: PropTypes.func.isRequired,
    balance: PropTypes.shape({
      eth: PropTypes.number.isRequired,
      dth: PropTypes.number.isRequired,
    }).isRequired
  };
  state = {
    isModalVisible: false
  };

  componentWillMount() {
    this.initApp();
  }

  toggleModal = () => {
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  };

  async initApp() {
    const {
      isAppInitialized,
      setMetamaskInstalled,
      setAppInitialized,
      setEthAddress,
      isWeb3,
      getShop,
      addShop,
      getBalance,
      setBalance,
      isCertified,
      setUserCertified
    } = this.props;

    if (!isAppInitialized) {
      const ethAddress = await isWeb3();
      if (ethAddress) {
        const [shop, balance, certified] = await Promise.all([
          getShop(),
          getBalance(),
          isCertified()
        ]);

        if (shop) addShop(shop);
        if (balance) setBalance(balance);
        if (certified) setUserCertified(certified);
        setMetamaskInstalled(true);
        setEthAddress(ethAddress);
        setAppInitialized(true);
      }
    }
  }

  render() {
    const { isModalVisible } = this.state;
    const { hasShop, hasTransactionPending, isAppInitialized, balance } = this.props;

    return (
      <Fragment>
        <LeftPanelPage
          hasShop={hasShop}
          hasTransactionPending={hasTransactionPending}
          isAppInitialized={isAppInitialized}
          toggleModal={this.toggleModal}
          balance={balance}
        />
        {isModalVisible && <TermsModal closeFunc={this.toggleModal} />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ app, shop, user }) => ({
  isAppInitialized: app.isAppInitialized,
  hasShop: !!shop.shop,
  hasTransactionPending: !!shop.transactionHash,
  balance: user.balance
});

const mapDispatchToProps = dispatch => ({
  setAppInitialized: bindActionCreators(setAppInitializedAction, dispatch),
  setMetamaskInstalled: bindActionCreators(setMetamaskInstalledAction, dispatch),
  setEthAddress: bindActionCreators(setEthAddressAction, dispatch),
  addShop: bindActionCreators(addShopAction, dispatch),
  setBalance: bindActionCreators(setBalanceAction, dispatch),
  setUserCertified: bindActionCreators(setUserCertifiedAction, dispatch),
  isWeb3: isWeb3Helper,
  getShop: getShopHelper,
  getBalance: getBalanceHelper,
  isCertified: isSmsRegHelper
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftPanel));
