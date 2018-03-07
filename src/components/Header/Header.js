import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tokens from '../../styles/tokens';
import tr from '../../translate';

import { ExternalLinkButton } from '../Button';

import { Padding } from '../Spaces';
import DetherLogo from '../../assets/logo.svg';
import iconRefresh from '../../assets/home/icon_refresh.svg';

const Wrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const Left = styled.div`
  flex: 0 0 30%;
  text-align: left;
`;

const Right = styled.div`
  flex: 0 0 70%;
`;

const WalletView = styled.div`
  border-radius: ${tokens.radius.m};
  box-shadow: ${tokens.shadow};
  padding: ${tokens.spaces.s};
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  align-items: center;
`;

const Balance = styled.div`
  border-right: solid 1px ${tokens.colors.grey.lightest};
  display: flex;
  flex-flow: row wrap;
`;

const BtnWrapper = styled.div`
  padding-top: ${tokens.spaces.xs};
`;

const EthBalanceWrapper = styled.div`
  font-size: ${tokens.fontSizes.xl};
  font-weight: 900;
  flex: 0 0 50%;
  border-right: solid 1px ${tokens.colors.grey.lightest};
  padding-right: ${tokens.spaces.s};
`;

const DthBalanceWrapper = styled.div`
  font-size: ${tokens.fontSizes.xl};
  font-weight: 900;
  flex: 0 0 50%;
  padding-left: ${tokens.spaces.s};
`;

const YourBalance = styled.div`
  flex: 0 0 100%;
  padding: ${tokens.spaces.xs};
  padding-bottom: 0;
`;

const Refresh = styled.button`
  flex: 1;
  padding: ${tokens.spaces.xs};
`;

const RefreshText = styled.div`
  margin-top: ${tokens.spaces.xxs};
`;

const Header = ({ onRefresh, EthBalance, DthBalance }) => (
  <Wrapper>
    <Left>
      <Padding right="m">
        <img src={DetherLogo} alt="" />
        <BtnWrapper>
          <ExternalLinkButton isSmall href="https://idex.market/eth/dth" target="_blank">
            {tr('header.buy_dth')}
          </ExternalLinkButton>
        </BtnWrapper>
      </Padding>
    </Left>
    <Right>
      <WalletView>
        <Balance>
          <EthBalanceWrapper>{EthBalance} ETH</EthBalanceWrapper>
          <DthBalanceWrapper>{DthBalance} DTH</DthBalanceWrapper>
          <YourBalance>{tr('header.your_balance')}</YourBalance>
        </Balance>
        <Refresh onClick={onRefresh}>
          <img src={iconRefresh} alt="" />
          <RefreshText>{tr('header.refresh')}</RefreshText>
        </Refresh>
      </WalletView>
    </Right>
  </Wrapper>
);

Header.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  EthBalance: PropTypes.string.isRequired,
  DthBalance: PropTypes.string.isRequired
};

export default Header;
