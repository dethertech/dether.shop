import { uniqueArray } from '../../helpers';

const initialState = {
  userPosition: { lat: 48.8628, lng: 2.3292 },
  centerPosition: { lat: 48.8628, lng: 2.3292 },
  contentOnCard: {},
  mapInitiated: false,
  cardOpened: false,
  userInfo: {},
  shops: [],
};

/**
 * mapReducer
 */
const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER_POSITION':
      return { ...state, userPosition: payload };
    case 'SET_CENTER_POSITION':
      return { ...state, centerPosition: payload };
    case 'SET_MAP_INITIATED':
      return { ...state, mapInitiated: true };
    case 'FETCH_USER_INFO_SUCCESS': {
      const infos = payload.data;
      return {
        ...state,
        userInfo: { iso: infos.country, postcode: infos.postal },
      };
    }
    case 'FETCH_SHOPS_SUCCESS': {
      const { shops } = payload.data;
      return {
        ...state,
        shops: uniqueArray([...state.shops, ...shops], 'id')
      };
    }
    case 'FETCH_POSITION_BY_IP_SUCCESS': {
      const loc = payload.data.loc.split(',').map(l => parseFloat(l));
      const position = { lat: loc[0], lng: loc[1] };
      return ({ ...state, userPosition: position, centerPosition: position });
    }
    case 'SET_SHOP_ON_CARD':
      return {
        ...state,
        contentOnCard: {
          type: 'shop',
          content: payload
        },
        cardOpened: true,
      };
    case 'OPEN_CARD':
      return { ...state, cardOpened: true };
    case 'CLOSE_CARD':
      return { ...state, cardOpened: false, contentOnCard: {} };
    default:
      return state;
  }
};

export default mapReducer;
