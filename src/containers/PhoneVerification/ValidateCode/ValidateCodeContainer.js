/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import tr from '../../../translate';
import { phoneVerificationTime, getErrorMessage } from '../../../helpers';

import ValidateCode from './ValidateCode';
import {
  sendVerifCode as sendVerifCodeAction,
  setPhoneVerified as setPhoneVerifiedAction,
} from '../../../actions';

class ValidationCode extends PureComponent {
  static propTypes = {
    editPhoneNumber: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    reSendSms: PropTypes.func.isRequired,
    isSubmitCodePending: PropTypes.bool.isRequired,
    lastSend: PropTypes.instanceOf(Date),
    sendVerifCode: PropTypes.func.isRequired,
    code: PropTypes.number,
    setPhoneVerified: PropTypes.func.isRequired,
  };

  static defaultProps = {
    lastSend: null,
    code: null,
  };

  state = {
    error: '',
  };

  checkReSend = () => {
    const { reSendSms, lastSend, phoneNumber } = this.props;
    this.setState({ error: '' });

    return lastSend && phoneVerificationTime(lastSend)
      ? this.setState({
          error: tr('errors.phone.wait_resend'),
        })
      : reSendSms(phoneNumber);
  };

  sendCode = code => {
    const { phoneNumber, sendVerifCode, setPhoneVerified } = this.props;

    sendVerifCode({
      code,
      phoneNumber,
      onSuccess: () => {
        setPhoneVerified();
      },
      onError: (errors, res) =>
        this.setState({ error: getErrorMessage(errors, res) }),
    });
  };

  render() {
    const { error } = this.state;
    const {
      editPhoneNumber,
      isSubmitCodePending,
      phoneNumber,
      code,
    } = this.props;
    return (
      <ValidateCode
        phoneNumber={phoneNumber}
        error={error}
        editPhoneNumber={editPhoneNumber}
        isPending={isSubmitCodePending}
        sendCode={this.sendCode}
        reSendSms={this.checkReSend}
        code={code}
      />
    );
  }
}

const mapStateToProps = ({ kyc: { isSubmitCodePending } }) => ({
  isSubmitCodePending,
});

const mapDispatchToProps = dispatch => ({
  sendVerifCode: bindActionCreators(sendVerifCodeAction, dispatch),
  setPhoneVerified: bindActionCreators(setPhoneVerifiedAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidationCode);
