import { config } from '../../constants';

const setEthAddress = ethAddress => ({
  type: 'SET_ETH_ADDRESS',
  payload: ethAddress,
});

const setBalance = balance => ({
  type: 'SET_BALANCE',
  payload: balance,
});

const checkUserCertified = ethAddress => dispatch =>
  new Promise((res, rej) => {
    dispatch({
      type: 'API:FETCH_USER_CERTIFIED',
      url: config.kyc.isCertifiedUrl(ethAddress),
      onSuccess: data => res(data),
      onError: error => rej(error),
    });
  });

const setPhoneVerified = () => ({
  type: 'SET_PHONE_VERIFIED',
});

const resetPhoneVerified = () => ({
  type: 'RESET_PHONE_VERIFIED',
});

export {
  setEthAddress,
  setBalance,
  checkUserCertified,
  setPhoneVerified,
  resetPhoneVerified,
};
