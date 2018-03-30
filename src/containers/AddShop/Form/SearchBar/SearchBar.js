import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { LabeledInput } from '../../../../components/Inputs';
import tr from '../../../../translate';

import { GeocodeAPI } from '../../../../helpers';
// import SearchBarWrapper from './SearchBarWrapper';

export class SearchBar extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    inputOpt: PropTypes.shape({}).isRequired,
  };

  static async postalCode(addressComponents, position) {
    return (
      GeocodeAPI.getPostalCodeFromAddressComponents(addressComponents) ||
      (await GeocodeAPI.postalCode(position)) ||
      '0'
    );
  }

  constructor(props) {
    super(props);

    const { inputOpt } = props;
    const address = inputOpt.value && inputOpt.value.addressString;

    this.state = {
      isDirty: true,
      address: address || '',
    };
  }

  onChange = address => {
    const { isDirty } = this.state;
    if (!isDirty) {
      this.props.onChange(null);
    }
    this.setState({ address, isDirty: true });
  };

  onSelect = async address => {
    const place = (await geocodeByAddress(address))[0];
    const position = await getLatLng(place);
    const countryId = GeocodeAPI.getCountryIdFromAddressComponents(
      place.address_components,
    );
    const postalCode = await SearchBar.postalCode(
      place.address_components,
      position,
    );

    const data = {
      ...position,
      countryId,
      postalCode,
      lat: position.lat.toFixed(5),
      lng: position.lng.toFixed(5),
      addressString: address,
    };
    let error;
    if (data.lat && data.lng && countryId && postalCode) {
      this.props.onChange(data);
      this.setState({ isDirty: false });
    } else {
      error = tr('add.form.inputs.address.label');
    }
    this.setState({ address, error });
  };

  render() {
    const { inputOpt } = this.props;
    const { error, address } = this.state;
    const inputProps = { value: address, onChange: this.onChange };
    return (
      <div style={{ position: 'relative', zIndex: '2' }}>
        <LabeledInput
          {...inputOpt}
          componentName="placesAutocomplete"
          handleChange={this.onSelect}
          error={error || inputOpt.error}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default SearchBar;
