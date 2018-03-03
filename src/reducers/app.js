const initialState = {
  isMetamaskInstalled: false,
  isAppInitialized: false
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_METAMASK_INSTALLED':
      return { ...state, isMetamaskInstalled: payload };
    case 'SET_APP_INITIALIZED':
      return { ...state, isAppInitialized: payload };
    default:
      return state;
  }
};

export default appReducer;
