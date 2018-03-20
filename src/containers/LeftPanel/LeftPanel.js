import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import config from '../../constants/config';
import LeftPanelPage from './LeftPanelPage';
import TermsModal from './TermsModal';

import {
  getShop as getShopHelper,
  getBalance as getBalanceHelper,
  isWeb3 as isWeb3Helper,
  isSmsReg as isSmsRegHelper,
} from '../../helpers';

import { hasGoodNetwork as hasGoodNetworkHelper } from '../../reducers/app';

import { getNetworkId } from '../../helpers/ethereum';
import {
  setAppInitialized as setAppInitializedAction,
  setMetamaskInstalled as setMetamaskInstalledAction,
  setEthNetwork as setEthNetworkAction,
  toggleTermsModal as toggleTermsModalAction
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
    getBalance: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
    isCertified: PropTypes.func.isRequired,
    setUserCertified: PropTypes.func.isRequired,
    setAppInitialized: PropTypes.func.isRequired,
    toggleTermsModal: PropTypes.func.isRequired,
    isTermsModalOpenened: PropTypes.bool.isRequired,
    balance: PropTypes.shape({
      eth: PropTypes.number.isRequired,
      dth: PropTypes.number.isRequired,
    }).isRequired
  };

  componentWillMount() {
    this.initApp();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  initCheck = async () => {
    const {
      setMetamaskInstalled,
      setEthAddress,
      isWeb3,
      getShop,
      addShop,
      getBalance,
      setBalance,
      setEthNetwork,
      isCertified,
      setUserCertified
    } = this.props;

    const ethAddress = await isWeb3();
    if (ethAddress) {
      const network = await getNetworkId();
      setEthNetwork(network);
      if (network === config.ethNetwork) {
        const [shop, balance, certified] = await Promise.all([
          getShop(),
          getBalance(),
          isCertified()
        ]);

        if (shop) addShop(shop);
        if (balance) setBalance(balance);
        if (certified) setUserCertified(certified);
        setEthAddress(ethAddress);
      }
      if (network) setMetamaskInstalled(true);
    }
  }
  async initApp() {
    const {
      isAppInitialized,
      setAppInitialized,
    } = this.props;

    if (!isAppInitialized) {
      await this.initCheck();
      this.interval = setInterval(this.refreshBalance, 10000);
      setAppInitialized(true);
    }
  }

  refreshBalance = async () => {
    const { getBalance, setBalance, isMetamaskInstalled, hasGoodNetwork } = this.props;

    if (!isMetamaskInstalled)
      return this.initCheck();
    if (hasGoodNetwork)
      setBalance(await getBalance());
  }

  render() {
    const {
      isAppInitialized,
      balance,
      toggleTermsModal,
      isTermsModalOpenened
    } = this.props;

    return (
      <Fragment>
        <LeftPanelPage
          isAppInitialized={isAppInitialized}
          toggleModal={toggleTermsModal}
          balance={balance}
          refreshBalance={this.refreshBalance}
        />
        {isTermsModalOpenened && <TermsModal closeFunc={toggleTermsModal} />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ app, user }) => ({
  isAppInitialized: app.isAppInitialized,
  balance: user.balance,
  isTermsModalOpenened: app.isTermsModalOpenened,
  isMetamaskInstalled: app.isMetamaskInstalled,
  hasGoodNetwork: hasGoodNetworkHelper(app)
});

const mapDispatchToProps = dispatch => ({
  setAppInitialized: bindActionCreators(setAppInitializedAction, dispatch),
  setMetamaskInstalled: bindActionCreators(setMetamaskInstalledAction, dispatch),
  setEthAddress: bindActionCreators(setEthAddressAction, dispatch),
  addShop: bindActionCreators(addShopAction, dispatch),
  setBalance: bindActionCreators(setBalanceAction, dispatch),
  setUserCertified: bindActionCreators(setUserCertifiedAction, dispatch),
  toggleTermsModal: bindActionCreators(toggleTermsModalAction, dispatch),
  setEthNetwork: bindActionCreators(setEthNetworkAction, dispatch),
  isWeb3: isWeb3Helper,
  getShop: getShopHelper,
  getBalance: getBalanceHelper,
  isCertified: isSmsRegHelper,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftPanel));
