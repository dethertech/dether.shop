import styled, { css } from 'styled-components';
import tokens from '../../styles/tokens';

const Mention = styled.div`
  font-size: ${tokens.fontSizes.xs};
  color: ${tokens.colors.grey.light};

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      text-align: left;
    `};
`;

export default Mention;
