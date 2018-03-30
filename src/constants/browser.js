import { name } from 'platform';

export const hasSupportedBrowser = !!(
  name &&
  (name.includes('Firefox') || name.includes('Chrome'))
);
