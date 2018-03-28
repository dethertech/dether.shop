import { web3js } from './utils';

/**
 * know if user as web3 injected
 * @returns {Eth address}
 */
const isWeb3 = async () => {
  if (typeof window.web3 !== 'undefined') {
    const address = (await web3js.eth.getAccounts())[0];
    return address;
  }
  return null;
};

export default isWeb3;
