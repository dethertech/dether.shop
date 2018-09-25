import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import { reset } from '../../actions/root';
import config from '../../constants/config';
import LeftPanelPage from './LeftPanelPage';
import TermsModal from './TermsModal';

import { getShop, getBalance, isWeb3 } from '../../helpers';

import {
  hasGoodNetwork as hasGoodNetworkHelper,
  isLicencePriceSet as isLicencePriceSetHelper,
} from '../../reducers/app';

import { getNetworkId } from '../../helpers/ethereum';
import {
  setMetamaskInstalled as setMetamaskInstalledAction,
  setEthNetwork as setEthNetworkAction,
  toggleTermsModal as toggleTermsModalAction,
} from '../../actions/app';
import {
  setEthAddress as setEthAddressAction,
  setBalance as setBalanceAction,
  checkUserCertified as checkUserCertifiedAction,
} from '../../actions/user';
import { addShop as addShopAction } from '../../actions/shop';

/**
 * LeftPanel containers
 * @extends PureComponent
 */
export class LeftPanel extends PureComponent {
  static propTypes = {
    setMetamaskInstalled: PropTypes.func.isRequired,
    setEthAddress: PropTypes.func.isRequired,
    addShop: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
    checkUserCertified: PropTypes.func.isRequired,
    toggleTermsModal: PropTypes.func.isRequired,
    ethAddress: PropTypes.string.isRequired,
    isTermsModalOpenened: PropTypes.bool.isRequired,
    balance: PropTypes.shape({
      eth: PropTypes.number.isRequired,
      dth: PropTypes.number.isRequired,
    }).isRequired,
    isLicencePriceSet: PropTypes.bool.isRequired,
  };

  state = {
    isWeb3Checked: false,
  };

  componentWillMount() {
    this.initApp();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  initCheck = async () => {
    const {
      setMetamaskInstalled,
      setEthAddress,
      addShop,
      setBalance,
      setEthNetwork,
      checkUserCertified,
    } = this.props;

    const ethAddress = await isWeb3();
    if (ethAddress) {
      const network = await getNetworkId();
      setEthNetwork(network);
      if (network === config.ethNetwork) {
        const [shop, balance] = await Promise.all([
          getShop(),
          getBalance(),
          checkUserCertified(ethAddress),
        ]);

        if (shop) addShop(shop);
        if (balance) setBalance(balance);
        setEthAddress(ethAddress);
      }
      if (network) setMetamaskInstalled(true);
    }
  };

  async initApp() {
    const { isWeb3Checked } = this.state;

    if (!isWeb3Checked) {
      await this.initCheck();
      this.interval = setInterval(this.refreshBalance, 10000);
      this.interval2 = setInterval(this.checkChangeAccount, 1000);
      this.setState({ isWeb3Checked: true });
    }
  }

  checkChangeAccount = async () => {
    const { ethAddress, resetApp } = this.props;

    const web3EthAddress = await isWeb3();
    if (ethAddress && web3EthAddress && ethAddress !== web3EthAddress) {
      this.setState({ isWeb3Checked: false });
      resetApp();
      window.location.reload();
    }
  };

  refreshBalance = async () => {
    const { setBalance, isMetamaskInstalled, hasGoodNetwork } = this.props;

    if (!isMetamaskInstalled) return this.initCheck();
    if (hasGoodNetwork) setBalance(await getBalance());
  };

  toggleBuyModal = () => {
    window.buy();
  };

  render() {
    const {
      balance,
      toggleTermsModal,
      isTermsModalOpenened,
      isLicencePriceSet,
    } = this.props;
    const { isWeb3Checked } = this.state;

    return (
      <Fragment>
        <ToastContainer position="top-left" />
        <LeftPanelPage
          isWeb3Checked={isWeb3Checked}
          isLicencePriceSet={isLicencePriceSet}
          toggleTermsModal={toggleTermsModal}
          toggleBuyModal={this.toggleBuyModal}
          balance={balance}
          refreshBalance={this.refreshBalance}
        />
        {isTermsModalOpenened && <TermsModal closeFunc={toggleTermsModal} />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ app, user }) => ({
  balance: user.balance,
  isTermsModalOpenened: app.isTermsModalOpenened,
  isMetamaskInstalled: app.isMetamaskInstalled,
  hasGoodNetwork: hasGoodNetworkHelper(app),
  ethAddress: user.ethAddress || '',
  isLicencePriceSet: isLicencePriceSetHelper(app),
});

const mapDispatchToProps = dispatch => ({
  setMetamaskInstalled: bindActionCreators(
    setMetamaskInstalledAction,
    dispatch,
  ),
  setEthAddress: bindActionCreators(setEthAddressAction, dispatch),
  addShop: bindActionCreators(addShopAction, dispatch),
  setBalance: bindActionCreators(setBalanceAction, dispatch),
  checkUserCertified: bindActionCreators(checkUserCertifiedAction, dispatch),
  toggleTermsModal: bindActionCreators(toggleTermsModalAction, dispatch),
  setEthNetwork: bindActionCreators(setEthNetworkAction, dispatch),
  resetApp: bindActionCreators(reset, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LeftPanel),
);
