import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tr from '../../translate';
import Shake from '../../components/Animations/Shake';
import { Margin } from '../../components/Spaces';
import tokens from '../../styles/tokens';

const CheckBoxWrapper = styled.div`
  margin-bottom: ${tokens.spaces.l};
  line-height: 1.6em;
`;

const TermsValidation = ({ shake, checked, handleCheck, toggleTermsModal }) => (
  <Shake toggle={shake}>
    <CheckBoxWrapper>
      <Margin bottom="xxs">
        <label htmlFor="terms">
          <input
            id="terms"
            checked={checked}
            className="checkbox-stl"
            type="checkbox"
            onClick={handleCheck}
          />
          {tr('add.home.terms_check', null, { html: true })}
        </label>&nbsp;
        <button onClick={toggleTermsModal} style={{ textDecoration: 'underline' }}>
          {tr('add.home.terms_link')}
        </button>
      </Margin>
    </CheckBoxWrapper>
  </Shake>
);

TermsValidation.propTypes = {
  shake: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  handleCheck: PropTypes.func.isRequired,
  toggleTermsModal: PropTypes.func.isRequired
};

TermsValidation.defaultProps = {
  checked: false
};

export default TermsValidation;
