import styled, { css } from 'styled-components';
import tokens from '../../../styles/tokens';

const InputWrapper = styled.div`
  background: ${tokens.colors.grey.lightest};
  border-radius: ${tokens.radius.s};
  overflow: hidden;
  border: solid 1px transparent;
  transition: all 0.3s ease;
  display: flex;
  align-content: stretch;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-color: ${tokens.colors.grey.lightest};
      background: ${tokens.colors.white};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `};
`;

export default InputWrapper;
