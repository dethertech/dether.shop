import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import tr from '../../translate';

import { Modal } from '../../components';
import { Padding } from '../../components/Spaces';

import { exchanges } from '../../constants';

const Title = styled.div`
  width: 100%;
  text-align: center;;
  font-size: 2.4em;
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0px;
`;

const ExchangeImage = styled.img`
  width: 224px;
  margin: 5px auto;
  cursor: pointer;
`;

const goTo = url => () => window.open(url);

const BuyModal = ({ closeFunc }) => (
  <Modal closeFunc={closeFunc}>
    <Padding bottom="l">
      <Title>{tr('buy_modal.title')}</Title>
      <ImageWrapper>
        {exchanges.map(({ logo, url }) =>
          <ExchangeImage key={url} src={logo} onClick={goTo(url)} />)}
      </ImageWrapper>
    </Padding>
  </Modal>
);

BuyModal.propTypes = {
  closeFunc: PropTypes.func.isRequired
};

export default BuyModal;
