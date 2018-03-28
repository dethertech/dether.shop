import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tr from '../../../translate';
import tokens from '../../../styles/tokens';
import { Modal, Button } from '../../../components';
import { H2 } from '../../../components/Headings';
import { Padding } from '../../../components/Spaces';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const ButtonWrapper = styled.div`
  flex: 0 0 50%;
  padding: 0 ${tokens.spaces.xs};
`;

const PhoneModal = ({ submitPhone, backToEdit, phone }) => (
  <Modal>
    <div>{tr('phone.modal_text')}</div>
    <Padding vertical="m">
      <H2>{phone}</H2>
    </Padding>
    <ButtonsWrapper>
      <ButtonWrapper>
        <Button fullWidth onClick={backToEdit}>
          {tr('phone.modal_edit_button')}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button fullWidth onClick={submitPhone}>
          {tr('phone.modal_valid_button')}
        </Button>
      </ButtonWrapper>
    </ButtonsWrapper>
  </Modal>
);

PhoneModal.propTypes = {
  submitPhone: PropTypes.func.isRequired,
  backToEdit: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
};

export default PhoneModal;
