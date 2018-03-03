import config from '../constants/config';

const initialState = {
  balance: {
    ETH: 0,
    DTH: 0
  }
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_BALANCE':
      return { ...state, balance: payload };
    default:
      return state;
  }
};

export const hasBalance = ({ balance }) => balance && balance.ETH != null && balance.DTH != null;

export const hasEnougthMoneyToAddShop = ({ balance }) =>
  hasBalance({ balance }) &&
  balance.ETH >= config.gasPrice.simpleTransac &&
  balance.DTH >= config.licensePrice;

export const hasEnougthMoneyToRemoveShop = ({ balance }) =>
  hasBalance({ balance }) && balance.ETH >= config.gasPrice.simpleTransac;

export default userReducer;
