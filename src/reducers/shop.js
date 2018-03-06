const initialState = {
  transactionType: 'add',
  transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
  shop: null,
  pendingShop: {
    lat: null,
    lng: null,
    address: null,
    countryId: null,
    postalCode: null,
    name: '',
    description: '',
    cat: '',
    opening: '0000000'
  }
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_DATA_SHOP_PENDING':
      return { ...state, pendingShop: { ...state.pendingShop, ...payload } };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactionType: payload.type,
        transactionHash: payload.hash
      };
    case 'ADD_SHOP':
      return {
        ...state,
        pendingShop: null,
        transactionHash: null,
        shop: { ...state.shop, ...payload }
      };
    case 'REMOVE_SHOP':
      return {
        ...state,
        shop: null,
        pendingShop: { ...state.shop }
      };
    default:
      return state;
  }
};

export default shopReducer;
