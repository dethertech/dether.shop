import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getTransactionStatus } from '../../../helpers';
import {
  addTransaction as addTransactionAction,
  resetTransaction as resetTransactionAction,
  setTransactionHash as setTransactionHashAction,
  openNotificationModal as openNotificationModalAction,
} from '../../../actions';

import { notificationsTypes } from '../../../constants';

import tr from '../../../translate';

import { LoaderScreen } from '../../';
import TransactionFlowRecap from './TransactionFlowRecap';

class TransactionFlow extends PureComponent {
  static propTypes = {
    loader: PropTypes.shape({
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
    sendTransaction: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    shop: PropTypes.shape({
      opening: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      licencePrice: PropTypes.string,
    }).isRequired,
    transaction: PropTypes.shape({
      pending: PropTypes.bool.isRequired,
      hash: PropTypes.string,
      sentTime: PropTypes.instanceOf(Date),
    }).isRequired,
    checkTransaction: PropTypes.func.isRequired,
    resetTransaction: PropTypes.func.isRequired,
    addTransaction: PropTypes.func.isRequired,
    setTransactionHash: PropTypes.func.isRequired,
    openNotificationModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      sendTransaction,
      addTransaction,
      transaction,
      setTransactionHash,
    } = this.props;
    if (transaction.pending) return this.checkTransaction(transaction);
    addTransaction();
    sendTransaction()
      .then(hash => {
        setTransactionHash(hash);
      })
      .catch(() => this.transactionError());
  }

  componentDidUpdate = () => {
    const { transaction } = this.props;
    if (transaction.pending && transaction.sentTime && !this.timeout) {
      this.checkTransaction(this.props.transaction);
    }
  };

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  checkTransaction = async transaction => {
    const {
      onError,
      checkTransaction,
      resetTransaction,
      transaction: storeTransaction,
      openNotificationModal,
    } = this.props;
    const { sentTime } = transaction;
    const hash = transaction.hash || storeTransaction.hash;
    const startTime = new Date();

    if (new Date() - sentTime > 600000) {
      resetTransaction();
      openNotificationModal({
        type: notificationsTypes.WARNING,
        message: tr('notifications.transaction_timeout'),
      });
      return onError();
    }
    if (hash) {
      const status = await getTransactionStatus(hash);
      if (status === 'error') {
        return this.transactionError();
      }
    }

    const isFinished = !!await checkTransaction();
    if (isFinished) return;

    const checkTime = new Date() - startTime;
    if (checkTime > 5000) this.checkTransaction(transaction);
    else {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(
        () => this.checkTransaction(transaction),
        5000 - checkTime,
      );
    }
  };

  transactionError = () => {
    const { onError, resetTransaction, openNotificationModal } = this.props;

    openNotificationModal({
      type: notificationsTypes.WARNING,
      message: tr('notifications.transaction_error'),
    });
    resetTransaction();
    onError();
  };

  render() {
    const { loader, transaction, shop } = this.props;
    if (transaction.pending)
      return (
        <TransactionFlowRecap
          message={tr('notifications.transaction_pending')}
          shop={shop}
        />
      );
    return <LoaderScreen isTransaction {...loader} />;
  }
}

const mapStateToProps = ({ transaction }) => ({
  transaction,
});

const mapDispatchToProps = dispatch => ({
  addTransaction: bindActionCreators(addTransactionAction, dispatch),
  resetTransaction: bindActionCreators(resetTransactionAction, dispatch),
  setTransactionHash: bindActionCreators(setTransactionHashAction, dispatch),
  openNotificationModal: bindActionCreators(
    openNotificationModalAction,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionFlow);
