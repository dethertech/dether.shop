const setDataShopPending = data => ({
  type: 'SET_DATA_SHOP_PENDING',
  payload: data
});

const addTransaction = ({ type, hash }) => ({
  type: 'ADD_TRANSACTION',
  payload: { type, hash }
});

const addShop = shop => ({
  type: 'ADD_SHOP',
  payload: shop
});

const removeShop = () => ({
  type: 'REMOVE_SHOP'
});
export { addShop, removeShop, setDataShopPending, addTransaction };
