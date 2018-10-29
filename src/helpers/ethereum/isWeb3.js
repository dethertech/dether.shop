import { web3js } from './utils';

/**
 * know if user as web3 injected
 * @returns {Eth address}
 */
const isWeb3 = async () => {
  const isModernWeb3 = typeof window.ethereum !== 'undefined';
  const isLegacyWeb3 = typeof window.web3 !== 'undefined';
  let addresses;
  if (isModernWeb3) {
    await window.ethereum.enable();
    addresses = await web3js.eth.getAccounts();
    return addresses[0];
  } else if (isLegacyWeb3) {
    addresses = await web3js.eth.getAccounts();
    return addresses[0];
  }
  return null;
};

export default isWeb3;
