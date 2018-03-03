const setEthAddress = ethAddress => ({
  type: 'SET_ETH_ADDRESS',
  payload: { ethAddress }
});

const setBalance = balance => ({
  type: 'SET_BALANCE',
  payload: { balance }
});

export {
  setEthAddress,
  setBalance
};
