import styled, { css } from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: stretch;
  min-height: 100%;
  width: 100%;
  text-align: center;
  position: relative;

  ${({ textAlignLeft }) =>
    textAlignLeft &&
    css`
      text-align: left;
    `};

  ${({ isFullScreen }) =>
    isFullScreen &&
    css`
      overflow: hidden;
      height: 100%;
      max-height: 100%;
    `};
`;

Layout.HeaderLarge = styled.header`
  flex: 0 0 13vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

Layout.Header = styled.header`
  display: block;
`;

Layout.Body = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

Layout.ScrollableBody = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
`;

Layout.Footer = styled.footer`
  flex: 0;
`;

/* allow storybook to display correctly the name */

Layout.displayName = 'Layout';
Layout.Header.displayName = 'Layout.Header';
Layout.HeaderLarge.displayName = 'Layout.HeaderLarge';
Layout.Body.displayName = 'Layout.Body';
Layout.ScrollableBody.displayName = 'Layout.ScrollableBody';
Layout.Footer.displayName = 'Layout.Footer';

export default Layout;
