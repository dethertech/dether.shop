export default state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({
    ...state,
    map: {
      userPosition: { lat: 48.8628, lng: 2.3292 },
      centerPosition: { lat: 48.8628, lng: 2.3292 },
      contentOnCard: {},
      mapInitiated: false,
      cardOpened: false,
      userInfo: {},
      tellers: [],
      shops: [],
    }
  }),
});
