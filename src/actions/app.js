const setMetamaskInstalled = bool => ({
  type: 'SET_METAMASK_INSTALLED',
  payload: bool
});

const setAppInitialized = bool => ({
  type: 'SET_APP_INITIALIZED',
  payload: bool
});

const toggleTermsModal = () => ({
  type: 'TOGGLE_TERMS_MODAL'
});

export {
  setMetamaskInstalled,
  setAppInitialized,
  toggleTermsModal
};
