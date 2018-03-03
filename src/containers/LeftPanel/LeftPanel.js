import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import tr from '../../translate';

// component
import LoaderScreen from '../../components/Screens/LoaderScreen';

/**
 * LeftPanel containers
 * @extends PureComponent
 */
export class LeftPanel extends PureComponent {
  static propTypes = {
    isAppInitialized: PropTypes.bool.isRequired,
    hasShop: PropTypes.bool.isRequired,
    hasTransactionPending: PropTypes.bool.isRequired,

    setHasWeb3: PropTypes.func.isRequired
    // TODO setShop: PropTypes.bool.isRequired
  };

  componentWillMount() {
    this.initApp();
  }

  async initApp() {
    const { isAppInitialized, setHasWeb3 } = this.props;
    if (!isAppInitialized) {
      setTimeout(() => {
        setHasWeb3(true);
      }, 1000);
    }
  }

  render = () => {
    const { isAppInitialized, hasShop, hasTransactionPending } = this.props;

    if (!isAppInitialized) {
      return (
        <LoaderScreen
          title={tr('loaderInitializer.title')}
          message={tr('loaderInitializer.message')}
        />
      );
    } else if (!hasShop || hasTransactionPending) {
      return <div>View Shop</div>;
    }
    return <div>Add shop</div>;
  };
}

const mapStateToProps = ({ app, shop }) => ({
  isAppInitialized: app.isAppInitialized,
  hasShop: !!shop.point,
  hasTransactionPending: !!shop.transactionHash
});

const mapDispatchToProps = (/* dispatch */) => ({
  // TODO setHasWeb3: bindActionCreators(actions.app.setHasWeb3, dispatch),
  setHasWeb3: () => {} // TODO REMOVE
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
