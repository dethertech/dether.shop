import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
  background: ${tokens.colors.grey.lightest};
  border-radius: ${tokens.radius.s};
  border: solid 1px transparent;
  transition: all 0.3s ease;
  display: flex;
  align-content: stretch;
  z-index: 2;
  position: relative;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: ${tokens.colors.grey.lightest};
      background: ${tokens.colors.white};
    `};

  svg {
    position: absolute;
    margin-top: ${tokens.spaces.xxs};
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;

  input {
    padding-left: 3rem !important;
    flex: 1 !important;
  }

  #PlacesAutocomplete__root {
    width: auto !important;
    flex: 1;
  }

  #PlacesAutocomplete__autocomplete-container {
    transform: translateY(-${tokens.radius.s});
    width: calc(100% + 0.2rem) !important;
    margin-right: -0.1rem !important; /* compensate border-width */
    margin-left: -0.1rem !important; /* compensate border-width */
    overflow: auto;
    border-bottom-left-radius: ${tokens.radius.s};
    border-bottom-right-radius: ${tokens.radius.s};
    border: solid 1px ${tokens.colors.grey.lightest} !important;
  }
`;

const SearchSVG = styled.svg`
  flex: initial;
  stroke: none;
  width: 3rem;
  height: 3rem;
  fill: ${tokens.colors.grey.lighter};
`;

const SearchBarWrapper = ({ children, isFocus }) => (
  <Wrapper isFocus={isFocus}>
    <IconSearch />
    <InputWrapper>{children}</InputWrapper>
  </Wrapper>
);

SearchBarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isFocus: PropTypes.bool.isRequired,
};

SearchBarWrapper.defaultProps = {
  isFocus: false,
};

export default SearchBarWrapper;
