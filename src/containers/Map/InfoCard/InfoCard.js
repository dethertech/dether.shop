import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import tokens from '../../../styles/tokens';
import RoundIconBtn from '../../../components/RoundIconBtn';
import ShopCard from './ShopCard';

const CloseBtnWrapper = styled.div`
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.3);
  z-index: 3;
  position: absolute;
  background: #fff;
  border-radius: 50%;
  top: ${tokens.spaces.xs};
  right: ${tokens.spaces.xs};
`;

const CardWrapper = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  visibility: hidden;
  opacity: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -50%;
  left: -50%;
`;

class InfoCard extends PureComponent {
  static propTypes = {
    cardOpened: PropTypes.bool.isRequired,
    closeCard: PropTypes.func.isRequired,
    contentOnCard: PropTypes.shape({}).isRequired
  };

  setContent = () => {
    const { contentOnCard } = this.props;
    if (contentOnCard && contentOnCard.type === 'shop') {
      return (
        <ShopCard {...contentOnCard.content} />
      );
    }
  };

  handleClick = () => {
    const { closeCard } = this.props;
    closeCard();
  };

  render() {
    const { cardOpened } = this.props;

    return (
      <CardWrapper isOpen={cardOpened}>
        <Card>
          <CloseBtnWrapper>
            <RoundIconBtn type="close" onClick={this.handleClick} />
          </CloseBtnWrapper>
          {this.setContent()}
        </Card>
      </CardWrapper>
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
