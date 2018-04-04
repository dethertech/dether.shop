import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
  Components
 */
import { ShopRecap, Button, TransactionFlow } from '../../components';

/*
  Translate module
 */
import tr from '../../translate';

/*
  Redux
 */
import {
  removeShop as removeShopAction,
  fetchAll as fetchAllAction,
  resetTransaction as resetTransactionAction,
} from '../../actions';

/*
  Helpers
 */
import { deleteShop as deleteShopHelper, getShop } from '../../helpers';

/**
 * ShowShop container
 * @extends PureComponent
 */
export class ShowShop extends PureComponent {
  static propTypes = {
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      opening: PropTypes.string.isRequired,
      lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
    isTransactionPending: PropTypes.bool.isRequired,
    deleteContractShop: PropTypes.func.isRequired,
    removeShopFromStore: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired,
    centerPosition: PropTypes.shape({}).isRequired,
  };

  state = {
    transactionSubmitted: false,
  };

  checkTransaction = async () => {
    const {
      removeShopFromStore,
      resetTransaction,
      fetchAll,
      centerPosition,
    } = this.props;

    const shop = await getShop();
    if (!shop) {
      fetchAll(centerPosition);
      this.setState({ transactionSubmitted: false });
      resetTransaction();
      removeShopFromStore(shop);
      return true;
    }
  };

  deleteShop = async () => {
    const { deleteContractShop } = this.props;

    const transaction = await deleteContractShop();
    return transaction.transactionHash;
  };

  handleError = () => {
    this.setState({ transactionSubmitted: false });
  };

  submitTransaction = () => this.setState({ transactionSubmitted: true });

  render = () => {
    const { shop, isTransactionPending } = this.props;
    const { transactionSubmitted } = this.state;

    if (isTransactionPending || transactionSubmitted) {
      return (
        <TransactionFlow
          isTransaction
          loader={{
            title: tr('add_form_verification.loader_title'),
            message: tr('add_form_verification.loader_add_message'),
          }}
          sendTransaction={this.deleteShop}
          onError={this.handleError}
          shop={shop}
          checkTransaction={this.checkTransaction}
        />
      );
    }
    return (
      <Fragment>
        <ShopRecap {...shop} />
        <Button onClick={this.submitTransaction}>
          {tr('show_shop.delete_button')}
        </Button>
      </Fragment>
    );
  };
}

const mapStateToProps = ({ shop, map, transaction }) => ({
  shop: shop.shop,
  isTransactionPending: !!transaction.pending,
  centerPosition: map.centerPosition,
});

const mapDispatchToProps = dispatch => ({
  deleteContractShop: deleteShopHelper,
  removeShopFromStore: bindActionCreators(removeShopAction, dispatch),
  fetchAll: bindActionCreators(fetchAllAction, dispatch),
  resetTransaction: bindActionCreators(resetTransactionAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowShop);
