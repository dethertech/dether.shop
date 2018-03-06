export default state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({
    ...state,
    app: {
      isMetamaskInstalled: false,
      isAppInitialized: false,
      isTermsModalOpenened: false
    },
    map: {
      userPosition: { lat: 48.8628, lng: 2.3292 },
      centerPosition: { lat: 48.8628, lng: 2.3292 },
      contentOnCard: {},
      mapInitiated: false,
      cardOpened: false,
      userInfo: {},
      tellers: [],
      shops: [],
    },
    shop: {
      transactionType: 'add',
      transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
      point: null,
      pointPending: {
        name: '',
        address: '',
        description: '',
        calendar: '0000000'
      }
    },
    pendingShop: {
      transactionType: 'add',
      transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
      point: null,
      pointPending: {
        name: '',
        address: '',
        description: '',
        calendar: '0000000'
      }
    },
    user: {
      balance: {
        eth: 0,
        dth: 0
      }
    }
  }),
});
