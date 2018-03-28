import React from 'react';
import PropTypes from 'prop-types';

import tr from '../../translate';

import { Modal, Mention } from '../../components';
import { Padding } from '../../components/Spaces';
import { H1 } from '../../components/Headings';

const TermsModal = ({ closeFunc }) => (
  <Modal closeFunc={closeFunc}>
    <Padding bottom="l">
      <H1>{tr('footer.terms_and_conditions')}</H1>
    </Padding>
    <Mention>{tr('terms')}</Mention>
  </Modal>
);

TermsModal.propTypes = {
  closeFunc: PropTypes.func.isRequired,
};

export default TermsModal;
