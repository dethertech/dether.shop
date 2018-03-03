/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import tr from '../../../translate';
import { phoneVerificationTime } from '../../../helpers/timers';
import { getErrorMessage } from '../../../helpers/apiResponse';
import ValidateCode from './ValidateCode';
import actions from '../../../actions/';

class ValidationCode extends PureComponent {
  static propTypes = {
    editPhoneNumber: PropTypes.func.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    reSendSms: PropTypes.func.isRequired,
    isSubmitCodePending: PropTypes.bool.isRequired,
    lastSend: PropTypes.instanceOf(Date),
    sendVerifCode: PropTypes.func.isRequired,
    code: PropTypes.number
  };

  static defaultProps = {
    lastSend: null,
    code: null
  };

  state = {
    error: ''
  };

  checkReSend = () => {
    const { reSendSms, lastSend, phoneNumber } = this.props;
    this.setState({ error: '' });

    return lastSend && phoneVerificationTime(lastSend)
      ? this.setState({
        error: tr('errors.phone.wait_resend')
      })
      : reSendSms(phoneNumber);
  };

  sendCode = code => {
    const {
      phoneNumber,
      sendVerifCode,
    } = this.props;

    sendVerifCode({
      code,
      phoneNumber,
      onSuccess: () => console.log('SUCCESS'),
      onError: (errors, res) => this.setState({ error: getErrorMessage(errors, res) })
    });
  };

  render() {
    const { error } = this.state;
    const { editPhoneNumber, isSubmitCodePending, phoneNumber, code } = this.props;
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
  sendVerifCode: params => dispatch(actions.onboard.sendVerifCode(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ValidationCode);
