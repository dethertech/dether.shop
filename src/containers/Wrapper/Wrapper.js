import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MenuBurger from './MenuBurger';

/*
  Constants
 */
import withMaintenance from './withMaintenance';

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

/**
 * Home container
 */

export const Home = ({ isNotificationModalOpen }) => (
  <Panels>
    {isNotificationModalOpen && <NotificationModal />}
    <MenuBurger>
      <Panels.Left>
        <LeftPanel />
      </Panels.Left>
    </MenuBurger>
    <Panels.Right>
      <Map />
    </Panels.Right>
  </Panels>
);

Home.propTypes = {
  isNotificationModalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ app }) => ({
  isNotificationModalOpen: app.isNotificationModalOpen,
});

const enhancer = compose(withMaintenance, withRouter, connect(mapStateToProps));
export default enhancer(Home);
