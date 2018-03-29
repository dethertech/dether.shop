import React from 'react';
import styled from 'styled-components';

import tr from '../../translate';
import tokens from '../../styles/tokens';
import { H1 } from '../../components/Headings';
import Layout from '../../components/Layout';
import { Padding } from '../../components/Spaces';
import maintenanceImage from '../../assets/images/maintenance.svg';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const Title = styled(H1)`
  color: ${tokens.colors.blue};
`;

const MaintenancePage = () => (
  <Wrapper>
    <Layout>
      <Layout.Body>
        <Padding all="m">
          <img src={maintenanceImage} alt="browser in maintenance" />
          <Title>{tr('maintenance_page.title')}</Title>
          <div>{tr('maintenance_page.message')}</div>
        </Padding>
      </Layout.Body>
    </Layout>
  </Wrapper>
);

export default MaintenancePage;
