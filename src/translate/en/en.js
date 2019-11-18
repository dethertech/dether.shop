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
      placeholder: 'Enter your country',
    },
    helper:
      'Dether uses a phone number to verify each account. We will never share this information with a third party.',
    valid_button: 'Confirm your phone number',
    modal_text: 'Is this your phone number?',
    modal_valid_button: 'Yes',
    modal_edit_button: 'Edit',
  },
  validate_code: {
    title: 'Enter your verification code',
    subtitle: '4-digit number',
    step: 'Step 1 of 2',
    loader_message: 'Checking your code, please wait a second.',
    code_sent: ({ phoneNumber }) =>
      `A verification code has been sent to ${phoneNumber} || Please wait a few moments to receive it.`,
    change_button: 'Change phone number',
    resend_button: 'Resend verification code',
  },
  check_certify: {
    title: 'Please wait',
    message: 'We are certifying your address, it can take a few minutes',
  },
  add: {
    home: {
      title: 'Shops accepting cryptocurrency',
      desc:
        'Add your business on the Dether map.||Attract cryptocurrency holders to your shop.',
      not_enough_money: ({ minEth, minDth }) =>
        `You must have at least ${minEth.toFixed(
          4,
        )} ETH and ${minDth} DTH to add a shop`,
      not_enough_eth: ({ minEth }) =>
        `You must have at least ${
          minEth && minEth !== 0 ? minEth.toFixed(4) : '0.001'
        } ETH to add a shop`,
      not_enough_dth: ({ minDth }) =>
        `You must have at least ${
          minDth && minDth !== '0'
            ? minDth
            : process.env.REACT_APP_LICENCE_PRICE_DEFAULT
        } DTH to add a shop`,
      terms_check: 'By checking this box, you agree to our',
      terms_link: 'Terms and Conditions',
      bt_add: 'Add your shop on the map',
      metamask_not_installed: ({ linkToMetamask }) =>
        `You should have ##${linkToMetamask}#Metamask## plugin installed and unlocked to be able to register your shop`,
      wrong_network: 'Your are connected to the wrong network',
      browser_not_supported:
        'Your browser is not supported, Metamask is available on Google Chrome and Firefox only.',
    },
    form: {
      title: 'REGISTER YOUR SHOP',
      step: 'Step 2 of 2',
      inputs: {
        address: {
          label: 'Enter your shop address:',
          errors: {
            invalid: 'Invalid address',
            zone: 'This country is not open yet',
          },
        },
        cat: {
          label: 'Category:',
          error: () => 'Must select one category from the list',
          placeholder: () => 'Select a category',
        },
        name: {
          label: 'Name:',
          error: () => 'Name must have between one and 16 characters',
          placeholder: () => 'Name',
        },
        description: {
          label: 'Keywords:',
          error: 'Keyword must have between one and 32 characters',
          placeholder: 'Example: clothes, jeans, food, ...',
        },
        opening: {
          error: () => 'Invalid opening',
          label: 'Select Opening days of your shop:',
        },
      },
      register_btn: 'Add your shop',
    },
    email: {
      notify_email: 'Email',
      notify_button: 'Subscribe',
      notify_message:
        'Leave your email address to be first be notified when the sell feature will be launched in this country',
      notify_done:
        'Done. You will be notified as soon as the sell feature is launched in this country',
      notify_repeated_email: 'This email was already registered',
    },
  },
  header: {
    buy_dth: 'Buy DTH',
    your_balance: 'Your balance',
    refresh: 'Refresh',
  },
  loaderInitializer: {
    title: 'Please wait',
    message: 'We are connecting to your Metamask account',
  },
  footer: {
    all_right_reserved: 'all rights reserved',
    terms_and_conditions: 'Terms and conditions',
    report_bug: 'Report a bug',
    report_shop: 'Report a shop',
    feedback_shop: 'Feedback',
    tutorial: 'Tutorial',
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
    licence_price: ({ price }) => `**Licence price**: ${price} DTH`,
  },
  categories: {
    0: 'Groceries',
    1: 'Clothes Shop',
    2: 'Supermarket',
    3: 'Jewellery',
    4: 'Music Shop',
    5: 'Shoe Shop',
    6: 'Toy Shop',
    7: 'Tea Shop',
    8: 'Flower Shop',
    9: 'Hairdresser',
    10: 'Bookshop',
    11: 'Petshop',
    12: 'Stationer',
    13: 'Optician',
    14: 'DIY Store',
    15: 'Petrol Station',
    16: 'Newsagent',
    17: 'Department Store',
    18: 'Chemist',
    19: 'Other',
    20: 'Restaurant',
  },
  days: {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  },
  errors: {
    global_error: "Sorry... something wen't wrong",
    report_a_bug: {
      title: 'Report this bug',
    },
    phone: {
      invalid: ({ minChar, maxChar }) =>
        `Please enter a valid phone number (it should be at least ${minChar} digits long and maximum ${maxChar})`,
      country_blank: 'You need to select a country in the list',
      wait_resend: 'Please wait 15 seconds before requesting a new code',
    },
    transaction: {
      throw: 'The transaction threw',
      metamask_reject: 'Metamask rejected the transaction',
    },
  },
  show_shop: {
    transaction_pending:
      'We are deleting your shop from the Dether map, it can take few minutes...',
    delete_button: 'Delete Shop',
    submit_button: 'Submit',
    loader_title: 'Please wait',
    loader_delete_message: 'We are deleting your shop from the Dether map...',
    shop_appear_shortly: 'Your shop will appear shortly on the map',
  },
  add_form_verification: {
    transaction_pending:
      'We are adding your shop on the Dether map, it can take few minutes...',
    submit_button: 'Submit',
    edit_button: 'Edit',
    loader_title: 'Please wait',
    loader_add_message: 'We are checking your request',
  },
  beta_send: {
    title: 'Warning!',
    text:
      'Congratulations! Your shop might take a couple minutes to appear on the Dether map. Click on your metamask to see your transaction status.',
    button: 'Ok',
  },
  beta_receive: {
    title: 'Warning!',
    text:
      'Your shop might take a couple minutes to disappear from the Dether map. Click on your metamask to see your transaction status.',
    button: 'Ok',
  },
  map: {
    shop_card: {
      closed: 'closed',
    },
  },
  buy_modal: {
    title: 'Exchanges',
  },
  api: {
    errors: {
      Error: 'Error',
      too_many_requests: 'Please wait 15 seconds before submitting again',
    },
  },
  metamask: {
    check_transaction:
      'Please check your Metamask account to see the status of your transaction. If nothing happens after 5 minutes, try refreshing the app.',
  },
  maintenance_page: {
    title: 'Website in maintenance',
    message:
      'The team is currently making upgrades to improve our service to you.||We’ll be back soon!',
  },
  notifications: {
    titles: {
      warning: 'Warning !',
      success: 'Success !',
    },
    transaction_error:
      'An error has occurred. If a transaction is in progress, please wait. If a transaction is not in progress, please try your operation again.',
    shop_deleted:
      'Your shop has been deleted. It might take a few moments to be removed from the map. Hope to see you again soon!',
    shop_added:
      "Congratulations! You've added a shop. You're on your way to being listed on the Dether map! It might take a few moments to appear on the map–just hang tight!",
    transaction_pending:
      'The transaction is in progress. It may take up to 10 minutes to be processed.',
    transaction_timeout:
      'The transaction has not yet been confirmed. The network may be overloaded, or there may have been a problem processing your transaction. If the transaction is visible in your Metamask history, please wait or try again.',
  },
};

export default en;
