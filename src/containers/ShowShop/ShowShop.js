import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
  Components
 */
import ShopRecap from '../../components/ShopRecap';
import Button from '../../components/Button';
import LoaderScreen from '../../components/Screens/LoaderScreen';

/*
  Translate module
 */
import tr from '../../translate';

/*
  Redux
 */
import { addShop as addShopAction } from '../../actions';

/*
  Helpers
 */
import { addShop as addShopHelper, deleteShop as deleteShopHelper } from '../../helpers';

/**
 * ShowShop container
 * @extends PureComponent
 */
class ShowShop extends PureComponent {
  static propTypes = {
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      opening: PropTypes.string.isRequired,
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired
    }).isRequired,
    addShopToStore: PropTypes.func.isRequired,
    addShopToContract: PropTypes.func.isRequired,
    isTransactionPending: PropTypes.bool.isRequired,
    deleteContractShop: PropTypes.func.isRequired
  }

  state = {
    isLoading: false
  }

  getView = () => {
    const { isTransactionPending, shop } = this.props;

    if (isTransactionPending)
      return <div>{tr('show_shop.transaction_pending')}</div>;
    else if (shop)
      return <Button onClick={this.deleteShop}>{tr('show_shop.delete_button')}</Button>;
    return <Button>{tr('show_shop.submit_button')}</Button>;
  }

  showLoader = () => this.setState({ isLoading: true });
  HideLoader = () => this.setState({ isLoading: false });

  deleteShop = async () => {
    const { deleteContractShop } = this.props;

    this.showLoader(tr('show_recap.loader_delete_message'));
    await deleteContractShop().catch(e => console.log('Error', e));
    // TODO remove from Store
    // TODO trads
    this.HideLoader();
  }

  render = () => {
    const { shop } = this.props;
    const { isLoading } = this.state;

    return isLoading ?
      <LoaderScreen
        title={tr('shop_recap.loader_title')}
        message={tr('shop_recap.loader_message')}
      />
      :
      <Fragment>
        <ShopRecap {...shop} />
        <Button onClick={this.deleteShop}>{tr('show_shop.delete_button')}</Button>;
      </Fragment>;
  }
}

const mapStateToProps = ({ shop }) => ({
  shop: shop.shop,
  isTransactionPending: !!shop.transactionHash,
  transactionhash: shop.transactionHash
});

const mapDispatchToProps = dispatch => ({
  addShopToContract: addShopHelper,
  deleteContractShop: deleteShopHelper,
  addShopToStore: bindActionCreators(addShopAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowShop);
