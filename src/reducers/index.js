import { combineReducers } from 'redux';

/*
  Reducers
 */
import app from './app';
import map from './map';
import user from './user';
import shop from './shop';

const appReducer = combineReducers({
  app,
  map,
  user,
  shop
});

export default appReducer;
