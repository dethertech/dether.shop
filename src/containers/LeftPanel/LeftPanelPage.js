import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleTermsModal as toggleTermsModalAction } from '../../actions';
import tr from '../../translate';
import tokens from '../../styles/tokens';

// component
import { Layout, LoaderScreen, Header, Footer } from '../../components';
import { Padding } from '../../components/Spaces';

import ShopRouter from '../ShopRouter';

const LeftWrapper = styled.div`
  width: 100%;
  max-width: 42rem;
  margin: auto;
  padding: 0;
  @media (max-width: 420px) {
    padding: ${tokens.spaces.xs} ${tokens.spaces.m};
  }
`;

class LeftPanelPage extends PureComponent {
  static propTypes = {
    isWeb3Checked: PropTypes.bool.isRequired,
    toggleBuyModal: PropTypes.func.isRequired,
    balance: PropTypes.shape({
      eth: PropTypes.number.isRequired,
      dth: PropTypes.number.isRequired,
    }).isRequired,
    refreshBalance: PropTypes.func.isRequired,
    isLicencePriceSet: PropTypes.bool.isRequired,
    toggleTermsModal: PropTypes.func.isRequired,
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
      toggleBuyModal,
      balance,
      refreshBalance,
      toggleTermsModal,
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
        <Padding vertical="s">
          <Footer toggleTermsModal={toggleTermsModal} />
        </Padding>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTermsModal: bindActionCreators(toggleTermsModalAction, dispatch),
});

export default connect(null, mapDispatchToProps)(withRouter(LeftPanelPage));
