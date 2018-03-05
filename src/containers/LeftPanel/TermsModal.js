import React from 'react';

import tr from '../../translate';

import Modal from '../../components/Modal';
import Mention from '../../components/Mention';
import { Padding } from '../../components/Spaces';
import { H1 } from '../../components/Headings';

const TermsModal = () => (
  <Modal closeFunc={this.toggleModal}>
    <Padding bottom="l">
      <H1>{tr('footer.terms_and_conditions')}</H1>
    </Padding>
    <Mention>{tr('terms')}</Mention>
  </Modal>
);

export default TermsModal;
