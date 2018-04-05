import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkUserCertified as checkUserCertifiedAction } from '../../../actions';
import { LoaderScreen } from '../../../components';
import tr from '../../../translate';

class CertifyPending extends PureComponent {
  static propTypes = {
    checkUserCertified: PropTypes.func.isRequired,
    ethAddress: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { checkUserCertified, ethAddress } = this.props;

    this.interval = setInterval(() => checkUserCertified(ethAddress), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

const mapStateToProps = ({ user }) => ({
  ethAddress: user.ethAddress,
});

const mapDispatchToProps = dispatch => ({
  checkUserCertified: bindActionCreators(checkUserCertifiedAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CertifyPending);
