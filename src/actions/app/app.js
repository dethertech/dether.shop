import { getLicenceShop } from '../../helpers';

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

const setLicencePrice = licencePrice => ({
  type: 'SET_LICENCE_PRICE',
  payload: licencePrice
});

const fetchClientInfo = ({ onSuccess }) => ({
  type: 'API:FETCH_USER_INFO',
  url: 'https://ipinfo.io/json',
  onSuccess
});

const getLicencePrice = async (dispatch, country) => {
  try {
    const licencePrice = await getLicenceShop(country || 'FR');
    dispatch(setLicencePrice(licencePrice));
  } catch (e) {
    console.log(e);
    dispatch(setLicencePrice(40));
  }
};

const initializeClientInfo = () => async dispatch => (
  new Promise((res, rej) => {
    dispatch(fetchClientInfo({
      onSuccess: data => res(getLicencePrice(dispatch, data.country)),
      onError: error => rej(error)
    }));
  })
);


export {
  setMetamaskInstalled,
  setAppInitialized,
  toggleTermsModal,
  setEthNetwork,
  acceptTerms,
  setLicencePrice,
  initializeClientInfo
};
