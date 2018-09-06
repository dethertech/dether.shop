import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tokens from '../../../styles/tokens';

import { Margin } from '../../../components/Spaces';
import { Mention } from '../../../components';

import { Shake } from '../../../components/Animations';
import { Input, TextArea, ComboBox, AutoAddress, Select } from '../';

const Wrapper = styled.div`
  margin-bottom: ${tokens.spaces.m};
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-weight: 300;
  font-size: ${tokens.fontSizes.m};
  margin-bottom: ${tokens.spaces.xxs};
`;

const ErrorText = styled.div`
  color: ${tokens.colors.black};
  margin-top: ${tokens.spaces.xxs};
  font-size: ${tokens.fontSizes.s};
`;

const LabeledInput = ({
  toggleShake,
  label,
  fillInfos,
  onBlur,
  error,
  name,
  handleChange,
  componentName,
  renderLabelIcon,
  selected,
  ...rest
}) => (
  <Wrapper>
    <Label htmlFor={name}>
      {renderLabelIcon && renderLabelIcon()}
      {label}
    </Label>
    {!!fillInfos && (
      <Margin vertical="xxs">
        <Mention>{fillInfos}</Mention>
      </Margin>
    )}
    <Shake toggle={toggleShake}>
      {{
        textarea: () => (
          <TextArea
            name={name}
            hasError={!!error}
            onChange={handleChange}
            onBlur={onBlur}
            {...rest}
          />
        ),
        combobox: () => (
          <ComboBox
            name={name}
            onChange={handleChange}
            onBlur={onBlur}
            hasError={!!error}
            {...rest}
          />
        ),
        placesAutocomplete: () => (
          <AutoAddress
            name={name}
            hasError={!!error}
            onChange={handleChange}
            onBlur={onBlur}
            {...rest}
          />
        ),
        input: () => (
          <Input
            name={name}
            hasError={!!error}
            onChange={handleChange}
            onBlur={onBlur}
            {...rest}
          />
        ),
        select: () => (
          <Select
            {...rest}
            selected={selected}
            onChange={event => {
              handleChange({ target: { name, value: event.target.value } });
            }}
          />
        ),
      }[componentName]()}
    </Shake>
    {error && <ErrorText>{error}</ErrorText>}
  </Wrapper>
);

LabeledInput.propTypes = {
  name: PropTypes.string.isRequired,
  toggleShake: PropTypes.number,
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  fillInfos: PropTypes.node,
  onBlur: PropTypes.func,
  componentName: PropTypes.string,
  error: PropTypes.string,
  defaultOption: PropTypes.any,
  renderLabelIcon: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

LabeledInput.defaultProps = {
  handleChange: null,
  onBlur: null,
  toggleShake: null,
  fillInfos: null,
  error: null,
  componentName: 'input',
  defaultOption: null,
  renderLabelIcon: null,
  selected: undefined,
};

export default LabeledInput;
