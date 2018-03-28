/* eslint-disable max-lines */
/* eslint-disable max-len */
import terms from './terms-en';

const en = {
  terms,
  phone: {
    title: 'Enter your phone number',
    step: 'Step 1 of 2',
    label: 'Your phone number:',
    country: {
      label: 'Your country:',
      placeholder: 'Enter your country'
    },
    helper:
      'Dether uses a phone number to verify each account. We will never share this information with a third party.',
    valid_button: 'Confirm your phone number',
    modal_text: 'Is this your phone number?',
    modal_valid_button: 'Yes',
    modal_edit_button: 'Edit'
  },
  validate_code: {
    title: 'Enter your verification code',
    subtitle: '4-digit number',
    step: 'Step 1 of 2',
    loader_message: 'Checking your code, please wait a second.',
    code_sent: ({ phoneNumber }) =>
      `A verification code has been sent to ${phoneNumber} || Please wait a few moments to receive it.`,
    change_button: 'Change phone number',
    resend_button: 'Resend verification code'
  },
  add: {
    home: {
      title: 'CRYPTOCURRENCY FOR SHOPS',
      desc:
        'Add your retail business on the Dether map. Expand your visibility in the Dether ecosystem of crypto buyers and sellers.',
      not_enough_money: ({ minEth, minDth }) =>
        `You must have at least ${minEth.toFixed(4)} ETH and ${minDth} DTH to add a shop`,
      not_enough_eth: ({ minEth }) =>
        `You must have at least ${minEth.toFixed(4)} ETH to add a shop`,
      not_enough_dth: ({ minDth }) =>
        `You must have at least ${minDth} DTH to add a shop`,
      terms_check: 'By checking this box, you agree to our',
      terms_link: 'Terms and Conditions',
      bt_add: 'Add your shop on the map',
      metamask_not_installed: ({ linkToMetamask }) =>
        `You should have ##${linkToMetamask}#Metamask## plugin installed and unlocked to be able to register your shop`,
      wrong_network: 'Your are connected to the wrong network',
      browser_not_supported: 'Your browser is not supported, Metamask is available on Google Chrome and Firefox only.'
    },
    form: {
      title: 'REGISTER YOUR SHOP',
      step: 'Step 2 of 2',
      inputs: {
        address: {
          label: 'Address:',
          errors: {
            invalid: 'Invalid address',
            zone: 'This Zone is not openened'
          }
        },
        cat: {
          label: 'Category:',
          error: () => 'length min 1 – max 16',
          placeholder: () => 'length min 1 – max 16'
        },
        name: {
          label: 'Name:',
          error: () => 'length min 1 – max 16',
          placeholder: () => 'length min 1 – max 16'
        },
        description: {
          label: 'Description:',
          error: 'length min 1 – max 32',
          placeholder: 'length min 1 – max 32'
        },
        opening: {
          error: () => 'Invalid opening',
          label: 'Select Opening days of your shop:'
        }
      },
      register_btn: 'Add your shop'
    }
  },
  header: {
    buy_dth: 'Buy DTH',
    your_balance: 'Your balance',
    refresh: 'Refresh'
  },
  loaderInitializer: {
    title: 'Please wait',
    message: 'We are connecting to your Metamask account'
  },
  footer: {
    all_right_reserved: 'all rights reserved',
    terms_and_conditions: 'Terms and conditions',
    report_bug: 'Report a bug',
    report_shop: 'Report a shop'
  },
  shop_recap: {
    informations: 'Information:',
    name: 'Name:',
    category: 'Category:',
    address: 'Address:',
    description: 'Description:',
    opening_hours: 'Opening hours:',
    day: 'Day:',
    opened_at: 'Opening time:',
    closed_at: 'Closing time:',
    closed: 'closed',
    licence_price: ({ price }) => `**Licence price**: ${price} DTH`
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
    },
    transaction: {
      throw: 'The transaction threw',
      metamask_reject: 'Metamask rejected the transaction'
    }
  },
  show_shop: {
    transaction_pending: 'We are deleting your shop from the Dether map, it can take few minutes...',
    delete_button: 'Delete Shop',
    submit_button: 'Submit',
    loader_title: 'Please wait',
    loader_delete_message: 'We are deleting your shop from the Dether map...'
  },
  add_form_verification: {
    transaction_pending: 'We are adding your shop on the Dether map, it can take few minutes...',
    submit_button: 'Submit',
    edit_button: 'Edit',
    loader_title: 'Please wait',
    loader_add_message: 'We are checking your request'
  },
  beta: {
    title: 'Warning!',
    text: 'Dether app is a Beta version. || Use it at your own risk',
    button: 'I agree'
  },
  map: {
    shop_card: {
      closed: 'closed'
    }
  },
  buy_modal: {
    title: 'Exchange'
  }
};

export default en;
