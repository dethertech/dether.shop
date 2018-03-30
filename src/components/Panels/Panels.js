import styled from 'styled-components';
import { mobile } from '../../styles/medias';
import tokens from '../../styles/tokens';

const Panels = styled.div`
  width: 100vw;
  display: flex;
  align-items: stretch;
  justify-content: center;
  ${mobile`
    flex-direction: column;
  `};
`;

Panels.Left = styled.div`
  background: ${tokens.colors.white};
  flex: 0 0 58rem;
  position: relative;
  height: 100vh;
`;

Panels.Right = styled.div`
  flex: 1;
  height: 100vh;
`;

Panels.displayName = 'Panels';
Panels.Left.displayName = 'Panels.Left';
Panels.Right.displayName = 'Panels.Right';

export default Panels;
