/* eslint max-lines: 0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PhoneForm from './PhoneForm';
import ValidateCodeContainer from './ValidateCode';
import LoaderScreen from '../../../components/Screens/LoaderScreen';
import actions from '../../../actions/';
import { getErrorMessage } from '../../../helpers/apiResponse';

class PhoneVerification extends PureComponent {
  static propTypes = {
    pending: PropTypes.shape({}).isRequired,
    submitPhonePending: PropTypes.func.isRequired,
    submitPhoneSuccess: PropTypes.func.isRequired,
    submitPhoneError: PropTypes.func.isRequired,
    sendSms: PropTypes.func.isRequired,
    ethAddress: PropTypes.string.isRequired,
    setPhone: PropTypes.func.isRequired,
    setPhoneCountry: PropTypes.func.isRequired,
    setPhoneSent: PropTypes.func.isRequired,
    phone: PropTypes.string.isRequired,
    phoneCountry: PropTypes.shape({}),
    phoneSent: PropTypes.bool.isRequired
  };

  static defaultProps = {
    phoneCountry: null
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: props.phone || '',
      phoneCountry: props.phoneCountry,
      error: '',
      code: null
    };
  }

  submitPhoneSuccess = ({ data }) => {
    const { phoneNumber, phoneCountry } = this.state;
    const { submitPhoneSuccess, setPhone, setPhoneSent, setPhoneCountry } = this.props;
    this.setState({ code: data.code });
    submitPhoneSuccess();
    this.setState({ lastSend: new Date() });
    setPhone(phoneNumber);
    setPhoneCountry(phoneCountry);
    setPhoneSent(true);
  };

  submitPhoneError = (errors, res) => {
    const { submitPhoneError } = this.props;
    const message = getErrorMessage(errors, res);
    this.setState({ error: message });
    submitPhoneError();
  };

  editPhoneNumber = () => {
    const { setPhoneSent } = this.props;
    setPhoneSent(false);
  };

  submitPhone = (phoneNumber, phoneCountry) => {
    const { submitPhonePending, sendSms, ethAddress } = this.props;

    const stateToChange = phoneCountry ? { phoneNumber, phoneCountry } : { phoneNumber };
    this.setState(
      () => stateToChange,
      () => {
        submitPhonePending();
        sendSms({
          phoneNumber,
          ethAddress,
          onSuccess: this.submitPhoneSuccess,
          onError: this.submitPhoneError
        });
      }
    );
  };

  render = () => {
    const { lastSend, phoneNumber, phoneCountry, error, code } = this.state;
    const { phoneSent, pending } = this.props;

    if (!phoneSent && !pending.SUBMIT_PHONE) {
      return <PhoneForm submitError={error} onSubmit={this.submitPhone} country={phoneCountry} />;
    }

    if (pending.SUBMIT_PHONE) {
      return <LoaderScreen />;
    }

    return (
      <ValidateCodeContainer
        phoneNumber={phoneNumber}
        editPhoneNumber={this.editPhoneNumber}
        reSendSms={this.submitPhone}
        phoneSent={phoneSent}
        lastSend={lastSend}
        code={code}
      />
    );
  };
}

const mapStateToProps = state => ({
  pending: state.pending,
  ethAddress: state.wallet.ethAddress,
  phone: state.onboard.phone,
  phoneSent: state.onboard.phoneSent,
  phoneCountry: state.onboard.phoneCountry
});

const mapDispatchToProps = dispatch => ({
  submitPhonePending: () => dispatch({ type: 'SUBMIT_PHONE_PENDING' }),
  submitPhoneSuccess: () => dispatch({ type: 'SUBMIT_PHONE_SUCCESS' }),
  submitPhoneError: () => dispatch({ type: 'SUBMIT_PHONE_ERROR' }),
  sendSms: params => dispatch(actions.onboard.sendSms(params)),
  setPhone: phone => dispatch(actions.onboard.setPhone(phone)),
  setPhoneCountry: country => dispatch(actions.onboard.setPhoneCountry(country)),
  setPhoneSent: bool => dispatch(actions.onboard.setPhoneSent(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneVerification);
