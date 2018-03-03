import styled from 'styled-components';
import tokens from '../../styles/tokens';

const Panels = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const Left = styled.div`
  background: ${tokens.colors.white};
  flex: 0 0 50rem;
`;

const Right = styled.div`
  flex: 1;
  background: blue;
`;

Panels.Left = Left;
Panels.Right = Right;

export default Panels;
