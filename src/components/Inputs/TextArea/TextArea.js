import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tokens from '../../../styles/tokens';

const TextAreaWrapper = styled.div`
  background: ${tokens.colors.grey.lightest};
  border-radius: ${tokens.radius.s};
  overflow: hidden;
  border: solid 1px transparent;
  transition: all 0.3s ease;
  display: flex;
  align-content: stretch;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${tokens.colors.black};
    `}
  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: ${tokens.colors.grey.lightest};
      background: ${tokens.colors.white};
    `}
  ${({ isValid }) =>
    isValid &&
    css`
      border-color: ${tokens.colors.green};
    `}
`;

const InputTextArea = styled.textarea`
  background: transparent;
  height: 100%;
  width: 100%;
  padding: ${tokens.spaces.s};
`;

class TextArea extends PureComponent {
  static propTypes = {
    hasError: PropTypes.bool,
    isValid: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
  };

  static defaultProps = {
    hasError: false,
    isValid: false,
    onChange: () => {},
    name: '',
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = { inputFocus: false };
  }

  onFocus = () => this.setState({ inputFocus: true });
  onBlur = () => this.setState({ inputFocus: false });

  render() {
    const { value, onChange, hasError, isValid, ...rest } = this.props;

    return (
      <TextAreaWrapper isFocus={this.state.inputFocus} hasError={hasError}>
        <InputTextArea value={value} onChange={onChange} {...rest} />
      </TextAreaWrapper>
    );
  }
}

export default TextArea;
