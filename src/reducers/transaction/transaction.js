const initialState = {
  pending: false,
  hash: null,
  sentTime: null,
};

const transactionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        pending: true,
        hash: payload,
        sentTime: new Date(),
      };
    case 'SET_TRANSACTION_HASH':
      return { ...state, hash: payload };
    case 'RESET_TRANSACTION':
      return initialState;
    default:
      return state;
  }
};

export default transactionReducer;
