const setEthAddress = ethAddress => ({
  type: 'SET_ETH_ADDRESS',
  payload: { ethAddress }
});

const setBalance = balance => ({
  type: 'SET_BALANCE',
  payload: { balance }
});

const setUserCertified = bool => ({
  type: 'SET_USER_CERTIFIED',
  payload: bool
});

export {
  setEthAddress,
  setBalance,
  setUserCertified
};
