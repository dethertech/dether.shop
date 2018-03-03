const initialState = {
  transactionType: 'add',
  transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
  point: null,
  pointPending: {
    name: '',
    address: '',
    description: '',
    calendar: '0000000'
  }
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SHOP_POSITION':
      return { ...state, pointPending: { ...state.pointPending, address: payload.address } };
    case 'SET_PHONE':
      return { ...state, pointPending: { ...state.pointPending, phone: payload.address } };
    case 'UPDATE_SHOP_INFO_PENDING':
      return { ...state, pointPending: { ...state.pointPending, ...payload } };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactionType: payload.type,
        transactionHash: payload.hash
      };
    case 'ADD_SHOP_INFO':
      return {
        ...state,
        pointPending: null,
        transactionHash: null,
        point: { ...state.point, ...payload }
      };
    default:
      return state;
  }
};

export default shopReducer;
