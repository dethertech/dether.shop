import DetherCore from 'dethercontract/contracts/DetherCore.json';

import { web3js } from './utils';

/**
 * register a shop, SHOP need to have DTH and to be certified
 * @param {[Object]} description
 * @returns {[String]} transaction hash
 */
export const deleteShop = () =>
  new Promise(async (res, rej) => {
    const address = (await web3js.eth.getAccounts())[0];
    const networkId = await web3js.eth.net.getId();
    const detherContract = new web3js.eth
      .Contract(DetherCore.abi, DetherCore.networks[networkId].address);
    try {
      const tsx = await detherContract.methods.deleteShop().send({ from: address, gas: 1000000 });
      res(tsx);
    } catch (e) {
      rej(new TypeError(`Invalid transaction: ${e.message}`));
    }
  });

export default deleteShop;
