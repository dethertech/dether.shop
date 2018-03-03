import Web3 from 'web3';
import DetherCore from 'dethercontract/contracts/DetherCore.json';
import DthContract from 'dethercontract/contracts/DetherToken.json';

export const web3js = new Web3(window.web3.currentProvider);

export const helperWeb3 = async () => {
  const address = (await web3js.eth.getAccounts())[0];
  const networkId = await web3js.eth.net.getId();
  const detherContract = new web3js.eth
    .Contract(DetherCore.abi, DetherCore.networks[networkId].address);
  const dthContract = new web3js.eth
    .Contract(DthContract.abi, DthContract.networks[networkId].address);

  return {
    address,
    networkId,
    detherContract,
    dthContract,
  };
};
