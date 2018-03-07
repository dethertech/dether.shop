import DthContract from 'dethercontract/contracts/DetherToken.json';
import DetherCore from 'dethercontract/contracts/DetherCore.json';
import web3Abi from 'web3-eth-abi';

import { web3js, helperWeb3 } from './utils';

const overloadedTransferAbi = {
  constant: false,
  inputs: [
    {
      name: '_to',
      type: 'address'
    },
    {
      name: '_value',
      type: 'uint256'
    },
    {
      name: '_data',
      type: 'bytes'
    }
  ],
  name: 'transfer',
  outputs: [
    {
      name: '',
      type: 'bool'
    }
  ],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
};

const toNBytes = (str, n) => {
  let buffer = '';
  for (let i = 0; i < n; i += 1) {
    buffer += str[i] ? str[i].charCodeAt(0).toString(16) : '00';
  }
  return buffer;
};

const shopToContract = (rawshop) => {
  const hexshopGeo = `0x31${toNBytes(rawshop.lat, 16)}${toNBytes(rawshop.lng, 16)}`;
  const hexShopAddr = `${toNBytes(rawshop.countryId, 2)}${toNBytes(rawshop.postalCode, 16)}`;
  const hexShopId = `${toNBytes(rawshop.cat, 16)}${toNBytes(rawshop.name, 16)}`;
  const hexShopDesc = `${toNBytes(rawshop.description, 32)}${toNBytes(rawshop.opening, 16)}`;

  const hexShop = `${hexshopGeo}${hexShopAddr}${hexShopId}${hexShopDesc}`;
  return hexShop;
};

/**
 * register a shop, SHOP need to have DTH and to be certified
 * @param {[Object]} description
 * @returns {[String]} transaction hash
 */
const addShop = (shop) =>
  new Promise(async (res, rej) => {
    try {
      const hexShop = shopToContract(shop);
      const { address, networkId } = await helperWeb3();
      const transferMethodTransactionData = web3Abi.encodeFunctionCall(
        overloadedTransferAbi,
        [
          DetherCore.networks[networkId].address,
          20,
          hexShop
        ]
      );
      const tsx = await web3js.eth
        .sendTransaction({
          from: address,
          to: DthContract.networks[networkId].address,
          data: transferMethodTransactionData,
          value: 0,
          gas: 2000000
        });
      res(tsx);
    } catch (e) {
      rej(new TypeError(`Invalid shop transaction: ${e.message}`));
    }
  });

export default addShop;
