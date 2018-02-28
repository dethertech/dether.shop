import axios from 'axios';

/*
  Helpers
 */
import { get, last } from '../helpers';

/*
  Constants
 */
import { config } from '../constants';

/**
 * fetch Middleware function
 */
const fetchMiddleware = () => dispatch => async action => {
  const { type, url, params, data } = action;
  const method = get(action, 'method', 'get');
  const headers = get(action, 'headers', {});
  if (!action || !type || !url || !type.includes(':') || !type.includes('API:'))
    return dispatch(action);
  const baseType = last(get(action, 'type').split(':'));
  const requestUrl = url.charAt(0) === '/' ? config.apiUrl + url : url;

  dispatch({ type: `${baseType}_PENDING` });

  axios({ method, url: requestUrl, params, headers, data })
    .then(res => {
      dispatch({
        type: `${baseType}_SUCCESS`,
        payload: { ...action.payload, data: res.data }
      });
      if (action.onSuccess) return action.onSuccess(res.data);
    })
    .catch(err => {
      dispatch({ type: `${baseType}_ERROR` });
      console.log(err);
      if (action.onError) return action.onError(err.response.data, err);
    });
};

export default fetchMiddleware;
