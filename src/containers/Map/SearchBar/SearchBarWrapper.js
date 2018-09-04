import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tokens from '../../../styles/tokens';

const IconSearch = () => (
  <SearchSVG viewBox="0 0 34 34">
    <path
      id="b"
      // eslint-disable-next-line max-len
      d="M24.2 22.7l-3-2.9a.7.7 0 0 0-.4-.2h-.5a6 6 0 1 0-1 1v.5c0 .2 0 .4.2.5l2.9 2.9c.2.3.7.3 1 0l.8-.8a1 1 0 0 0 0-1zM15.6 20a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"
    />
  </SearchSVG>
);

const Wrapper = styled.div`
  position: absolute;
  top: ${tokens.spaces.m};
  left: ${tokens.spaces.m};
  right: ${tokens.spaces.m};
  border-radius: ${tokens.radius.s};
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  background-color: ${tokens.colors.white};
  overflow: hidden;
  @media (max-width: 768px) {
    left: 70px;
  }

  svg {
    position: absolute;
    margin-top: ${tokens.spaces.xxs};
  }
`;

const InputWrapper = styled.div`
  input {
    padding-left: 3rem !important;
  }

  input,
  #PlacesAutocomplete__root,
  #PlacesAutocomplete__autocomplete-container {
    position: static !important;
  }

  #PlacesAutocomplete__autocomplete-container {
    max-width: 100% !important;
    overflow: auto;
    border: none !important;
    border-top: solid 1px ${tokens.colors.grey.lightest} !important;
  }
`;

const SearchSVG = styled.svg`
  flex: initial;
  stroke: none;
  width: 3rem;
  height: 3rem;
  fill: ${tokens.colors.grey.lighter};
`;

const SearchBarWrapper = ({ children }) => (
  <Wrapper>
    <IconSearch />
    <InputWrapper>{children}</InputWrapper>
  </Wrapper>
);

SearchBarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchBarWrapper;
