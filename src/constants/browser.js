import { name } from 'platform';

export const hasSupportedBrowser = !!(
  name &&
  (name.includes('Firefox') || name.includes('Chrome'))
);

export const isMobile = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(max-width: 768px)').matches;
