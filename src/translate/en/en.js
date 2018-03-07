/* eslint-disable max-lines */
/* eslint-disable max-len */
import terms from './terms-en';

const en = {
  terms,
  phone: {
    title: 'Enter your phone number',
    step: 'Step 1 of 2',
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
    step: 'Step 1 of 2',
    loader_message: 'Checking your code, please wait a second.',
    code_sent: ({ phoneNumber }) =>
      `Verification code has been sent to ${phoneNumber} || Please wait a few moments to receive it.`,
    change_button: 'Change phone number',
    resend_button: 'Resend verification code'
  },
  add: {
    home: {
      title: 'DETHER FOR SHOP',
      desc:
        'A decentralized application for shops exchanging cryptocurrency for cash or accepting it as a means of payement.',
      metamask_not_installed: 'You need to install Metamask to add your shop',
      not_enougth_money: ({ minEth, minDth }) =>
        `You should have at least ${minEth.toFixed(4)} ETH and ${minDth.toFixed(4)} DTH to add a shop`,
      terms_check: 'I have read and agree to the',
      terms_link: 'Terms and Conditions',
      bt_add: 'Add you shop on the map'
    },
    form: {
      title: 'Register your shop',
      step: 'Step 2 of 2',
      inputs: {
        address: {
          label: 'Address :',
          error: () => 'Invalide address'
        },
        cat: {
          label: 'Category :',
          error: () => 'length min 1 – max 16'
        },
        name: {
          label: 'Name :',
          error: () => 'length min 1 – max 16'
        },
        description: {
          label: 'Description :',
          error: () => 'length min 1 – max 16'
        },
        opening: {
          error: () => 'Invalide opening'
        }
      },
      register_btn: 'Add your shop'
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
    closed_at: 'Closing time :',
    closed: 'closed'
  },
  days: {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  },
  errors: {
    phone: {
      invalid: 'Please enter a valid phone number (it should be at list 5 digits long)',
      country_blank: 'You need to select a country in the list',
      wait_resend: 'Please wait 15 seconds before requesting a new code'
    }
  },
  show_shop: {
    transaction_pending: 'We are deleting your shop from the Dether map, it can take some some minutes...',
    delete_button: 'Delete Shop',
    submit_button: 'Submit',
    loader_title: 'Please wait',
    loader_delete_message: 'We are sendind your delete transaction...'
  },
  add_form_verification: {
    transaction_pending: 'We are adding your shop on the Dether map, it can take some some minutes...',
    submit_button: 'Submit',
    loader_title: 'Please wait',
    loader_add_message: 'We are checking your request'
  }
};

export default en;
