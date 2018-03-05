import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../../constants/config';
import tr from '../../translate';
import { hasEnougthMoneyToAddShop } from '../../reducers/user';
import TermsValidation from './TermsValidation';
import illustration from '../../assets/illustration.svg';

import { toggleTermsModal as toggleTermsModalAction } from '../../actions/app';

// component
import Button from '../../components/Button';
import { H1 } from '../../components/Headings';
import { Padding } from '../../components/Spaces';
import Message from '../../components/Message';

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
`;

/**
 * AddShopHome containers
 * @extends PureComponent
 */
export class AddShopHome extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    isMetamaskInstalled: PropTypes.bool.isRequired,
    hasEnougthMoney: PropTypes.bool.isRequired,
    isUserVerified: PropTypes.bool.isRequired,
    minEth: PropTypes.number.isRequired,
    minDth: PropTypes.number.isRequired,
    toggleTermsModal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      shake: 0
    };
  }

  onClick = e => {
    const { history, isUserVerified } = this.props;

    if (this.checkTerms(e)) {
      if (isUserVerified) {
        history.push('/add-form');
      } else {
        history.push('/add-phone');
      }
    }
  };

  onCheck = ({ target: { checked } }) => {
    this.setState({ checked });
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

  render() {
    const { checked, shake } = this.state;
    const { isMetamaskInstalled, hasEnougthMoney, minEth, minDth, toggleTermsModal } = this.props;

    return (
      <Wrapper>
        <Padding top="l" bottom="s">
          <img src={illustration} alt="" />
        </Padding>

        <Padding bottom="m">
          <H1>{tr('add.home.title')}</H1>
        </Padding>

        <Padding vertical="l">{tr('add.home.description')}</Padding>

        {!isMetamaskInstalled && (
          <Message theme="error" alignCenter>
            {tr('add.home.metamask_not_installed')}
          </Message>
        )}
        {isMetamaskInstalled &&
          !hasEnougthMoney && (
            <Message theme="error" alignCenter>
              {tr('add.home.not_enougth_money', { minEth, minDth })}
            </Message>
          )}
        {isMetamaskInstalled &&
          hasEnougthMoney && (
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
    );
  }
}

const mapStateToProps = ({ user, app }) => ({
  hasEnougthMoney: hasEnougthMoneyToAddShop(user),
  isMetamaskInstalled: app.isMetamaskInstalled,
  isUserVerified: user.isCertified,
  minEth: config.gasPrice.simpleTransac,
  minDth: config.licensePrice
});

const mapDispatchToProps = dispatch => ({
  toggleTermsModal: bindActionCreators(toggleTermsModalAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddShopHome);
