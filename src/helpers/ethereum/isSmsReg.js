import { getAddress, getSmsContract } from './utils';

/**
 * return true if is sms register
 * @returns {Bool}
 */
export const isSmsReg = () =>
  new Promise(async (res, rej) => {
    try {
      const [address, smsContract] = await Promise.all([
        getAddress(),
        getSmsContract(),
      ]);
      const isReg = await smsContract.methods.certified(address).call();
      res(isReg);
    } catch (e) {
      rej(e);
    }
  });

export default isSmsReg;
