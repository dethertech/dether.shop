/**
 * setEthAddress
 * @param {[type]} ethAddress [description]
 */
const setEthAddress = ethAddress => ({
  type: 'SET_ETH_ADDRESS',
  payload: ethAddress,
});

/**
 * setBalance
 * @param {[type]} balance [description]
 */
const setBalance = balance => ({
  type: 'SET_BALANCE',
  payload: balance,
});

/**
 * setUserCertified
 * @param {[type]} bool [description]
 */
const setUserCertified = bool => ({
  type: 'SET_USER_CERTIFIED',
  payload: bool,
});

export { setEthAddress, setBalance, setUserCertified };
