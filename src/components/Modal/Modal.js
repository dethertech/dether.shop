import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tokens from '../../styles/tokens';
import RoundIconBtn from '../RoundIconBtn';

const ModalInner = styled.div`
  background: ${tokens.colors.white};
  border-radius: ${tokens.radius.l};
  padding: ${tokens.spaces.l};
  width: 88%;
  max-height: 88%;
  max-width: 42rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column;
`;

const Scroller = styled.div`
  flex: 1;
  overflow: auto;
`;

const CloseBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${tokens.spaces.s};
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
`;

const Modal = ({ children, closeFunc }) => (
  <Wrapper>
    <ModalInner>
      {closeFunc && (
        <CloseBar>
          <RoundIconBtn type="close" onClick={closeFunc} />
        </CloseBar>
      )}
      <Scroller>{children}</Scroller>
    </ModalInner>
  </Wrapper>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeFunc: PropTypes.func,
};

Modal.defaultProps = {
  closeFunc: null,
};

export default Modal;
