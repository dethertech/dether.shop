import { combineReducers } from 'redux';

/*
  Reducers
 */
import app from './app';
import map from './map';
import user from './user';
import shop from './shop';
import kyc from './kyc';

const appReducer = combineReducers({
  app,
  map,
  user,
  shop,
  kyc,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') return appReducer(undefined, action);
  return appReducer(state, action);
};

export default rootReducer;
