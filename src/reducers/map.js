const initialState = {
  userPosition: { lat: 48.8628, lng: 2.3292 },
};

const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER_POSITION':
      return { ...state, userPosition: payload.userPosition };
    default:
      return state;
  }
};

export default mapReducer;
