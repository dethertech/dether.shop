import config from '../constants/config';

export const initialState = {
  isMetamaskInstalled: false,
  isAppInitialized: false,
  isTermsModalOpenened: false,
  ethNetwork: null,
  areTermsAccepted: false
};

export const hasGoodNetwork = ({ ethNetwork }) => ethNetwork && ethNetwork === config.ethNetwork;

/**
 * appReducer
 */
const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_METAMASK_INSTALLED':
      return { ...state, isMetamaskInstalled: payload };
    case 'SET_APP_INITIALIZED':
      return { ...state, isAppInitialized: payload };
    case 'TOGGLE_TERMS_MODAL':
      return { ...state, isTermsModalOpenened: !state.isTermsModalOpenened };
    case 'SET_ETH_NETWORK':
      return { ...state, ethNetwork: payload };
    case 'ACCEPT_TERMS':
      return { ...state, areTermsAccepted: true };
    default:
      return state;
  }
};

export default appReducer;
