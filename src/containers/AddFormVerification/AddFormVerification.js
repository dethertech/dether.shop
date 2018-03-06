import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ShopRecap from '../../components/ShopRecap';
import Button from '../../components/Button';
import LoaderScreen from '../../components/Screens/LoaderScreen';
import tr from '../../translate';

import { addShop as addShopAction } from '../../actions/shop';
import { addShop as addShopHelper } from '../../helpers/ethereum';

class ShowShop extends PureComponent {
  static propTypes = {
    pendingShop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      opening: PropTypes.string.isRequired,
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired
    }).isRequired,
    addShopToStore: PropTypes.func.isRequired,
    addShopToContract: PropTypes.func.isRequired,
    isTransactionPending: PropTypes.bool.isRequired
  }

  state = {
    isLoading: false
  }

  getView = () => {
    const { isTransactionPending } = this.props;

    // TODO trads
    if (isTransactionPending)
      return <div>{tr('add_form_verification.transaction_pending')}</div>;
    return <Button>{tr('add_form_verification.submit_button')}</Button>;
  }

  showLoader = () => this.setState({ isLoading: true });
  HideLoader = () => this.setState({ isLoading: false });

  render() {
    const { pendingShop } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <LoaderScreen
          title={tr('add_form_verification.loader_title')}
          message={tr('add_form_verification.loader_message')}
        />
      );
    }
    return (
      <Fragment>
        <ShopRecap {...pendingShop} />
        {this.getView()}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shop }) => ({
  pendingShop: shop.pendingShop,
  isTransactionPending: shop.transactionHash
});

const mapDispatchToProps = dispatch => ({
  addShopToContract: addShopHelper,
  addShopToStore: bindActionCreators(addShopAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowShop);
