import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState as appReducerInitialState } from '../reducers/app';
import { initialState as userReducerInitialState } from '../reducers/user';

/*
Middlewares
*/
import { fetchMiddleware } from '../middlewares';

/*
Reducers
*/
import rootReducer from '../reducers';

/*
Persist store config
*/
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shop', 'app', 'transaction', 'user'],
  transforms: [
    createTransform(state => ({ ...state, shop: null }), state => state, {
      whitelist: ['shop'],
    }),
    createTransform(
      state => ({
        ...appReducerInitialState,
        areTermsAccepted: state.areTermsAccepted,
      }),
      state => state,
      { whitelist: ['app'] },
    ),
    createTransform(
      state => ({
        ...userReducerInitialState,
        phoneVerified: state.phoneVerified,
      }),
      state => state,
      { whitelist: ['user'] },
    ),
    createTransform(
      state => state,
      state => ({
        ...state,
        sentTime: state.sentTime ? new Date(state.sentTime) : null,
      }),
      { whitelist: ['transaction'] },
    ),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/*
Store
*/
const store = createStore(
  persistedReducer,
  undefined,
  compose(
    applyMiddleware(thunkMiddleware, fetchMiddleware),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension()
      : f => f,
  ),
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
}

export const persistor = persistStore(store);

export default store;
