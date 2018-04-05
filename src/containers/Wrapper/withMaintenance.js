import React from 'react';
import MaintenancePage from './MaintenancePage';
import { config } from '../../constants';

const withMaintenance = Component => props => {
  if (config.isOnMaintenance) {
    return <MaintenancePage />;
  }
  return <Component {...props} />;
};

export default withMaintenance;
