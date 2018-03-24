import { getDetherContract } from './utils';
import isWeb3 from './isWeb3';

/**
 * @ignore
 */
const toNBytes = (str, n) => {
  let buffer = '';
  for (let i = 0; i < n; i += 1) {
    buffer += str[i] ? str[i].charCodeAt(0).toString(16) : '00';
  }
  return buffer;
};


/**
 * return balance of ETH and DTH of the web3 primary account
 * @returns {Object}
 */
export const isZoneOpen = async (zoneId) => {
  const hasMetaMask = await isWeb3();

  if (!hasMetaMask) return null;
  return new Promise(async (res, rej) => {
    try {
      const detherContract = await getDetherContract();
      const isopen = await detherContract.methods
        .openedCountryShop(`0x${toNBytes(zoneId, 2)}`).call();
      res(isopen);
    } catch (e) {
      rej(e);
    }
  });
};

export default isZoneOpen;
