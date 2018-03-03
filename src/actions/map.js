const setUserPosition = userPosition => ({
  type: 'SET_USER_POSITION',
  payload: { userPosition }
});

const setCenterPosition = centerPosition => ({
  type: 'SET_CENTER_POSITION',
  payload: { centerPosition }
});

const setUserInfo = (userInfo) => ({
  type: 'SET_USER_INFO',
  payload: { userInfo }
});

const setShopOnCard = shop => ({
  type: 'SET_SHOP_ON_CARD',
  payload: { shop },
});

const openCard = () => ({ type: 'OPEN_CARD' });
const closeCard = () => ({ type: 'CLOSE_CARD' });
const setMapInitiated = () => ({ type: 'SET_MAP_INITIATED' });

const fetchShops = (params) => ({
  type: 'API:FETCH_SHOPS',
  url: '/shop',
  params,
});

const fetchAll = (centerPosition, radius = 3) => dispatch => {
  let rad = radius > 30 ? 30 : radius;
  rad = rad < 3 ? 3 : rad;
  dispatch(fetchShops({ ...centerPosition, radius: rad, limit: 500 }));
};

const fetchPositionByIp = res => ({
  type: 'API:FETCH_POSITION_BY_IP',
  url: 'https://ipinfo.io/json',
  onSuccess: () => res(),
  onError: () => res()
});

const fetchUserInfo = () => ({
  type: 'API:FETCH_USER_INFO',
  url: 'https://ipinfo.io/json'
});

const fetchPosition = () => (
  async dispatch => (
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
          () => dispatch(fetchPositionByIp(res))
        );
      }
      // Else get geolocalisation from ip
      dispatch(fetchPositionByIp(res));
    })
  )
);

export {
  setUserPosition,
  setCenterPosition,
  setMapInitiated,
  setShopOnCard,
  setUserInfo,
  fetchShops,
  fetchPosition,
  fetchPositionByIp,
  fetchUserInfo,
  fetchAll,
  openCard,
  closeCard,
};
