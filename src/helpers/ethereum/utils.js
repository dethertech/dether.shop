import Web3 from 'web3';
import DetherCore from 'dethercontract/contracts/DetherCore.json';
import DthContract from 'dethercontract/contracts/DetherToken.json';
import SmsCertifier from 'dethercontract/contracts/SmsCertifier.json';

const provider = window.web3 && window.web3.currentProvider;
export const web3js = new Web3(provider);

export const getAddress = async () => (await web3js.eth.getAccounts())[0];

export const getNetworkId = async () => web3js.eth.net.getId();

export const getDetherContract = async () =>
  new web3js.eth.Contract(
    DetherCore.abi,
    DetherCore.networks[await getNetworkId()].address,
  );

export const getDthContract = async () =>
  new web3js.eth.Contract(
    DthContract.abi,
    DthContract.networks[await getNetworkId()].address,
  );

export const getSmsContract = async () =>
  new web3js.eth.Contract(
    SmsCertifier.abi,
    SmsCertifier.networks[await getNetworkId()].address,
  );

/**
 * [toNBytes description]
 * @param  {[type]} str [description]
 * @param  {[type]} n   [description]
 * @return {[type]}     [description]
 */
export const toNBytes = (str, n) => {
  let buffer = '';
  for (let i = 0; i < n; i += 1) {
    buffer += str[i] ? str[i].charCodeAt(0).toString(16) : '00';
  }
  return buffer;
};
