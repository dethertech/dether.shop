import { combineReducers } from 'redux';

/*
  Reducers
 */
import map from './map';
import user from './user';

const appReducer = combineReducers({
  map,
  user
});

export default appReducer;
