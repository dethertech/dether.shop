import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { ShopRecap, Button, LoaderScreen } from '../../../components';
import tr from '../../../translate';

import {
  addAddShopTransaction as addAddShopTransactionAction,
  addShop as addShopAction,
  endTransaction as endTransactionAction
} from '../../../actions/shop';
import { fetchAll as fetchAllAction } from '../../../actions/map';
import {
  addShop as addShopHelper,
  getTransactionStatus,
  getLicenceShop
} from '../../../helpers/ethereum';

const ButtonsWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

class Verification extends PureComponent {
  static propTypes = {
    pendingShop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      opening: PropTypes.string.isRequired,
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
      countryId: PropTypes.string.isRequired
    }).isRequired,
    addShopToStore: PropTypes.func.isRequired,
    addShopToContract: PropTypes.func.isRequired,
    addAddShopTransaction: PropTypes.func.isRequired,
    isTransactionPending: PropTypes.bool.isRequired,
    transactionHash: PropTypes.string.isRequired,
    endTransaction: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired,
    centerPosition: PropTypes.shape({}).isRequired
  }

  state = {
    isLoading: false,
    licencePrice: null
  }

  async componentWillMount() {
    const { isTransactionPending, pendingShop } = this.props;

    if (isTransactionPending) {
      this.interval = this.checkTransaction();
    }
    const licencePrice = await getLicenceShop(pendingShop.countryId);
    this.setState({ licencePrice });
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getView = () => {
    const { isTransactionPending, goBack } = this.props;

    if (isTransactionPending)
      return <div>{tr('add_form_verification.transaction_pending')}</div>;
    return (
      <ButtonsWrapper>
        <Button width="45%" theme="primary" onClick={this.addShop}>
          {tr('add_form_verification.submit_button')}
        </Button>
        <Button width="45%" onClick={goBack}>{tr('add_form_verification.edit_button')}</Button>
      </ButtonsWrapper>
    );
  };

  endCheckTransaction = () => {
    const { endTransaction } = this.props;
    endTransaction();
    clearInterval(this.interval);
  }

  checkTransaction = () => {
    const {
      transactionHash,
      addShopToStore,
      pendingShop,
      fetchAll,
      centerPosition,
      goBack
    } = this.props;
    this.interval = setInterval(async () => {
      const status = await getTransactionStatus(transactionHash);
      if (status === 'success') {
        addShopToStore(pendingShop);
        fetchAll(centerPosition);
        this.endCheckTransaction();
      } else if (status === 'error') {
        goBack();
        this.endCheckTransaction();
        toast.error(tr('errors.transaction.throw'));
      }
    }, 3000);
  }

  addShop = async () => {
    const { pendingShop, addAddShopTransaction, addShopToContract } = this.props;

    this.showLoader();
    try {
      const transaction = await addShopToContract(pendingShop);
      addAddShopTransaction(transaction.transactionHash);
      this.checkTransaction();
      this.HideLoader();
    } catch (e) {
      toast.error(tr('errors.transaction.metamask_reject'));
      this.HideLoader();
    }
  };

  showLoader = () => this.setState({ isLoading: true });
  HideLoader = () => this.setState({ isLoading: false });

  render() {
    const { pendingShop } = this.props;
    const { isLoading, licencePrice } = this.state;

    if (isLoading) {
      return (
        <LoaderScreen
          title={tr('add_form_verification.loader_title')}
          message={tr('add_form_verification.loader_add_message')}
          isTransaction
        />
      );
    }
    return (
      <Fragment>
        <ShopRecap licencePrice={licencePrice} {...pendingShop} />
        {this.getView()}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shop, map }) => ({
  pendingShop: shop.pendingShop,
  isTransactionPending: !!shop.transactionHash,
  transactionHash: shop.transactionHash || '',
  centerPosition: map.centerPosition
});

const mapDispatchToProps = dispatch => ({
  addShopToContract: addShopHelper,
  addShopToStore: bindActionCreators(addShopAction, dispatch),
  addAddShopTransaction: bindActionCreators(addAddShopTransactionAction, dispatch),
  endTransaction: bindActionCreators(endTransactionAction, dispatch),
  fetchAll: bindActionCreators(fetchAllAction, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Verification));
