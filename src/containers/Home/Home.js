import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hasGoodNetwork as hasGoodNetworkHelper } from '../../reducers/app';

// Config

import config from '../../constants/config';

// Translate module

import tr from '../../translate';

// Redux

import {
  toggleTermsModal as toggleTermsModalAction,
  acceptTerms as acceptTermsAction,
} from '../../actions';
import {
  hasEnoughEthToAddShop,
  hasEnoughDthToAddShop,
} from '../../reducers/user';

// Components

import { Button, Message, SvgHome, Footer } from '../../components';
import { H1 } from '../../components/Headings';
import { Padding } from '../../components/Spaces';
import TermsValidation from './TermsValidation';

// Constants

import { hasSupportedBrowser } from '../../constants/browser';

// Styles

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
`;

/**
 * Home containers
 * @extends PureComponent
 */
export class Home extends PureComponent {
  static propTypes = {
    isMetamaskInstalled: PropTypes.bool.isRequired,
    hasEnoughEth: PropTypes.bool.isRequired,
    hasEnoughDth: PropTypes.bool.isRequired,
    minEth: PropTypes.number.isRequired,
    minDth: PropTypes.string.isRequired,
    toggleTermsModal: PropTypes.func.isRequired,
    acceptTerms: PropTypes.func.isRequired,
    hasGoodNetwork: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      shake: 0,
    };
  }

  onClick = e => {
    const { acceptTerms } = this.props;
    if (this.checkTerms(e)) acceptTerms();
  };

  onCheck = ({ target: { checked } }) => {
    this.setState({ checked });
  };

  checkErrors = () => {
    const {
      isMetamaskInstalled,
      hasEnoughEth,
      hasEnoughDth,
      hasGoodNetwork,
      minEth,
      minDth,
    } = this.props;

    if (!hasSupportedBrowser) return tr('add.home.browser_not_supported');
    if (!isMetamaskInstalled)
      return tr('add.home.metamask_not_installed', {
        linkToMetamask: 'https://metamask.io/',
      });
    if (!hasGoodNetwork) return tr('add.home.wrong_network');
    if (!hasEnoughEth && !hasEnoughDth)
      return tr('add.home.not_enough_money', { minDth, minEth });
    if (!hasEnoughEth) return tr('add.home.not_enough_eth', { minEth });
    if (!hasEnoughDth) return tr('add.home.not_enough_dth', { minDth });
  };

  checkTerms = e => {
    const { checked, shake } = this.state;
    if (!checked) {
      e.preventDefault();
      this.setState({ shake: shake + 1 });
      return false;
    }
    return true;
  };

  render = () => {
    const { checked, shake } = this.state;
    const { toggleTermsModal } = this.props;
    const error = this.checkErrors();

    return (
      <React.Fragment>
        <Wrapper>
          <SvgHome />

          <Padding bottom="m">
            <H1>{tr('add.home.title')}</H1>
          </Padding>

          <Padding vertical="l">
            <span>{tr('add.home.desc')}</span>
          </Padding>

          {error ? (
            <Message theme="error" alignCenter>
              {error}
            </Message>
          ) : (
            <Padding vertical="l">
              <TermsValidation
                shake={shake}
                checked={checked}
                handleCheck={this.onCheck}
                toggleTermsModal={toggleTermsModal}
              />
              <Button fullWidth theme="primary" onClick={this.onClick}>
                {tr('add.home.bt_add')}
              </Button>
            </Padding>
          )}
        </Wrapper>
        <Padding vertical="s">
          <Footer toggleTermsModal={toggleTermsModal} />
        </Padding>
      </React.Fragment>
    );
  };
}

const mapStateToProps = ({ user, app }) => ({
  hasEnoughEth: hasEnoughEthToAddShop(user.balance, app.licencePrice),
  hasEnoughDth: hasEnoughDthToAddShop(user.balance, app.licencePrice),
  hasGoodNetwork: hasGoodNetworkHelper(app),
  isMetamaskInstalled: app.isMetamaskInstalled,
  isUserVerified: user.isCertified,
  minEth: config.gasPrice.simpleTransac,
  minDth: app.licencePrice,
});

const mapDispatchToProps = dispatch => ({
  toggleTermsModal: bindActionCreators(toggleTermsModalAction, dispatch),
  acceptTerms: bindActionCreators(acceptTermsAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
