import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './Form';
import Verification from './Verification';

class AddShop extends PureComponent {
  static propTypes = {
    isTransactionPending: PropTypes.bool.isRequired,
  };

  state = {
    verify: false,
  };

  toggleVerify = () => this.setState({ verify: !this.state.verify });

  render() {
    const { verify } = this.state;
    const { isTransactionPending } = this.props;

    return verify || isTransactionPending ? (
      <Verification goBack={this.toggleVerify} />
    ) : (
      <Form onSubmit={this.toggleVerify} />
    );
  }
}

const mapStateToProps = ({ transaction }) => ({
  isTransactionPending: transaction.pending,
});
export default connect(mapStateToProps)(AddShop);
