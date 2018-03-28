import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import tokens from '../../../styles/tokens';
import InputStatusIcon from './InputStatusIcon';
import InputWrapper from './InputWrapper';

/**
 * Ethereum address Input component
 * @param {String} value    Eth address
 * @param {Func} onChange   OnChange function
 * @param {String} name     Value name
 * @param {String} type     Input Type
 */

const InputText = styled.input`
  background: transparent;
  height: 100%;
  width: 100%;
  padding: ${tokens.spaces.s};
`;

class Input extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'date',
      'email',
      'search',
      'tel',
      'time',
      'url',
      'password',
      'number',
    ]),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autoFocus: PropTypes.bool,
    isValid: PropTypes.bool,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    insertBefore: PropTypes.node,
    insertAfter: PropTypes.node,
  };

  static defaultProps = {
    disabled: false,
    insertAfter: null,
    insertBefore: null,
    isValid: false,
    hasError: false,
    autoFocus: false,
    value: '',
    name: '',
    placeholder: null,
    type: 'text',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { inputFocus: false };
  }

  onFocus = () => this.setState({ inputFocus: true });
  onBlur = () => this.setState({ inputFocus: false });

  render() {
    const {
      value,
      type,
      onChange,
      placeholder,
      disabled,
      autoFocus,
      hasError,
      isValid,
      insertBefore,
      insertAfter,
      ...rest
    } = this.props;

    return (
      <InputWrapper
        disabled={disabled}
        isFocus={this.state.inputFocus}
        hasError={hasError}
        isValid={isValid}
      >
        {insertBefore && insertBefore}
        <InputText
          value={value}
          autoFocus={autoFocus}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          {...rest}
        />
        {insertAfter && insertAfter}
        {!!(hasError || isValid) && (
          <InputStatusIcon hasError={hasError} isValid={isValid} />
        )}
      </InputWrapper>
    );
  }
}

export default Input;
