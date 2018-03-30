import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import tr from '../../translate';
import tokens from '../../styles/tokens';

// component
import { Layout, LoaderScreen, Header } from '../../components';
import Footer from './Footer';

import ShopRouter from '../ShopRouter';

const LeftWrapper = styled.div`
  width: 100%;
  max-width: 42rem;
  margin: auto;
  padding: ${tokens.spaces.m};
  @media (max-width: 420px) {
    padding: ${tokens.spaces.xs} ${tokens.spaces.m};
  }
`;

class LeftPanelPage extends PureComponent {
  static propTypes = {
    isWeb3Checked: PropTypes.bool.isRequired,
    toggleTermsModal: PropTypes.func.isRequired,
    toggleBuyModal: PropTypes.func.isRequired,
    balance: PropTypes.shape({
      eth: PropTypes.number.isRequired,
      dth: PropTypes.number.isRequired,
    }).isRequired,
    refreshBalance: PropTypes.func.isRequired,
    isLicencePriceSet: PropTypes.bool.isRequired,
  };
  getView = () => {
    const { isWeb3Checked, isLicencePriceSet } = this.props;

    if (!isWeb3Checked || !isLicencePriceSet) {
      return (
        <LoaderScreen
          title={tr('loaderInitializer.title')}
          message={tr('loaderInitializer.message')}
        />
      );
    }
    return <ShopRouter />;
  };

  render() {
    const {
      toggleTermsModal,
      toggleBuyModal,
      balance,
      refreshBalance,
    } = this.props;
    const eth = balance.eth.toFixed(4);
    const dth = balance.dth.toFixed(4);

    return (
      <Layout isFullScreen>
        <Layout.Header>
          <Header
            onRefresh={refreshBalance}
            EthBalance={eth}
            DthBalance={dth}
            toggleBuyModal={toggleBuyModal}
          />
        </Layout.Header>
        <Layout.ScrollableBody>
          <LeftWrapper>{this.getView()}</LeftWrapper>
        </Layout.ScrollableBody>
        <Layout.Footer>
          <Footer toggleTermsModal={toggleTermsModal} />
        </Layout.Footer>
      </Layout>
    );
  }
}

export default withRouter(LeftPanelPage);
