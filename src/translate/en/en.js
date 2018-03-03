/* eslint-disable max-lines */
/* eslint-disable max-len */
import terms from './terms-en';

const en = {
  terms,

  add: {
    home: {
      title: 'DETHER FOR SHOP',
      description:
        'A decentralized application for shops exchanging cryptocurrency for cash or accepting it as a means of payement.',
      metamask_not_installed: 'You need to install Metamask to add your shop',
      not_enougth_money: ({ minEth, minDth }) =>
        `You should have at least ${minEth.toFixed(4)} ETH and ${minDth.toFixed(4)} DTH to add a shop`,
      terms_check: 'I have read and agree to the',
      terms_link: 'Terms and Conditions',
      bt_add: 'Add you shop on the map'
    }
  },

  header: {
    buy_dth: 'Buy DTH',
    your_balance: 'your balance',
    refresh: 'Refresh'
  },
  loaderInitializer: {
    title: 'Please wait',
    message: 'Wy are trying to connect to your Metamask acount'
  },
  footer: {
    all_right_reserved: 'all rights reserved',
    terms_and_conditions: 'Terms and conditions'
  }
};

export default en;
