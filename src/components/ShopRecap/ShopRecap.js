import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

import { convertCalendar, GeocodeAPI } from '../../helpers';
import tokens from '../../styles/tokens';
import tr from '../../translate';
import { weekDays } from '../../constants/time';
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

const PriceWrapper = styled.div`
  font-size: ${tokens.fontSizes.l};
  margin-top: 30px;
`;

class ShopRecap extends PureComponent {
  static propTypes = {
    opening: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    licencePrice: PropTypes.string,
    address: PropTypes.string,
  };

  static defaultProps = {
    licencePrice: null,
    address: null,
  };

  state = {
    address: '',
  };

  componentDidMount = async () => {
    const { lat, lng, address } = this.props;

    if (address) this.setState({ address });
    else {
      const CToken = axios.CancelToken;
      this.geocodeCall = CToken.source();

      GeocodeAPI.positionToAddress({ lat, lng }, this.geocodeCall.token)
        .then(geoAddress => {
          this.setState({ address: geoAddress });
        })
        .catch(() => null);
    }
  };

  componentWillUnmount() {
    if (this.geocodeCall) this.geocodeCall.cancel();
  }

  render = () => {
    const { opening, name, cat, description, licencePrice } = this.props;
    const { address } = this.state;
    return (
      <Wrapper>
        <H3>{tr('shop_recap.informations')}</H3>
        <br />
        <Mention>{tr('shop_recap.name')}</Mention>
        {name} <br />
        <br />
        <Mention>{tr('shop_recap.category')}</Mention>
        {cat} <br />
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
        {convertCalendar(opening).map((day, idx) => (
          <TableLine key={idx}>
            <TableCell>{weekDays[idx]}</TableCell>
            {day.open ? (
              <Fragment>
                <TableCell>{day.openAt}</TableCell>
                <TableCell>{day.closeAt}</TableCell>
              </Fragment>
            ) : (
              <TableCell>{tr('shop_recap.closed')}</TableCell>
            )}
          </TableLine>
        ))}
        {licencePrice && (
          <PriceWrapper>
            {tr('shop_recap.licence_price', { price: licencePrice })}
          </PriceWrapper>
        )}
      </Wrapper>
    );
  };
}

export default ShopRecap;
