import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../components';

const BuyModal = ({ closeFunc }) => (
  <Modal closeFunc={closeFunc}>Warning Transaction Fail</Modal>
);

BuyModal.propTypes = {
  closeFunc: PropTypes.func.isRequired,
};

export default BuyModal;
