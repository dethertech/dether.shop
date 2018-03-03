const setMetamaskInstalled = bool => ({
  type: 'SET_METAMASK_INSTALLED',
  payload: bool
});

const setAppInitialized = bool => ({
  type: 'SET_APP_INITIALIZED',
  payload: bool
});

export {
  setMetamaskInstalled,
  setAppInitialized
};
