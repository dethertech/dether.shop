import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
  whitelist: [],
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
      : f => f
  )
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
}

export const persistor = persistStore(store);

export default store;
