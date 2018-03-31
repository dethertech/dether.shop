import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
/*
  Constants
 */
import { config } from '../../constants';

/*
  Components
 */
import { Panels } from '../../components';
// import BetaModal from './BetaModal';

/*
  Containers
 */
import LeftPanel from '../LeftPanel';
import Map from '../Map';
import MaintenancePage from './MaintenancePage';

/**
 * Home container
 */

// const getVisitCount = () =>
//   Number(window.localStorage.getItem('dether.beta.visit')) || 0;
// const setVisitCount = value =>
//   window.localStorage.setItem('dether.beta.visit', value);

class Home extends PureComponent {
  state = {
    // showModal: getVisitCount() < 3,
  };

  // closeModal = () => {
  //   this.setState({ showModal: false });
  //   setVisitCount(getVisitCount() + 1);
  // };

  render() {
    // const { showModal } = this.state;
    const { isOnMaintenance } = config;

    if (isOnMaintenance) return <MaintenancePage />;
    return (
      <Panels>
        {/* {showModal && <BetaModal close={this.closeModal} />} */}
        <Panels.Left>
          <LeftPanel />
        </Panels.Left>
        <Panels.Right>
          <Map />
        </Panels.Right>
      </Panels>
    );
  }
}

export default withRouter(Home);
