import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tokens from '../../styles/tokens';
import tr from '../../translate';
import { wait } from '../../helpers';

import { ExternalLinkButton } from '../Button';

import { Padding } from '../Spaces';

import { Loader } from '../../components';

import { SvgDether, SvgRefresh } from '../Svg';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  width: 100%;
  padding: ${tokens.spaces.m};
  @media (max-width: 550px) {
    padding: ${tokens.spaces.s};
    font-size: ${tokens.fontSizes.xs};
  }
`;

const Left = styled.div`
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
  @media (max-width: 550px) {
    padding: ${tokens.spaces.xs};
  }
`;

const Balance = styled.div`
  border-right: solid 1px ${tokens.colors.grey.lightest};
  display: flex;
  flex-flow: row wrap;
`;

const BtnWrapper = styled.div`
  padding-top: ${tokens.spaces.xs};
  text-align: center;
  @media (max-width: 550px) {
    & > a {
      padding: ${tokens.spaces.xs} ${tokens.spaces.xs};
      font-size: ${tokens.fontSizes.xs};
    }
  }
`;

const EthBalanceWrapper = styled.div`
  font-size: ${tokens.fontSizes.xl};
  font-weight: 900;
  flex: 0 0 50%;
  border-right: solid 1px ${tokens.colors.grey.lightest};
  padding-right: ${tokens.spaces.s};
  @media (max-width: 550px) {
    font-size: ${tokens.fontSizes.s};
    padding-right: ${tokens.spaces.xs};
  }
`;

const DthBalanceWrapper = styled.div`
  font-size: ${tokens.fontSizes.xl};
  font-weight: 900;
  flex: 0 0 50%;
  padding-left: ${tokens.spaces.s};
  @media (max-width: 550px) {
    font-size: ${tokens.fontSizes.s};
    padding-left: ${tokens.spaces.xs};
  }
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

class Header extends PureComponent {
  static propTypes = {
    onRefresh: PropTypes.func.isRequired,
    EthBalance: PropTypes.string.isRequired,
    DthBalance: PropTypes.string.isRequired
  };

  state = {
    isBalanceLoading: false
  };

  handleRefresh = async () => {
    const { onRefresh } = this.props;

    this.setState({ isBalanceLoading: true });
    await onRefresh();
    await wait(1000);
    this.setState({ isBalanceLoading: false });
  }
  render() {
    const { EthBalance, DthBalance } = this.props;
    const { isBalanceLoading } = this.state;

    return (
      <Wrapper>
        <Left>
          <Padding right="m">
            <SvgDether />
            <BtnWrapper>
              <ExternalLinkButton isSmall href="https://idex.market/eth/dth" target="_blank">
                {tr('header.buy_dth')}
              </ExternalLinkButton>
            </BtnWrapper>
          </Padding>
        </Left>
        <Right>
          <WalletView>
            { isBalanceLoading
                ? <Loader style={{ margin: 'auto' }} />
                :
                <Fragment>
                  <Balance>
                    <EthBalanceWrapper>{EthBalance} ETH</EthBalanceWrapper>
                    <DthBalanceWrapper>{DthBalance} DTH</DthBalanceWrapper>
                    <YourBalance>{tr('header.your_balance')}</YourBalance>
                  </Balance>
                  <Refresh onClick={this.handleRefresh}>
                    <SvgRefresh />
                    <RefreshText>{tr('header.refresh')}</RefreshText>
                  </Refresh>
                </Fragment>
            }
          </WalletView>
        </Right>
      </Wrapper>
    );
  }
}

export default Header;
