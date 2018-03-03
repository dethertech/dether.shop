import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tokens from '../../../styles/tokens';
import { H1 } from '../../Headings';

const BottomWrapper = styled.div`
  padding: ${tokens.spaces.s};
  background: ${tokens.colors.grey.lightest};
`;

const Adress = styled.p`
  color: ${tokens.colors.blue};
  margin-top: ${tokens.spaces.xxs};
  font-weight: 300;
`;

const Desc = styled.p`
  margin-top: ${tokens.spaces.xxs};
  font-size: ${tokens.fontSizes.xs};
  margin-bottom: 0;
  font-weight: 300;
`;

const ShopInfos = ({ title, adress, description }) => (
  <BottomWrapper>
    <H1>{title}</H1>
    <Adress>{adress}</Adress>
    <Desc>{description}</Desc>
  </BottomWrapper>
);

ShopInfos.propTypes = {
  title: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ShopInfos;
