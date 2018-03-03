import { web3js, helperWeb3 } from './utils';

/**
 * return balance of ETH and DTH of the web3 primary account
 * @returns {Object}
 */
export const getBalance = () =>
  new Promise(async (res, rej) => {
    try {
      const balances = {};
      const { address, dthContract } = await helperWeb3();
      web3js.eth.getBalance(address).then(async (result, error) => {
        if (!error) {
          balances.eth = web3js.utils.fromWei(result, 'ether');
          balances.dth = web3js.utils.fromWei(
            await dthContract.methods.balanceOf(address).call()
            , 'ether'
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

export default getBalance;
