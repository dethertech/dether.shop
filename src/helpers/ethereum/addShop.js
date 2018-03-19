import DthContract from 'dethercontract/contracts/DetherToken.json';
import DetherCore from 'dethercontract/contracts/DetherCore.json';
import web3Abi from 'web3-eth-abi';

import { web3js, helperWeb3 } from './utils';

// TODO
// Make it with arrow function
/* eslint-disable */
const convertBase = function () {
    function convertBase(baseFrom, baseTo) {
        return function (num) {
            return parseInt(num, baseFrom).toString(baseTo);
        };
    }
    // binary to decimal
    convertBase.bin2dec = convertBase(2, 10);
    // binary to hexadecimal
    convertBase.bin2hex = convertBase(2, 16);
    // decimal to binary
    convertBase.dec2bin = convertBase(10, 2);
    // decimal to hexadecimal
    convertBase.dec2hex = convertBase(10, 16);
    // hexadecimal to binary
    convertBase.hex2bin = convertBase(16, 2);
    // hexadecimal to decimal
    convertBase.hex2dec = convertBase(16, 10);
    return convertBase;
}();
/* eslint-enable */

/**
 * [intTo4bytes description]
 * @param  {[type]} intvalue [description]
 * @return {[type]}          [description]
 */
const intTo4bytes = (intvalue) => {
  const hexvalue = convertBase.dec2hex(intvalue);
  let result = hexvalue;
  for (let i = 0; i + hexvalue.length < 8; i += 1) {
    result = `0${result}`;
  }
  return result;
};

/**
 * [toNBytes description]
 * @param  {[type]} str [description]
 * @param  {[type]} n   [description]
 * @return {[type]}     [description]
 */
const toNBytes = (str, n) => {
  let buffer = '';
  for (let i = 0; i < n; i += 1) {
    buffer += str[i] ? str[i].charCodeAt(0).toString(16) : '00';
  }
  return buffer;
};

/**
 * [shopToContract description]
 * @param  {[type]} rawshop [description]
 * @return {[type]}         [description]
 */
const shopToContract = (rawshop) => {
  const lat = intTo4bytes(parseFloat(rawshop.lat) * 100000);
  const lng = intTo4bytes(parseFloat(rawshop.lng) * 100000);

  const hexshopGeo = `0x31${lat}${lng}`;
  const hexShopAddr = `${toNBytes(rawshop.countryId, 2)}${toNBytes(rawshop.postalCode, 16)}`;
  const hexShopId = `${toNBytes(rawshop.cat, 16)}${toNBytes(rawshop.name, 16)}`;
  const hexShopDesc = `${toNBytes(rawshop.description, 32)}${toNBytes(rawshop.opening, 16)}31`;

  const hexShop = `${hexshopGeo}${hexShopAddr}${hexShopId}${hexShopDesc}`;
  return hexShop;
};

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
          100,
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
