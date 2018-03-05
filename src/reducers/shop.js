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
    case 'SET_SHOP_POSITION':
      return { ...state, shopPending: { ...state.shopPending, address: payload.address } };
    case 'SET_PHONE':
      return { ...state, shopPending: { ...state.shopPending, phone: payload.address } };
    case 'UPDATE_SHOP_INFO_PENDING':
      return { ...state, shopPending: { ...state.shopPending, ...payload } };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactionType: payload.type,
        transactionHash: payload.hash
      };
    case 'SET_SHOP':
      return {
        ...state,
        shopPending: null,
        transactionHash: null,
        shop: { ...state.shop, ...payload }
      };
    default:
      return state;
  }
};

export default shopReducer;
