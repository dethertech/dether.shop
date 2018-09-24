import { getLicenceShop } from '../../helpers';

/**
 * setMetamaskInstalled
 * @param {boolean} bool if metamask is installed
 */
const setMetamaskInstalled = bool => ({
  type: 'SET_METAMASK_INSTALLED',
  payload: bool,
});

/**
 * setAppInitialized
 * @param {boolean} bool [description]
 */
const setAppInitialized = bool => ({
  type: 'SET_APP_INITIALIZED',
  payload: bool,
});

/**
 * toggleTermsModal
 */
const toggleTermsModal = () => ({
  type: 'TOGGLE_TERMS_MODAL',
});

/**
 * openNotificationModal
 */
const openNotificationModal = ({ type, message }) => ({
  type: 'OPEN_NOTIFICATION_MODAL',
  payload: { type, message },
});

/**
 * closeNotificationModal
 */
const closeNotificationModal = () => ({
  type: 'CLOSE_NOTIFICATION_MODAL',
});

/**
 * [setEthNetwork description]
 * @param {[type]} id [description]
 */
const setEthNetwork = id => ({
  type: 'SET_ETH_NETWORK',
  payload: id,
});

/**
 * [acceptTerms description]
 * @return {[type]} [description]
 */
const acceptTerms = () => ({ type: 'ACCEPT_TERMS' });

const setLicencePrice = licencePrice => ({
  type: 'SET_LICENCE_PRICE',
  payload: licencePrice,
});

const fetchClientInfo = ({ onSuccess, onError }) => ({
  type: 'API:FETCH_USER_INFO',
  url: `https://ipinfo.io/json?token=${process.env.REACT_APP_TOKEN_IPINFO}`,
  onSuccess,
  onError,
});

const getLicencePrice = async (dispatch, country) => {
  try {
    const licencePrice = await getLicenceShop(country || 'FR');
    dispatch(setLicencePrice(licencePrice || 40));
  } catch (e) {
    dispatch(setLicencePrice(40));
  }
};

/**
 * Fetch Client Informations via ip and get the licence price for his country
 */
const initializeClientInfo = () => async dispatch =>
  new Promise(res => {
    dispatch(
      fetchClientInfo({
        onSuccess: data => res(getLicencePrice(dispatch, data.country)),
        onError: () => res(getLicencePrice(dispatch, 'EE')),
      }),
    );
  });

export {
  setMetamaskInstalled,
  setAppInitialized,
  toggleTermsModal,
  openNotificationModal,
  closeNotificationModal,
  setEthNetwork,
  acceptTerms,
  setLicencePrice,
  initializeClientInfo,
};
