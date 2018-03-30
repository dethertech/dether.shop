import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tokens from '../../styles/tokens';

const AllowedSpacesValues = Object.keys(tokens.spaces);

const DivWithSpace = space => ({
  all,
  horizontal,
  vertical,
  top,
  right,
  bottom,
  left,
}) => css`
  ${all &&
    css`
      ${space}: ${tokens.spaces[all]};
    `};
  ${horizontal &&
    css`
      ${space}-left: ${tokens.spaces[horizontal]};
      ${space}-right: ${tokens.spaces[horizontal]};
    `};
  ${vertical &&
    css`
      ${space}-top: ${tokens.spaces[vertical]};
      ${space}-bottom: ${tokens.spaces[vertical]};
    `};
  ${top &&
    css`
      ${space}-top: ${tokens.spaces[top]};
    `};
  ${right &&
    css`
      ${space}-right: ${tokens.spaces[right]};
    `};
  ${bottom &&
    css`
      ${space}-bottom: ${tokens.spaces[bottom]};
    `};
  ${left &&
    css`
      ${space}-left: ${tokens.spaces[left]};
    `};
`;

export const Margin = styled.div`
  ${DivWithSpace('margin')};
`;

export const Padding = styled.div`
  ${DivWithSpace('padding')};
`;

const globalPropTypes = {
  all: PropTypes.oneOf(AllowedSpacesValues),
  horizontal: PropTypes.oneOf(AllowedSpacesValues),
  vertical: PropTypes.oneOf(AllowedSpacesValues),
  top: PropTypes.oneOf(AllowedSpacesValues),
  right: PropTypes.oneOf(AllowedSpacesValues),
  bottom: PropTypes.oneOf(AllowedSpacesValues),
  left: PropTypes.oneOf(AllowedSpacesValues),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

const defaultProps = {
  all: null,
  horizontal: null,
  vertical: null,
  top: null,
  right: null,
  bottom: null,
  left: null,
};

Margin.propTypes = globalPropTypes;
Padding.propTypes = globalPropTypes;
Margin.defaultProps = defaultProps;
Padding.defaultProps = defaultProps;
