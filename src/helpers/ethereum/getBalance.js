import { web3js, getAddress, getDthContract } from './utils';
import isWeb3 from './isWeb3';

/**
 * return balance of ETH and DTH of the web3 primary account
 * @returns {Object}
 */
export const getBalance = async () => {
  const hasMetaMask = await isWeb3();

  if (!hasMetaMask) return { eth: 0, dth: 0 };
  return new Promise(async (res, rej) => {
    try {
      const balances = {};
      const [address, dthContract] = await Promise.all([
        getAddress(),
        getDthContract(),
      ]);
      web3js.eth.getBalance(address).then(async (result, error) => {
        if (!error) {
          balances.eth = parseFloat(web3js.utils.fromWei(result, 'ether'));
          balances.dth = parseFloat(
            web3js.utils.fromWei(
              await dthContract.methods.balanceOf(address).call(),
              'ether',
            ),
          );
          res(balances);
        } else {
          rej(new TypeError(`Invalid shop profile: ${error.message}`));
        }
      });
    } catch (e) {
      rej(e);
    }
  });
};

export default getBalance;
