import Web3 from 'web3';
import DthContract from 'dethercontract/contracts/DetherToken.json';

const web3js = new Web3(window.web3.currentProvider);

/**
 * know if user as web3 injected
 * @returns {Bool}
 */
export const isWeb3 = () => {
  if (typeof window.web3 !== 'undefined') {
    return true;
  } else {
    return false;
  }
};

/**
 * return balance of ETH and DTH of the web3[0]
 * @returns {Object}
 */
export const getBalance = () =>
  new Promise(async (res, rej) => {
    let balances = {}
    // const dthInstance = dthContract.at('0x84f073b99FB93812DC701874956226319eD17b7c');
    const address =  (await web3js.eth.getAccounts())[0];

    balances.dth = 1000;
    try {
      web3js.eth.getBalance(address).then((result, error) => {
        if(!error){
          balances.eth = result;
          res(balances);
        } else {
          console.log('error transaction', error);
          rej({error: 'provider call failed'});
        }
      });
    } catch (e) {
      rej(e)
    }
  });
