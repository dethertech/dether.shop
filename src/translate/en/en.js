/* eslint-disable max-lines */
/* eslint-disable max-len */
import terms from './terms-en';

const en = {
  terms,
  phone: {
    title: 'Enter your phone number',
    step: 'Step 3 of 4',
    label: 'Your phone number :',
    country: {
      label: 'Your country :',
      placeholder: 'Enter your country name'
    },
    helper:
      'Dether uses a phone number to verify each account. We will never share this information with a third party.',
    valid_button: 'Confirm your phone number',
    modal_text: 'Is this your phone number?',
    modal_valid_button: 'Yes',
    modal_edit_button: 'edit'
  },
  validate_code: {
    title: 'Enter your verification code',
    subtitle: '4-digit number',
    step: 'Step 3 of 4',
    loader_message: 'Checking your code, please wait a second.',
    code_sent: ({ phoneNumber }) =>
      `Verification code has been sent to ${phoneNumber} || Please wait a few moments to receive it.`,
    change_button: 'Change phone number',
    resend_button: 'Resend verification code'
  },
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
  },
  shop_recap: {
    informations: 'Informations :',
    name: 'Name :',
    category: 'Category :',
    address: 'Address :',
    description: 'Description :',
    opening_hours: 'Opening hours :',
    day: 'Day :',
    opened_at: 'Opening time :',
    closed_at: 'Closing time :'
  },
  days: {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  }
};

export default en;
