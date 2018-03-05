import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tokens from '../../styles/tokens';
import tr from '../../translate';

import Mention from '../Mention';
import { H3 } from '../Headings';

const Wrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: left;
  font-size: ${tokens.fontSizes.l};
`;

const TableLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: ${tokens.spaces.xs};
`;

const TableCell = styled.div`
  flex: 0 0 33%;
`;

const ShopRecap = ({ openingHours, name, category, address, description }) => (
  <Wrapper>
    <H3>{tr('shop_recap.informations')}</H3>
    <br />
    <Mention>{tr('shop_recap.name')}</Mention>
    {name} <br />
    <br />
    <Mention>{tr('shop_recap.category')}</Mention>
    {category} <br />
    <br />
    <Mention>{tr('shop_recap.address')}</Mention>
    {address} <br />
    <br />
    <Mention>{tr('shop_recap.description')}</Mention>
    {description} <br />
    <br />
    <br />
    <H3>{tr('shop_recap.opening_hours')}</H3>
    <br />
    <TableLine>
      <TableCell>
        <Mention>{tr('shop_recap.day')}</Mention>
      </TableCell>
      <TableCell>
        <Mention>{tr('shop_recap.opened_at')}</Mention>
      </TableCell>
      <TableCell>
        <Mention>{tr('shop_recap.closed_at')}</Mention>
      </TableCell>
    </TableLine>
    {openingHours.map(day => (
      <TableLine key={day.day}>
        <TableCell>{day.day}</TableCell>
        <TableCell>{day.open}</TableCell>
        <TableCell>{day.close}</TableCell>
      </TableLine>
    ))}
  </Wrapper>
);

ShopRecap.propTypes = {
  openingHours: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    open: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired
  })).isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default ShopRecap;
