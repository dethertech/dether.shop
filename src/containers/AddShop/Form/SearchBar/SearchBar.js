import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { LabeledInput } from '../../../../components/Inputs';
import { Svg } from '../../../../components';
import tr from '../../../../translate';

import { GeocodeAPI } from '../../../../helpers';
// import SearchBarWrapper from './SearchBarWrapper';

export class SearchBar extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    inputOpt: PropTypes.shape({}).isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    value: '',
  };

  static postalCode = async (addressComponents, position) =>
    GeocodeAPI.getPostalCodeFromAddressComponents(addressComponents) ||
    (await GeocodeAPI.postalCode(position)) ||
    '0';

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    address: nextProps.value || prevState.address,
    isModified: false,
  });

  constructor(props) {
    super(props);

    const { inputOpt } = props;
    const address = inputOpt.value && inputOpt.value.addressString;

    this.state = {
      isDirty: true,
      address: address || '',
      isModified: false,
    };
  }

  onChange = address => {
    const { isDirty } = this.state;
    if (!isDirty) {
      this.props.onChange(null);
    }
    this.setState({ address, isDirty: true, isModified: true, error: null });
  };

  onSelect = async address => {
    try {
      const place = (await geocodeByAddress(address))[0];
      const position = await getLatLng(place);
      const countryId = GeocodeAPI.getCountryIdFromAddressComponents(
        place.address_components,
      );
      const postalCode = await SearchBar.postalCode(
        place.address_components,
        position,
      ).catch(() => '0');

      const data = {
        ...position,
        countryId,
        postalCode,
        lat: position.lat.toFixed(5),
        lng: position.lng.toFixed(5),
        address,
      };
      let error;
      if (data.lat && data.lng && countryId && postalCode) {
        this.props.onChange(data);
        this.setState({ isDirty: false });
      } else {
        error = tr('add.form.inputs.address.errors.invalid');
      }
      this.setState({ address, error });
    } catch (e) {
      this.setState({
        address,
        error: tr('add.form.inputs.address.errors.invalid'),
      });
    }
  };

  render() {
    const { inputOpt, value } = this.props;
    const { error, address, isModified } = this.state;
    const inputProps = {
      value: isModified ? address : value || '',
      onChange: this.onChange,
    };
    return (
      <div style={{ position: 'relative', zIndex: '2' }}>
        <LabeledInput
          {...inputOpt}
          renderLabelIcon={() => (
            <Svg type="RegisterAdress" style={{ margin: '-2px 4px' }} />
          )}
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
