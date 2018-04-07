/**
 * setUserPosition
 * @param {[type]} userPosition [description]
 */
const setUserPosition = userPosition => ({
  type: 'SET_USER_POSITION',
  payload: userPosition,
});

/**
 * setCenterPosition
 * @param {[type]} centerPosition [description]
 */
const setCenterPosition = centerPosition => ({
  type: 'SET_CENTER_POSITION',
  payload: centerPosition,
});

/**
 * setUserInfo
 * @param {[type]} userInfo [description]
 */
const setUserInfo = userInfo => ({
  type: 'SET_USER_INFO',
  payload: { userInfo },
});

/**
 * setShopOnCard
 * @param {[type]} shop [description]
 */
const setShopOnCard = shop => ({
  type: 'SET_SHOP_ON_CARD',
  payload: shop,
});

/**
 * openCard
 * @return {[type]} [description]
 */
const openCard = () => ({ type: 'OPEN_CARD' });

/**
 * closeCard
 * @return {[type]} [description]
 */
const closeCard = () => ({ type: 'CLOSE_CARD' });

/**
 * setMapInitiated
 */
const setMapInitiated = () => ({ type: 'SET_MAP_INITIATED' });

/**
 * fetchShops
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const fetchShops = params => ({
  type: 'API:FETCH_SHOPS',
  url: '/shop',
  params,
});

/**
 * fetch all shops from a radius around the specified position
 * @param  {[type]} centerPosition [description]
 * @param  {Number} [radius=3]     [description]
 * @return {[type]}                [description]
 */
const fetchAll = (centerPosition, radius = 3) => dispatch => {
  const rad = radius < 3 ? 3 : radius;
  dispatch(fetchShops({ ...centerPosition, radius: rad, limit: 500 }));
};

/**
 * fetchPositionByIp
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
const fetchPositionByIp = res => ({
  type: 'API:FETCH_POSITION_BY_IP',
  url: `https://ipinfo.io/json?token=${process.env.REACT_APP_TOKEN_IPINFO}`,
  onSuccess: () => res(),
  onError: () => res(),
});

/**
 * Get the position of client, via the browser if he accepts or via his ip
 * @return {[type]} [description]
 */
const fetchPosition = () => async dispatch =>
  new Promise(res => {
    dispatch({ type: 'INITIATE_POSITION_PENDING' });
    // If user accept geolocalisation
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const positionF = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          dispatch(setUserPosition(positionF));
          dispatch(setCenterPosition(positionF));
          dispatch({ type: 'INITIATE_POSITION_SUCCESS' });
          res(positionF);
        },
        () => dispatch(fetchPositionByIp(res)),
      );
    }
    // Else get geolocalisation from ip
    dispatch(fetchPositionByIp(res));
  });

const resetShops = () => ({
  type: 'RESET_SHOPS',
});

const reloadShops = centerPosition => dispatch => {
  dispatch(resetShops());
  dispatch(fetchAll(centerPosition));
};

export {
  setUserPosition,
  setCenterPosition,
  setMapInitiated,
  setShopOnCard,
  setUserInfo,
  fetchShops,
  fetchPosition,
  fetchPositionByIp,
  fetchAll,
  openCard,
  closeCard,
  reloadShops,
};
