import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
  Components
 */
import { ShopRecap, Button, TransactionFlow, Loader } from '../../components';
import { Padding } from '../../components/Spaces';

/*
  Translate module
 */
import tr from '../../translate';

/*
  Redux
 */
import {
  removeShop as removeShopAction,
  resetTransaction as resetTransactionAction,
  openNotificationModal as openNotificationModalAction,
  reloadShops as reloadShopsAction,
  hideShopWillAppearNotice as hideShopWillAppearNoticeAction,
} from '../../actions';

/*
  Helpers
 */
import { deleteShop as deleteShopHelper, getShop } from '../../helpers';
/*
  Constants
 */
import { notificationsTypes } from '../../constants';

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
    centerPosition: PropTypes.shape({}).isRequired,
    openNotificationModal: PropTypes.func.isRequired,
    reloadShops: PropTypes.func.isRequired,
    dispatchHideShopWillAppearNotice: PropTypes.func,
    shallIDisplayShopNotice: PropTypes.bool,
  };

  static defaultProps = {
    dispatchHideShopWillAppearNotice: () => null,
    shallIDisplayShopNotice: false,
  };

  state = {
    transactionSubmitted: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.props.dispatchHideShopWillAppearNotice();
    }, 60000);
  };

  checkTransaction = async () => {
    const {
      removeShopFromStore,
      resetTransaction,
      centerPosition,
      openNotificationModal,
      reloadShops,
    } = this.props;

    const shop = await getShop();
    if (!shop) {
      reloadShops(centerPosition);
      this.setState({ transactionSubmitted: false });
      resetTransaction();
      removeShopFromStore(shop);
      openNotificationModal({
        type: notificationsTypes.SUCCESS,
        message: tr('notifications.shop_deleted'),
      });
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
    const { shop, isTransactionPending, shallIDisplayShopNotice } = this.props;
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
        {shallIDisplayShopNotice && (
          <Padding all="m">
            <div>
              <b>{tr('show_shop.shop_appear_shortly')}</b>
            </div>
            <div>
              <Loader />
            </div>
          </Padding>
        )}
      </Fragment>
    );
  };
}

const mapStateToProps = ({ shop, map, transaction }) => ({
  shop: shop.shop,
  isTransactionPending: !!transaction.pending,
  centerPosition: map.centerPosition,
  shallIDisplayShopNotice: shop.displayShopWillAppear,
});

const mapDispatchToProps = dispatch => ({
  deleteContractShop: deleteShopHelper,
  removeShopFromStore: bindActionCreators(removeShopAction, dispatch),
  resetTransaction: bindActionCreators(resetTransactionAction, dispatch),
  reloadShops: bindActionCreators(reloadShopsAction, dispatch),
  openNotificationModal: bindActionCreators(
    openNotificationModalAction,
    dispatch,
  ),
  dispatchHideShopWillAppearNotice: bindActionCreators(
    hideShopWillAppearNoticeAction,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowShop);
