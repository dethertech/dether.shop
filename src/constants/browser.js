import { name } from 'platform';

export const hasSupportedBrowser = !!(
  name &&
  (name.includes('Firefox') || name.includes('Chrome'))
);

export const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
