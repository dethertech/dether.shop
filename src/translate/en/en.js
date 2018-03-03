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
    helper: 'Dether uses a phone number to verify each account. We will never share this information with a third party.',
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
  }
};

export default en;
