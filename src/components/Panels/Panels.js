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

Panels.Left = styled.div`
  background: ${tokens.colors.white};
  flex: 0 0 58rem;
  position: relative;
`;

Panels.Right = styled.div`
  flex: 1;
`;

Panels.displayName = 'Panels';
Panels.Left.displayName = 'Panels.Left';
Panels.Right.displayName = 'Panels.Right';

export default Panels;
