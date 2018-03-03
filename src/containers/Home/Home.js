import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import tokens from '../../styles/tokens';
import Map from '../Map';
import Panels from '../../components/Panels';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { Padding } from '../../components/Spaces';
import LeftPanel from '../LeftPanel';

const FooterText = styled.footer`
  font-size: ${tokens.fontSizes.s};
`;
/**
 * Home containers
 * @extends PureComponent
 */
export class Home extends PureComponent {
  state = {};

  render = () => {
    console.log('Home containers');

    return (
      <Panels>
        <Panels.Left>
          <Layout>
            <Layout.Header>
              <Padding all="m">
                <Header onRefresh={() => {}} EthBalance={2.456} DthBalance={25634} />
              </Padding>
            </Layout.Header>
            <Layout.Body>
              <LeftPanel />
            </Layout.Body>
            <Layout.Footer>
              <Padding all="m">
                <FooterText>
                  <div>
                    <b>Dether</b> tous droits reservés - <a href="/#">Terms and conditions</a>
                  </div>
                </FooterText>
              </Padding>
            </Layout.Footer>
          </Layout>
        </Panels.Left>
        <Panels.Right>
          <Map />
        </Panels.Right>
      </Panels>
    );
  };
}

export default connect(null, null)(Home);
