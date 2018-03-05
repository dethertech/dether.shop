const GAS_PRICE_ETH = Number(process.env.REACT_APP_GAS_PRICE_ETH);
const GAS_AMOUNT = Number(process.env.REACT_APP_GAS_AMOUNT);

export default {
  gasPrice: {
    eth: GAS_PRICE_ETH,
    simpleTransac: GAS_PRICE_ETH * GAS_AMOUNT
  },
  licensePrice: Number(process.env.REACT_APP_LICENSE_PRICE),
  apiUrl: process.env.REACT_APP_API_URL,
  googleMapKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  kyc: {
    urlSend: process.env.REACT_APP_KYC_URL_SEND,
    urlVerif: process.env.REACT_APP_KYC_URL_VERIF
  }

  // TODO: Remove unused constants
  // encryptToken: process.env.REACT_APP_ENCRYPT_TOKEN,
  // cryptocompareApi: process.env.REACT_APP_CRYPTOCOMPARE_API,
  // etherscan: {
  //   apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  //   link: process.env.REACT_APP_ETHERSCAN_LINK,
  //   api: process.env.REACT_APP_ETHERSCAN_API,
  //   apiInternal: process.env.REACT_APP_ETHERSCAN_API_INTERNAL
  // },
  // gasPrice: {
  //   eth: GAS_PRICE_ETH,
  //   simpleTransac: GAS_PRICE_ETH * GAS_AMOUNT
  // },
  // gasAmount: GAS_AMOUNT,
  // sellMaxEth: Number(process.env.REACT_APP_SELL_MAX_ETH),
  // sellMinEth: Number(process.env.REACT_APP_SELL_MIN_ETH),
  // dealMinEth: Number(process.env.REACT_APP_DEAL_MIN_ETH),
  // licensePrice: Number(process.env.REACT_APP_LICENSE_PRICE),
};
