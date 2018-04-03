const addTransaction = hash => ({
  type: 'ADD_TRANSACTION',
  payload: hash,
});

const resetTransaction = () => ({
  type: 'RESET_TRANSACTION',
});

export { addTransaction, resetTransaction };
