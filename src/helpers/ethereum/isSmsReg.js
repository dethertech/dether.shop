import { helperWeb3 } from './utils';

/**
 * return true if is sms register
 * @returns {Bool}
 */
export const isSmsReg = () =>
  new Promise(async (res, rej) => {
    try {
      const { address, smsContract } = await helperWeb3();
      const isReg = await smsContract.methods.isCertified(address).call();
      console.log(isReg);
    } catch (e) {
      rej(e);
    }
  });

export default isSmsReg;
