const GAS_PRICE_ETH = Number(
  process.env.REACT_APP_GAS_PRICE_ETH || 0.000000004,
);
const GAS_AMOUNT = Number(process.env.REACT_APP_GAS_AMOUNT || 21000);
const KYC_URL = process.env.REACT_APP_KYC_URL;

const isTrue = str => str === 'true';

export default {
  appVersion: process.env.REACT_APP_APP_VERSION || '0.1.0',
  ethNetwork: Number(process.env.REACT_APP_ETH_NETWORK || 42),
  appType: 'SHOP',
  gasPrice: {
    eth: GAS_PRICE_ETH,
    simpleTransac: GAS_PRICE_ETH * GAS_AMOUNT,
  },
  apiUrl: process.env.REACT_APP_API_URL || '',
  googleMapKey: process.env.REACT_APP_GOOGLE_MAP_KEY || '',
  kyc: {
    url: KYC_URL,
    isCertifiedUrl: ethAddress =>
      `${KYC_URL}/sms/isCertified/${ethAddress}?type=SHOP`,
    sendUrl: `${KYC_URL}/sms`,
    verifUrl: `${KYC_URL}/sms/verif`,
  },
  reportABug: process.env.REACT_APP_REPORT_A_BUG,
  isOnMaintenance: isTrue(process.env.REACT_APP_IS_ON_MAINTENANCE),
  geoServer: process.env.REACT_APP_GEO_SERVER,
};
