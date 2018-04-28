import config from '../../constants/config';

export const initialState = {
  balance: {
    eth: 0,
    dth: 0,
  },
  isCertified: null,
  ethAddress: null,
  phoneVerified: null,
};

/**
 * userReducer
 */
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_BALANCE':
      return { ...state, balance: payload };
    case 'FETCH_USER_CERTIFIED_SUCCESS': {
      const { status } = payload.data.data;
      return { ...state, isCertified: status };
    }
    case 'SET_ETH_ADDRESS':
      return { ...state, ethAddress: payload };
    default:
      return state;
  }
};

/**
 * hasBalance
 * @param  {[type]}  balance [description]
 * @return {Boolean}         [description]
 */
export const hasBalance = ({ balance }) =>
  !!balance && (balance.eth !== 0 || balance.dth !== 0);

export const hasEnoughDthToAddShop = ({ dth }, licencePrice) =>
  !!dth && dth >= Number(licencePrice);
export const hasEnoughEthToAddShop = ({ eth }) =>
  !!eth && eth >= config.gasPrice.simpleTransac;

/**
 * hasEnoughMoneyToAddShop
 * @param  {[type]}  balance [description]
 * @return {Boolean}         [description]
 */
export const hasEnoughMoneyToAddShop = ({ balance }, licencePrice) =>
  hasBalance({ balance }) &&
  hasEnoughDthToAddShop(balance, licencePrice) &&
  hasEnoughEthToAddShop(balance);

/**
 * hasEnougthMoneyToRemoveShop
 * @param  {[type]}  balance [description]
 * @return {Boolean}         [description]
 */
export const hasEnougthMoneyToRemoveShop = ({ balance }) =>
  hasBalance({ balance }) && balance.eth >= config.gasPrice.simpleTransac;

export default userReducer;
