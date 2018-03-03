const initialState = {
  isMetamaskInstalled: false,
  isAppInitialized: false
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_METAMASK_INSTALLED':
      return { ...state, isMetamaskInstalled: payload };
    case 'SET_APP_INITIALAZED':
      return { ...state, balance: payload };
    default:
      return state;
  }
};

export default appReducer;
