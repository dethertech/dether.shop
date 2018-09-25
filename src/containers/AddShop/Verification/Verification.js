import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { ShopRecap, Button, TransactionFlow } from '../../../components';
import tr from '../../../translate';

import {
  addShop as addShopAction,
  resetTransaction as resetTransactionAction,
  fetchAll as fetchAllAction,
  openNotificationModal as openNotificationModalAction,
  displayShopWillAppearNotice as displayShopWillAppearNoticeAction,
} from '../../../actions';
import {
  addShop as addShopHelper,
  getLicenceShop,
  getShop,
} from '../../../helpers/ethereum';

import { notificationsTypes } from '../../../constants';

const ButtonsWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

export class Verification extends PureComponent {
  static propTypes = {
    pendingShop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      opening: PropTypes.string.isRequired,
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
      countryId: PropTypes.string.isRequired,
    }).isRequired,
    addShopToStore: PropTypes.func.isRequired,
    addShopToContract: PropTypes.func.isRequired,
    isTransactionPending: PropTypes.bool.isRequired,
    goBack: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired,
    centerPosition: PropTypes.shape({}).isRequired,
    openNotificationModal: PropTypes.func.isRequired,
    dispatchDisplayShopWillAppearNoticeAction: PropTypes.func.isRequired,
  };

  state = {
    licencePrice: null,
    transactionSubmitted: false,
  };

  async componentWillMount() {
    const { pendingShop } = this.props;
    const licencePrice = await getLicenceShop(pendingShop.countryId);
    this.setState({ licencePrice });
  }

  checkTransaction = async () => {
    const {
      addShopToStore,
      resetTransaction,
      fetchAll,
      centerPosition,
      openNotificationModal,
      dispatchDisplayShopWillAppearNoticeAction,
    } = this.props;

    const shop = await getShop();
    if (shop) {
      this.setState({ transactionSubmitted: false });
      fetchAll(centerPosition);
      resetTransaction();
      addShopToStore(shop);
      openNotificationModal({
        type: notificationsTypes.SUCCESS,
        message: tr('notifications.shop_added'),
      });
      dispatchDisplayShopWillAppearNoticeAction();
      return true;
    }
  };

  handleError = () => {
    this.setState({ transactionSubmitted: false });
  };

  addShop = async () => {
    const { pendingShop, addShopToContract } = this.props;

    const transaction = await addShopToContract(pendingShop);
    return transaction;
  };

  submitTransaction = () => this.setState({ transactionSubmitted: true });

  render() {
    const { pendingShop, isTransactionPending, goBack } = this.props;
    const { licencePrice, transactionSubmitted } = this.state;
    if (isTransactionPending || transactionSubmitted) {
      return (
        <TransactionFlow
          isTransaction
          loader={{
            title: tr('add_form_verification.loader_title'),
            message: tr('add_form_verification.loader_add_message'),
          }}
          sendTransaction={this.addShop}
          onError={this.handleError}
          shop={pendingShop}
          checkTransaction={this.checkTransaction}
        />
      );
    }
    return (
      <Fragment>
        <ShopRecap
          licencePrice={licencePrice}
          {...pendingShop}
          address={pendingShop.address}
        />
        <ButtonsWrapper>
          <Button width="45%" theme="primary" onClick={this.submitTransaction}>
            {tr('add_form_verification.submit_button')}
          </Button>
          <Button width="45%" onClick={goBack}>
            {tr('add_form_verification.edit_button')}
          </Button>
        </ButtonsWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shop, map, transaction }) => ({
  pendingShop: shop.pendingShop,
  isTransactionPending: transaction.pending,
  centerPosition: map.centerPosition,
});

const mapDispatchToProps = dispatch => ({
  addShopToContract: addShopHelper,
  addShopToStore: bindActionCreators(addShopAction, dispatch),
  fetchAll: bindActionCreators(fetchAllAction, dispatch),
  resetTransaction: bindActionCreators(resetTransactionAction, dispatch),
  openNotificationModal: bindActionCreators(
    openNotificationModalAction,
    dispatch,
  ),
  dispatchDisplayShopWillAppearNoticeAction: bindActionCreators(
    displayShopWillAppearNoticeAction,
    dispatch,
  ),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Verification),
);
