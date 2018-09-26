import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tokens from '../../../styles/tokens';
import Icon from '../../Icon';

const SelectWrapper = styled.div`
  background: ${tokens.colors.grey.lightest};
  border-radius: ${tokens.radius.s};
  border: solid 1px transparent;
  transition: all 0.3s ease;
  position: relative;
`;

const InputSelect = styled.select`
  background: transparent;
  position: relative;
  height: 100%;
  width: 100%;
  padding: ${tokens.spaces.s};
  z-index: 1;

  ${({ fakeDisable }) =>
    fakeDisable &&
    css`
      backgroundcolor: red;
      opacity: 0.5;
    `};

  &:disabled {
    opacity: 0.5;
  }
`;

const InputSelectIcon = styled.div`
  position: absolute;
  z-index: 0;
  right: ${tokens.spaces.s};
  top: 50%;
  margin-top: -0.6rem;
`;

const renderArray = data =>
  data.map(opt => (
    <option key={opt} value={opt}>
      {opt}
    </option>
  ));

const renderMap = data =>
  Object.keys(data).map(k => (
    <option key={k} value={k}>
      {data[k]}
    </option>
  ));

const Select = ({ data, onChange, placeholder, ...rest }) => (
  <SelectWrapper>
    <InputSelectIcon>
      <Icon
        name="carretDown"
        size="1.2rem"
        strokeWidth="0.2rem"
        color={tokens.colors.grey.darkest}
      />
    </InputSelectIcon>
    <InputSelect {...rest} onChange={onChange}>
      <option value="" disabled>
        {placeholder}
      </option>
      {Array.isArray(data) ? renderArray(data) : renderMap(data)}
    </InputSelect>
  </SelectWrapper>
);

Select.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string.isRequired),
    PropTypes.shape({}),
  ]),
  onChange: PropTypes.func,
  selected: PropTypes.string,
  fakeDisable: PropTypes.bool,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  data: [],
  onChange: () => {},
  selected: null,
  fakeDisable: false,
  placeholder: '',
};

export default Select;
