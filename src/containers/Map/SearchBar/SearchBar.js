import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {
  setCenterPosition as setCenterPositionAction,
  fetchAll as fetchAllAction,
} from '../../../actions/map';
import SearchBarWrapper from './SearchBarWrapper';

export class SearchBar extends PureComponent {
  static propTypes = {
    setCenterPosition: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired,
  };

  state = {
    address: '',
  };

  onChange = address => this.setState({ address });

  getAddress = async address => {
    const { setCenterPosition, fetchAll } = this.props;
    this.forceBlur();
    const place = (await geocodeByAddress(address))[0];
    const position = await getLatLng(place);
    setCenterPosition(position);
    fetchAll(position);
    this.setState({ address });
  };

  forceBlur = () => {
    const inputs = document.querySelectorAll(
      '#PlacesAutocomplete__root > input[type="text"]',
    );
    if (inputs && inputs.length) {
      inputs[0].blur();
    }
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      autoFocus: false,
    };
    return (
      <SearchBarWrapper>
        <PlacesAutocomplete
          id="PlacesAutocomplete"
          onSelect={this.getAddress}
          inputProps={inputProps}
          onEnterKeyDown={this.forceBlur}
        />
      </SearchBarWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCenterPosition: bindActionCreators(setCenterPositionAction, dispatch),
  fetchAll: bindActionCreators(fetchAllAction, dispatch),
});
export default connect(null, mapDispatchToProps, null, { withRef: true })(
  SearchBar,
);
