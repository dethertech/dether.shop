import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import tokens from '../../styles/tokens';
import tr from '../../translate';

import Map from '../Map';
import LeftPanel from '../LeftPanel';

import Panels from '../../components/Panels';
import ButtonLink from '../../components/ButtonLink';
import Mention from '../../components/Mention';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { Padding } from '../../components/Spaces';
import { H1 } from '../../components/Headings';

const FooterText = styled.footer`
  font-size: ${tokens.fontSizes.s};
`;

const LeftWrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: ${tokens.spaces.m};
`;

/**
 * Home containers
 * @extends PureComponent
 */
export class Home extends PureComponent {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }));
  };

  render = () => {
    console.log('Home containers');
    const { isModalVisible } = this.state;

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
              <LeftWrapper>
                <LeftPanel />
              </LeftWrapper>
            </Layout.Body>
            <Layout.Footer>
              <Padding all="m">
                <FooterText>
                  <div>
                    <b>Dether</b> {tr('footer.all_right_reserved')} -{' '}
                    <ButtonLink isSmall onClick={this.toggleModal}>
                      {tr('footer.terms_and_conditions')}
                    </ButtonLink>
                  </div>
                </FooterText>
              </Padding>
            </Layout.Footer>
          </Layout>
          {isModalVisible && (
            <Modal closeFunc={this.toggleModal}>
              <Padding bottom="l">
                <H1>{tr('footer.terms_and_conditions')}</H1>
              </Padding>
              <Mention>{tr('terms')}</Mention>
            </Modal>
          )}
        </Panels.Left>
        <Panels.Right>
          <Map />
        </Panels.Right>
      </Panels>
    );
  };
}

export default connect(null, null)(Home);
