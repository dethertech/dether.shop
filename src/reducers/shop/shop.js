const initialState = {
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
    opening: '0000000',
  },
};

/**
 * shopReducer
 */
const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_DATA_SHOP_PENDING':
      return { ...state, pendingShop: { ...state.pendingShop, ...payload } };
    case 'ADD_SHOP':
      return {
        ...state,
        pendingShop: initialState.pendingShop,
        shop: { ...state.shop, ...payload },
      };
    case 'REMOVE_SHOP':
      return {
        ...state,
        shop: null,
        pendingShop: { ...initialState.pendingShop },
      };
    default:
      return state;
  }
};

export default shopReducer;
