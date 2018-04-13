import React from 'react';
import tr from '../translate';
import { Svg } from '../components';

export const notificationsTypes = {
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
};

export const notifications = {
  WARNING: {
    title: tr('notifications.titles.warning'),
    icon: () => <Svg type="WarningIcon" />,
  },
  SUCCESS: {
    title: tr('notifications.titles.success'),
    icon: () => <Svg type="SuccessIcon" />,
  },
};
