/**
 * setMetamaskInstalled
 * @param {[type]} bool [description]
 */
const setMetamaskInstalled = bool => ({
  type: 'SET_METAMASK_INSTALLED',
  payload: bool
});

/**
 * setAppInitialized
 * @param {[type]} bool [description]
 */
const setAppInitialized = bool => ({
  type: 'SET_APP_INITIALIZED',
  payload: bool
});

/**
 * toggleTermsModal
 * @return {[type]} [description]
 */
const toggleTermsModal = () => ({
  type: 'TOGGLE_TERMS_MODAL'
});

export {
  setMetamaskInstalled,
  setAppInitialized,
  toggleTermsModal
};
