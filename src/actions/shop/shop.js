/**
 * setDataShopPending
 * @param {[type]} data [description]
 */
const setDataShopPending = data => ({
  type: 'SET_DATA_SHOP_PENDING',
  payload: data,
});

const setAddressShopPending = ({
  lat,
  lng,
  address,
  countryId,
  postalCode,
}) => ({
  type: 'SET_ADDRESS_SHOP_PENDING',
  payload: {
    address,
    lat,
    lng,
    countryId,
    postalCode,
  },
});

/**
 * [addShop description]
 * @param {[type]} shop [description]
 */
const addShop = shop => ({
  type: 'ADD_SHOP',
  payload: shop,
});

/**
 * removeShop
 * @return {[type]} [description]
 */
const removeShop = () => ({
  type: 'REMOVE_SHOP',
});

/**
 * displayShopWillAppearNotice
 */
const displayShopWillAppearNotice = () => ({
  type: 'DISPLAY_SHOP_WILL_APPEAR',
  payload: true,
});

/**
 * hideShopWillAppearNotice
 */
const hideShopWillAppearNotice = () => ({
  type: 'DISPLAY_SHOP_WILL_APPEAR',
  payload: false,
});

export {
  addShop,
  removeShop,
  setDataShopPending,
  setAddressShopPending,
  displayShopWillAppearNotice,
  hideShopWillAppearNotice,
};
