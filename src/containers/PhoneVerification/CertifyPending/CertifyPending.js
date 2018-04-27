import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  checkUserCertified as checkUserCertifiedAction,
  resetPhoneVerified as resetPhoneVerifiedAction,
} from '../../../actions';
import { LoaderScreen } from '../../../components';
import tr from '../../../translate';

class CertifyPending extends PureComponent {
  static propTypes = {
    checkUserCertified: PropTypes.func.isRequired,
    ethAddress: PropTypes.string.isRequired,
    phoneVerified: PropTypes.instanceOf(Date).isRequired,
    resetPhoneVerified: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      checkUserCertified,
      ethAddress,
      phoneVerified,
      resetPhoneVerified,
    } = this.props;

    this.interval = setInterval(async () => {
      await checkUserCertified(ethAddress);
      if (new Date() - phoneVerified > 60000) return resetPhoneVerified();
    }, 4000);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  render() {
    return (
      <LoaderScreen
        title={tr('check_certify.title')}
        message={tr('check_certify.message')}
      />
    );
  }
}

const mapStateToProps = ({ user, kyc }) => ({
  ethAddress: user.ethAddress,
  phoneVerified: new Date(kyc.phoneVerified),
});

const mapDispatchToProps = dispatch => ({
  checkUserCertified: bindActionCreators(checkUserCertifiedAction, dispatch),
  resetPhoneVerified: bindActionCreators(resetPhoneVerifiedAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CertifyPending);
