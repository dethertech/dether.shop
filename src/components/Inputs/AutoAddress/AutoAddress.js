import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';

import InputStatusIcon from './InputStatusIcon';
import InputWrapper from './InputWrapper';

/**
 * Ethereum address Input component
 * @param {String} value    Eth address
 * @param {Func} onChange   OnChange function
 * @param {String} name     Value name
 * @param {String} type     Input Type
 */

class AutoAddress extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    isValid: PropTypes.bool,
    hasError: PropTypes.bool,
    inputProps: PropTypes.shape({}),
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    isValid: false,
    hasError: false,
    inputProps: {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { inputFocus: false };
  }

  onFocus = e => {
    this.props.onFocus(e);
    this.setState({ inputFocus: true });
  };
  onBlur = e => {
    this.props.onBlur(e);
    this.setState({ inputFocus: false });
  };

  render() {
    const { onChange, hasError, isValid, inputProps } = this.props;

    return (
      <InputWrapper isFocus={this.state.inputFocus}>
        <PlacesAutocomplete
          onSelect={onChange}
          inputProps={{
            ...inputProps,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
          }}
        />
        {!!(hasError || isValid) && (
          <InputStatusIcon hasError={hasError} isValid={isValid} />
        )}
      </InputWrapper>
    );
  }
}

export default AutoAddress;
