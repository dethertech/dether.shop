import config from '../constants/config';

const initialState = {
  ethAddress: null,
  balance: {
    eth: 0,
    dth: 0
  }
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_BALANCE':
      return { ...state, balance: payload };
    case 'SET_ETH_ADDRESS':
      return { ...state, ethAddress: payload.ethAddress };
    default:
      return state;
  }
};

export const hasBalance = ({ balance }) => balance && (balance.eth !== 0 || balance.dth !== 0);

export const hasEnougthMoneyToAddShop = ({ balance }) =>
  hasBalance({ balance }) &&
  balance.eth >= config.gasPrice.simpleTransac &&
  balance.dth >= config.licensePrice;

export const hasEnougthMoneyToRemoveShop = ({ balance }) =>
  hasBalance({ balance }) && balance.eth >= config.gasPrice.simpleTransac;

export default userReducer;
