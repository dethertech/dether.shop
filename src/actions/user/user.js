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
      url: config.kyc.isCertifiedUrl(ethAddress.toLowerCase()),
      onSuccess: data => res(data),
      onError: error => rej(error),
    });
  });

export { setEthAddress, setBalance, checkUserCertified };
