export default state => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({
    ...state,
    app: {
      isMetamaskInstalled: false,
      isAppInitialized: false,
      isTermsModalOpenened: false,
      isNotificationModalOpen: false,
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
      shop: {
        name: 'test',
        cat: 'more test',
        description: 'more more test',
        opening: '0000000',
        lat: '48.8628',
        lng: '2.3292',
      },
      transactionType: 'add',
      transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
      point: null,
      pendingShop: {
        transactionType: 'add',
        transactionHash: null, // if transactionHash !== null so you have a Transaction in pending
        point: null,
        pointPending: {
          name: '',
          address: '',
          description: '',
          calendar: '0000000',
        },
      },
    },
    user: {
      balance: {
        eth: 0,
        dth: 0,
      },
      isCertified: true,
      phoneVerified: false,
    },
    transaction: {
      pending: false,
      hash: null,
      sentTime: null,
    },
  }),
});
