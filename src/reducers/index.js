import { combineReducers } from 'redux';

/*
  Reducers
 */
import map from './map';

const appReducer = combineReducers({
  map,
});

export default appReducer;
