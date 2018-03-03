import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tokens from '../../styles/tokens';
import Button from '../Button';
import { H1 } from '../Headings';
import { Margin } from '../Spaces';
import grandmaIcon from '../../assets/home/icon_grand_mere.svg';

const Wrapper = styled.div`
  padding: ${tokens.spaces.m};
`;

const Card = styled.div`
  border-radius: ${tokens.radius.m};
  background: ${tokens.colors.white};
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const UserProfile = styled.div`
  padding: 0 ${tokens.spaces.xs};
  flex: 1;
`;

const TopWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: ${tokens.spaces.xs};
`;

const ButtonWrapper = Margin.extend`
  border-radius: ${tokens.radius.m};
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
`;

class IdentityCard extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    buttonLink: PropTypes.string,
    buttonText: PropTypes.string,
    cardName: PropTypes.string.isRequired
  };

  static defaultProps = {
    buttonLink: null,
    buttonText: null
  };

  render() {
    const { buttonLink, buttonText, cardName, children } = this.props;
    return (
      <Wrapper>
        <Card>
          <TopWrapper>
            <img src={grandmaIcon} alt="profile" width="65" />
            <UserProfile>
              <H1 light>{cardName}</H1>
            </UserProfile>
          </TopWrapper>
          {children}
        </Card>
        {!!buttonLink && (
          <ButtonWrapper top="m">
            <Button theme="primary" fullWidth href={buttonLink} target="blank">
              {buttonText}
            </Button>
          </ButtonWrapper>
        )}
      </Wrapper>
    );
  }
}

export default IdentityCard;
