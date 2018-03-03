import DthContract from 'dethercontract/contracts/DetherToken.json';

import { web3js } from './utils';

/**
 * return balance of ETH and DTH of the web3 primary account
 * @returns {Object}
 */
export const getBalance = () =>
  new Promise(async (res, rej) => {
    const balances = {};
    const address = (await web3js.eth.getAccounts())[0];
    const networkId = await web3js.eth.net.getId();
    const dthContract = new web3js.eth
      .Contract(DthContract.abi, DthContract.networks[networkId].address);
    try {
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
