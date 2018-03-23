
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { H2 } from '../../../components/Headings';
import { Padding } from '../../../components/Spaces';
import { Modal, Button } from '../../../components';
import tr from '../../../translate';
import tokens from '../../../styles/tokens';

const Root = styled.div`
background-color: rgba(0,0,0,0.4);
`;

const Wrapper = styled.div`
text-align: center;
color: ${tokens.colors.grey.dark}
`;

const Title = styled(H2)`
color: ${tokens.colors.blue}
`;

const WarningIcon = props => (
  <svg width={80} height={72} viewBox="0 0 80 72" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M43.23 2.864l35.636 62.887a4 4 0 0 1-3.48 5.972H4.114a4 4 0 0 1-3.48-5.972L36.27 2.864a4 4 0 0 1 6.96 0z"
        fill="#4B53B6"
      />
      <path
        d="M41.08 50.236h-2.376L38.11 20.05h3.564l-.594 30.186zm1.404 8.532c0 1.512-.756 2.322-2.484 2.322-1.62 0-2.484-.648-2.484-2.322 0-1.512.864-2.376 2.484-2.376 1.728 0 2.484.864 2.484 2.376z"
        fill="#FFF"
      />
    </g>
  </svg>
);


const BetaModal = ({ close }) => (
  <Root>
    <Modal>
      <Wrapper>
        <Padding vertical="m">
          <WarningIcon />
          <Title>{tr('beta.title')}</Title>
          {tr('beta.text')}
        </Padding>
        <Button fullWidth onClick={close}>
          {tr('beta.button')}
        </Button>
      </Wrapper>
    </Modal>
  </Root>
);

BetaModal.propTypes = {
  close: PropTypes.func.isRequired
};

export default BetaModal;
