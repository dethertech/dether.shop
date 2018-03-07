import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import ShopRecap from '../../components/ShopRecap';
import Button from '../../components/Button';
import LoaderScreen from '../../components/Screens/LoaderScreen';
import tr from '../../translate';

import {
  addAddShopTransaction as addAddShopTransactionAction,
  addShop as addShopAction,
  endTransaction as endTransactionAction
} from '../../actions/shop';
import { addShop as addShopHelper, getTransactionStatus } from '../../helpers/ethereum';

class AddFormVerification extends PureComponent {
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
    addAddShopTransaction: PropTypes.func.isRequired,
    isTransactionPending: PropTypes.bool.isRequired,
    transactionHash: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    endTransaction: PropTypes.func.isRequired
  }

  state = {
    isLoading: false
  }

  componentWillMount() {
    const { isTransactionPending } = this.props;

    if (isTransactionPending) {
      this.interval = this.checkTransaction();
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getView = () => {
    const { isTransactionPending } = this.props;

    if (isTransactionPending)
      return <div>{tr('add_form_verification.transaction_pending')}</div>;
    return <Button onClick={this.addShop}>{tr('add_form_verification.submit_button')}</Button>;
  }

  endCheckTransaction = () => {
    const { endTransaction } = this.props;
    endTransaction();
    clearInterval(this.interval);
  }

  checkTransaction = () => {
    const { transactionHash, addShopToStore, pendingShop, history } = this.props;
    this.interval = setInterval(async () => {
      const status = await getTransactionStatus(transactionHash);
      if (status === 'success') {
        addShopToStore(pendingShop);
        history.push('/shop');
        this.endCheckTransaction();
      } else if (status === 'error') {
        console.log('ADD Transaction Error', transactionHash);
        history.push('/add-form');
        this.endCheckTransaction();
      }
    }, 3000);
  }

  addShop = async () => {
    const { pendingShop, addAddShopTransaction, addShopToContract } = this.props;

    this.showLoader();
    const transaction = await addShopToContract(pendingShop).catch(e => console.log('Error', e));
    addAddShopTransaction(transaction.transactionHash);
    this.checkTransaction();
    this.HideLoader();
  };

  showLoader = () => this.setState({ isLoading: true });
  HideLoader = () => this.setState({ isLoading: false });

  render() {
    const { pendingShop } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <LoaderScreen
          title={tr('add_form_verification.loader_title')}
          message={tr('add_form_verification.loader_add_message')}
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
  isTransactionPending: !!shop.transactionHash,
  transactionHash: shop.transactionHash || ''
});

const mapDispatchToProps = dispatch => ({
  addShopToContract: addShopHelper,
  addShopToStore: bindActionCreators(addShopAction, dispatch),
  addAddShopTransaction: bindActionCreators(addAddShopTransactionAction, dispatch),
  endTransaction: bindActionCreators(endTransactionAction, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddFormVerification));
