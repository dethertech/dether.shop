import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import GeocodeAPI from '../../../helpers/geocodeAPI';
import SearchBarWrapper from './SearchBarWrapper';

export class SearchBar extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  static async postalCode(addressComponents, position) {
    return (
      GeocodeAPI.getPostalCodeFromAddressComponents(addressComponents) ||
      GeocodeAPI.postalCode(position)
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      address: ''
    };
  }

  onChange = address => {
    this.setState({ address });
  };

  onSelect = async address => {
    const place = (await geocodeByAddress(address))[0];
    const position = await getLatLng(place);
    const countryId = GeocodeAPI.getCountryIdFromAddressComponents(place.address_components);
    const postalCode =
      GeocodeAPI.getPostalCodeFromAddressComponents(place.address_components) ||
      (await GeocodeAPI.postalCode(position));

    const data = { ...position, countryId, postalCode };
    let error;
    if (data.lat && data.lng && countryId && postalCode) {
      this.props.onChange(data);
    } else {
      error = 'invalide address pleace select a full address';
    }
    this.setState({ address, error });
  };

  render() {
    const { error, address } = this.state;
    const inputProps = { value: address, onChange: this.onChange };
    return (
      <SearchBarWrapper>
        {error && <p>error</p>}
        <PlacesAutocomplete onSelect={this.onSelect} inputProps={inputProps} />
      </SearchBarWrapper>
    );
  }
}

export default SearchBar;
