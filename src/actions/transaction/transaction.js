const addTransaction = hash => ({
  type: 'ADD_TRANSACTION',
  payload: hash,
});

const resetTransaction = () => ({
  type: 'RESET_TRANSACTION',
});

const setTransactionHash = hash => ({
  type: 'SET_TRANSACTION_HASH',
  payload: hash,
});

export { addTransaction, resetTransaction, setTransactionHash };
