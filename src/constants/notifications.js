import tr from '../translate';
import { WarningIcon, SuccessIcon } from '../components';

export const notificationsTypes = {
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
};

export const notifications = {
  WARNING: {
    title: tr('notifications.titles.warning'),
    icon: WarningIcon,
  },
  SUCCESS: {
    title: tr('notifications.titles.success'),
    icon: SuccessIcon,
  },
};
