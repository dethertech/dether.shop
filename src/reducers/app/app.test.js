/* global describe it expect */
import deepFreeze from 'deep-freeze';

import appReducer, { hasGoodNetwork } from './app';
import config from '../../constants/config';

describe('reducer::app', () => {
  let defaultAction;

  beforeEach(() => {
    defaultAction = {
      isMetamaskInstalled: false,
      isAppInitialized: false,
      isTermsModalOpenened: false,
      isNotificationModalOpen: false,
      notificationType: null,
      notificationMessage: null,
      ethNetwork: null,
      areTermsAccepted: false,
      licencePrice: null
    };
    deepFreeze(defaultAction);
  });

  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(defaultAction);
  });

  it('should return ethereum network', () => {
    expect(hasGoodNetwork({ ethNetwork: config.ethNetwork })).toEqual(true)
  })

  describe('SET_METAMASK_INSTALLED', () => {
    const payload = true;
    const action = {
      type: 'SET_METAMASK_INSTALLED',
      payload,
    };

    it('should handle SET_METAMASK_INSTALLED', () => {
      expect(appReducer(defaultAction, action)).toEqual({ ...defaultAction, isMetamaskInstalled: true });
    });
  });

  describe('SET_APP_INITIALIZED', () => {
    const payload = true;
    const action = {
      type: 'SET_APP_INITIALIZED',
      payload,
    };

    it('should handle SET_APP_INITIALIZED', () => {
      expect(appReducer(defaultAction, action)).toEqual({ ...defaultAction, isAppInitialized: true });
    });
  });

  describe('TOGGLE_TERMS_MODAL', () => {
    const action = {
      type: 'TOGGLE_TERMS_MODAL',
    };

    it('should handle TOGGLE_TERMS_MODAL', () => {
      expect(appReducer(defaultAction, action)).toEqual({ ...defaultAction, isTermsModalOpenened: true });
    });
  });

  describe('SET_ETH_NETWORK', () => {
    const payload = 42;
    const action = {
      type: 'SET_ETH_NETWORK',
      payload,
    };

    it('should handle SET_ETH_NETWORK', () => {
      expect(appReducer(defaultAction, action)).toEqual({ ...defaultAction, ethNetwork: 42 });
    });
  });

  describe('ACCEPT_TERMS', () => {
    const action = {
      type: 'ACCEPT_TERMS',
    };

    it('should handle ACCEPT_TERMS', () => {
      expect(appReducer(defaultAction, action)).toEqual({ ...defaultAction, areTermsAccepted: true });
    });
  });
});
