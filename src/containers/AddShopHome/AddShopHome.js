import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import config from '../../constants/config';
import tr from '../../translate';
import { hasEnougthMoneyToAddShop } from '../../reducers/user';
import TermsValidation from './TermsValidation';

// component
import Button from '../../components/Button';

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
    isPhoneVerified: PropTypes.bool.isRequired,
    minEth: PropTypes.number.isRequired,
    minDth: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      shake: 0
    };
  }

  onClick = e => {
    const { history, isPhoneVerified } = this.props;

    if (this.checkTerms(e)) {
      if (isPhoneVerified) {
        history.push('/add/phone');
      } else {
        history.push('/add/form');
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
    const { isMetamaskInstalled, hasEnougthMoney, minEth, minDth } = this.props;

    return (
      <div>
        <div>{tr('add.home.title')}</div>
        <div>{tr('add.home.description')}</div>

        {!isMetamaskInstalled && <div>{tr('add.home.metamask_not_installed')}</div>}
        {isMetamaskInstalled &&
          !hasEnougthMoney && <div>{tr('add.home.not_enougth_money', { minEth, minDth })}</div>}
        {isMetamaskInstalled &&
          hasEnougthMoney && (
            <div>
              <TermsValidation shake={shake} checked={checked} handleCheck={this.onCheck} />
              <Button onClick={this.onClick}>{tr('add.home.bt_add')}</Button>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ user, app }) => ({
  hasEnougthMoney: hasEnougthMoneyToAddShop(user),
  isMetamaskInstalled: app.isMetamaskInstalled,
  isPhoneVerified: false, // TODDO get it from store
  minEth: config.gasPrice.simpleTransac,
  minDth: config.licensePrice
});

const mapDispatchToProps = (/* dispatch */) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddShopHome);
