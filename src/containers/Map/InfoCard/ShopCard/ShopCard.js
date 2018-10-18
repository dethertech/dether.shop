import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tr from '../../../../translate';

import tokens from '../../../../styles/tokens';
import { H1 } from '../../../../components/Headings';

import SvgAvatar from '../../../../components/Svg/svgr/SvgAvatar';

const BottomWrapper = styled.div`
  padding: ${tokens.spaces.s};
  background: ${tokens.colors.grey.lightest};
  text-align: center;
`;

const Adress = styled.p`
  color: ${tokens.colors.blue};
  margin-top: ${tokens.spaces.xxs};
  margin-bottom: ${tokens.spaces.xs};
  font-weight: 300;
`;

const Desc = styled.p`
  margin-top: 0;
  font-size: ${tokens.fontSizes.xs};
  margin-bottom: 0;
  font-weight: 300;
`;

const Wrapper = styled.div`
  padding: ${tokens.spaces.m};
`;

const Card = styled.div`
  border-radius: ${tokens.radius.l};
  background: ${tokens.colors.white};
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const UserProfile = styled.div`
  padding: 0 ${tokens.spaces.xs};
  flex: 1;
`;

const DayContainer = styled.span`
  display: inline-block;
  text-align: left;
  float: left;
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

const Hr = styled.div`
  width: 45px;
  border-top: solid 1px ${tokens.colors.grey.lighter};
  margin: ${tokens.spaces.s} auto;
`;

const DayHour = styled.div`
  text-align: right;
  margin: 0 auto;
  max-width: 22rem;
  color: ${tokens.colors.grey.dark};
  font-size: ${tokens.fontSizes.s};
`;

const days = [...Array(7)].map((x, i) => tr(`days.${i + 1}`));

const ShopCard = ({ name, cat, address, description, opening }) => (
  <Wrapper>
    <Card>
      <TopWrapper>
        <SvgAvatar />
        <UserProfile>
          <H1 light>{name}</H1>
          {cat}
        </UserProfile>
      </TopWrapper>
      <BottomWrapper>
        <Adress>{address}</Adress>
        <Desc>{description}</Desc>
        <Hr />
        {opening.map(
          (day, i) =>
            day.open ? (
              <DayHour key={days[i]}>
                <DayContainer>{days[i]}</DayContainer> {day.openAt} -{' '}
                {day.closeAt}
              </DayHour>
            ) : (
              <DayHour key={days[i]}>
                <DayContainer>{days[i]}</DayContainer>{' '}
                {tr('map.shop_card.closed')}
              </DayHour>
            ),
        )}
      </BottomWrapper>
    </Card>
  </Wrapper>
);

ShopCard.propTypes = {
  name: PropTypes.string,
  cat: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  opening: PropTypes.array,
};

ShopCard.defaultProps = {
  name: 'name',
  cat: 'category',
  address: 'address',
  description: 'description',
  opening: [],
};

export default ShopCard;
