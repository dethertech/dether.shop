const initialState = {
  transactionType: 'add',
  transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
  shop: null,
  shopPending: {
    name: '',
    address: '',
    description: '',
    calendar: '0000000'
  }
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_DATA_SHOP_PENDING':
      return { ...state, shopPending: { ...state.shopPending, ...payload } };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactionType: payload.type,
        transactionHash: payload.hash
      };
    case 'ADD_SHOP':
      return {
        ...state,
        shopPending: null,
        transactionHash: null,
        shop: { ...state.shop, ...payload }
      };
    case 'REMOVE_SHOP':
      return {
        ...state,
        shop: null,
        shopPending: { ...state.shop }
      };
    default:
      return state;
  }
};

export default shopReducer;
