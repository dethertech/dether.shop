import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import tr from '../../../translate';
import { getTransactionStatus } from '../../../helpers';
import {
  addTransaction as addTransactionAction,
  resetTransaction as resetTransactionAction,
} from '../../../actions/transaction';

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
  };

  async componentDidMount() {
    const { sendTransaction, addTransaction, transaction } = this.props;
    if (transaction.pending) this.runCheckTransactionProcess(transaction.hash);
    else {
      try {
        const hash = await sendTransaction();
        addTransaction(hash);
        this.runCheckTransactionProcess(hash);
      } catch (e) {
        this.checkMetaMaskReceipt(e);
      }
    }
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  runCheckTransactionProcess = hash => {
    const {
      onError,
      checkTransaction,
      resetTransaction,
      transaction,
    } = this.props;

    // Check for 10 minutes
    if (new Date() - transaction.sentTime > 600000) {
      resetTransaction();
      onError();
    }
    this.interval = setInterval(async () => {
      if (hash) {
        const status = await getTransactionStatus(hash);
        if (status === 'error') {
          resetTransaction();
          onError();
        }
      }
      checkTransaction();
    }, 5000);
  };

  checkMetaMaskReceipt = e => {
    const { onError } = this.props;
    console.log(e);
    toast.error(tr('errors.transaction.metamask_reject'));
    onError();
  };

  render() {
    const { loader, transaction, shop } = this.props;
    if (transaction.pending)
      return (
        <TransactionFlowRecap
          message="Your transaction is pending"
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionFlow);
