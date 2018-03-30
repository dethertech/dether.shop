/* global describe it expect */
import {
  setMetamaskInstalled,
  setAppInitialized,
  toggleTermsModal,
  setEthNetwork,
  acceptTerms
} from './app';

describe('App actions', () => {
  it('should create an actions to set true or false if metamask is installed' , () => {
    const payload = true;
    const expectedAction = {
      payload,
      type: 'SET_METAMASK_INSTALLED'
    }
    expect(setMetamaskInstalled(payload)).toEqual(expectedAction);
  })

  it('should create an actions to set true or false if app is initialized' , () => {
    const payload = true;
    const expectedAction = {
      payload,
      type: 'SET_APP_INITIALIZED'
    }
    expect(setAppInitialized(payload)).toEqual(expectedAction);
  })

  it('should create an actions to toggle terms modal' , () => {
    const expectedAction = {
      type: 'TOGGLE_TERMS_MODAL'
    }
    expect(toggleTermsModal()).toEqual(expectedAction);
  })

  it('should create an actions to the network' , () => {
    const payload = 42;
    const expectedAction = {
      payload,
      type: 'SET_ETH_NETWORK'
    }
    expect(setEthNetwork(payload)).toEqual(expectedAction);
  })

  it('should create an actions to accept terms' , () => {
    const expectedAction = {
      type: 'ACCEPT_TERMS'
    }
    expect(acceptTerms()).toEqual(expectedAction);
  })
});
