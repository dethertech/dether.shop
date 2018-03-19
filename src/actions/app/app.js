/**
 * setMetamaskInstalled
 * @param {boolean} bool if metamask is installed
 */
const setMetamaskInstalled = bool => ({
  type: 'SET_METAMASK_INSTALLED',
  payload: bool
});

/**
 * setAppInitialized
 * @param {boolean} bool [description]
 */
const setAppInitialized = bool => ({
  type: 'SET_APP_INITIALIZED',
  payload: bool
});

/**
 * toggleTermsModal
 */
const toggleTermsModal = () => ({
  type: 'TOGGLE_TERMS_MODAL'
});

/**
 * [setEthNetwork description]
 * @param {[type]} id [description]
 */
const setEthNetwork = id => ({
  type: 'SET_ETH_NETWORK',
  payload: id
});

/**
 * [acceptTerms description]
 * @return {[type]} [description]
 */
const acceptTerms = () => ({ type: 'ACCEPT_TERMS' });

export {
  setMetamaskInstalled,
  setAppInitialized,
  toggleTermsModal,
  setEthNetwork,
  acceptTerms
};
