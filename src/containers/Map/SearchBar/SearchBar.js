import React, { PureComponent, Fragment } from 'react';
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
import WarningModal from '../../../components/WarningModal/WarningModal';

export class SearchBar extends PureComponent {
  static propTypes = {
    setCenterPosition: PropTypes.func.isRequired,
    fetchAll: PropTypes.func.isRequired,
  };

  state = {
    address: '',
    showWarning: false,
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
    this.setState({ showWarning: true });
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      autoFocus: false,
    };
    const { showWarning } = this.state;
    return (
      <Fragment>
        {showWarning && (
          <WarningModal
            closeFunc={() => this.setState({ showWarning: false })}
          />
        )}
        <SearchBarWrapper>
          <PlacesAutocomplete
            id="PlacesAutocomplete"
            onSelect={this.getAddress}
            inputProps={inputProps}
            onEnterKeyDown={this.forceBlur}
          />
        </SearchBarWrapper>
      </Fragment>
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
