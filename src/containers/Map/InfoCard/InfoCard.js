import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import tokens from '../../../styles/tokens';
import RoundIconBtn from '../../../components/RoundIconBtn';
import IdentityCard, { ShopInfos } from '../../../components/IdentityCard/';

const CloseBtnWrapper = styled.div`
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.3);
  z-index: 3;
  position: absolute;
  background: #fff;
  border-radius: 50%;
  top: ${tokens.spaces.xs};
  right: ${tokens.spaces.xs};
`;

const Toaster = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(-100%);
    `};
`;

class InfoCard extends PureComponent {
  static propTypes = {
    cardOpened: PropTypes.bool.isRequired,
    closeCard: PropTypes.func.isRequired,
    //    contentOnCard: PropTypes.shape({}).isRequired
  };

  setContent = () => (
    // const { contentOnCard } = this.props;
    <IdentityCard buttonLink="http://google.com" buttonText="Itinerary" cardName="Shop Name">
      <ShopInfos
        title="Welcome"
        adress="31 rue de Cotte 75012 Paris"
        description="Vente d'articles cuisine et déco pour toute la maison."
      />
    </IdentityCard>
  );

  handleClick = () => {
    const { closeCard } = this.props;
    closeCard();
  };

  render() {
    const { cardOpened } = this.props;

    return (
      <Toaster isOpen={cardOpened}>
        <CloseBtnWrapper>
          <RoundIconBtn type="close" onClick={this.handleClick} />
        </CloseBtnWrapper>
        {this.setContent()}
      </Toaster>
    );
  }
}

const mapStateToProps = state => ({
  cardOpened: state.map.cardOpened,
  contentOnCard: state.map.contentOnCard
});

const mapDispatchToProps = dispatch => ({
  closeCard: () => dispatch({ type: 'CLOSE_CARD' })
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);
