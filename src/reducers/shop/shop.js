export const initialState = {
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
    displayShopWillAppear: false,
  },
};

/**
 * shopReducer
 */
const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_DATA_SHOP_PENDING':
      return { ...state, pendingShop: { ...state.pendingShop, ...payload } };
    case 'SET_ADDRESS_SHOP_PENDING':
      return {
        ...state,
        pendingShop: {
          ...state.pendingShop,
          lat: payload.lat,
          lng: payload.lng,
          address: payload.address,
          countryId: payload.countryId,
          postalCode: payload.postalCode,
        },
      };
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
    case 'DISPLAY_SHOP_WILL_APPEAR':
      return { ...state, displayShopWillAppear: payload };
    default:
      return state;
  }
};

export default shopReducer;
