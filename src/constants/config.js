const GAS_PRICE_ETH = Number(process.env.REACT_APP_GAS_PRICE_ETH || 0.000000004);
const GAS_AMOUNT = Number(process.env.REACT_APP_GAS_AMOUNT || 21000);

export default {
  ethNetwork: Number(process.env.REACT_APP_ETH_NETWORK || 42),
  gasPrice: {
    eth: GAS_PRICE_ETH,
    simpleTransac: GAS_PRICE_ETH * GAS_AMOUNT
  },
  licensePrice: Number(process.env.REACT_APP_LICENSE_PRICE || 40),
  apiUrl: process.env.REACT_APP_API_URL || '',
  googleMapKey: process.env.REACT_APP_GOOGLE_MAP_KEY || '',
  kyc: {
    urlSend: process.env.REACT_APP_KYC_URL_SEND || '',
    urlVerif: process.env.REACT_APP_KYC_URL_VERIF || ''
  }
};
