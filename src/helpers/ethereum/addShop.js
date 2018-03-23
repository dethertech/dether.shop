import DthContract from 'dethercontract/contracts/DetherToken.json';
import DetherCore from 'dethercontract/contracts/DetherCore.json';
import web3Abi from 'web3-eth-abi';

import { web3js, getAddress, getNetworkId } from './utils';

class ConvertBase {
    convert = (baseFrom, baseTo) => num => parseInt(num, baseFrom).toString(baseTo);
    // binary to decimal
    bin2dec = this.convert(2, 10);
    // binary to hexadecimal
    bin2hex = this.convert(2, 16);
    // decimal to binary
    dec2bin = this.convert(10, 2);
    // decimal to hexadecimal
    dec2hex = this.convert(10, 16);
    // hexadecimal to binary
    hex2bin = this.convert(16, 2);
    // hexadecimal to decimal
    hex2dec = this.convert(16, 10);
}

const convertBase = new ConvertBase();

/**
 * [intTo4bytes description]
 * @param  {[type]} intvalue [description]
 * @return {[type]}          [description]
 */
// const intTo4bytes = (intvalue) => {
//   const hexvalue = convertBase.dec2hex(intvalue);
//   let result = hexvalue;
//   for (let i = 0; i + hexvalue.length < 8; i += 1) {
//     result = `0${result}`;
//   }
//   return result;
// };

//
const intTo5bytes = (intvalue) => {
  let hexvalue;
  let result;
  if (intvalue < 0) {
    const newvalue = -intvalue;
    hexvalue = convertBase.dec2hex(newvalue);
    result = hexvalue;
    for (let i = 0; i + hexvalue.length < 8; i += 1) {
      result = `0${result}`;
    }
    result = `01${result}`;
  } else {
    hexvalue = convertBase.dec2hex(intvalue);
    result = hexvalue;
    for (let i = 0; i + hexvalue.length < 8; i += 1) {
      result = `0${result}`;
    }
    result = `00${result}`;
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
  // let lat;
  // let lng;
  // if (parseFloat(rawshop.lat) < 0) lat = intTo4bytesMinus(parseFloat(rawshop.lat) * 100000);
  // else lat = intTo4bytes(parseFloat(rawshop.lat) * 100000);
  // if (parseFloat(rawshop.lng) < 0) lng = intTo4bytesMinus(parseFloat(rawshop.lng) * 100000);
  // else lng = intTo4bytes(parseFloat(rawshop.lng) * 100000);
  const lat = intTo5bytes(parseFloat(rawshop.lat) * 100000);
  const lng = intTo5bytes(parseFloat(rawshop.lng) * 100000);
  console.log('shopfromcontract, lat lng => ', lat, lng);
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
    console.log('ADD SHOP : shop', shop);
    try {
      const hexShop = shopToContract(shop);
      console.log('ADD SHOP: hexshop', hexShop);
      const [address, networkId] = await Promise.all([getAddress(), getNetworkId()]);
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
      console.log('tsx ', tsx);
      res(tsx);
    } catch (e) {
      rej(new TypeError(`Invalid shop transaction: ${e.message}`));
    }
  });

export default addShop;
