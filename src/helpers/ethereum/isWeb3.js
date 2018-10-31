import { web3js } from './utils';

/**
 * know if user as web3 injected
 * @returns {Eth address}
 */
const isWeb3 = async () => {
  const isModernWeb3 = typeof window.ethereum !== 'undefined';
  const isLegacyWeb3 = typeof window.web3 !== 'undefined';
  if (isModernWeb3 || isLegacyWeb3) {
    if (isModernWeb3) {
      await window.ethereum.enable();
    }
    const address = (await web3js.eth.getAccounts())[0];
    return address;
  }
  return null;
};

export default isWeb3;
