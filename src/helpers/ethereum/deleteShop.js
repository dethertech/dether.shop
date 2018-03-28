import { getAddress, getDetherContract } from './utils';

/**
 * register a shop, SHOP need to have DTH and to be certified
 * @param {[Object]} description
 * @returns {[String]} transaction hash
 */
export const deleteShop = () =>
  new Promise(async (res, rej) => {
    try {
      const [address, detherContract] = await Promise.all([
        getAddress(),
        getDetherContract(),
      ]);
      const tsx = await detherContract.methods
        .deleteShop()
        .send({ from: address, gas: 150000 });
      res(tsx);
    } catch (e) {
      rej(new TypeError(`Invalid transaction: ${e.message}`));
    }
  });

export default deleteShop;
