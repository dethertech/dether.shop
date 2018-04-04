import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/*
  Constants
 */
import { config } from '../../constants';

/*
  Components
 */
import { Panels } from '../../components';
import NotificationModal from './NotificationModal';

/*
  Containers
 */
import LeftPanel from '../LeftPanel';
import Map from '../Map';
import MaintenancePage from './MaintenancePage';

/**
 * Home container
 */

export const Home = ({ isNotificationModalOpen }) => {
  const { isOnMaintenance } = config;

  if (isOnMaintenance) return <MaintenancePage />;
  return (
    <Panels>
      {isNotificationModalOpen && <NotificationModal />}
      <Panels.Left>
        <LeftPanel />
      </Panels.Left>
      <Panels.Right>
        <Map />
      </Panels.Right>
    </Panels>
  );
};

Home.propTypes = {
  isNotificationModalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ app }) => ({
  isNotificationModalOpen: app.isNotificationModalOpen,
});

export default withRouter(connect(mapStateToProps)(Home));
