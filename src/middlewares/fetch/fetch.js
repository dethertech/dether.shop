import axios from 'axios';

/*
  Helpers
 */
import { get, last } from '../../helpers';

/*
  Constants
 */
import { config } from '../../constants';

/**
 * This middleware intercept every actions whose type is formatted like "API:${type}", fetch the Data
 * from the url specified in the action and then broadcast the data or the errors
 * in a dispatched action according to the status of the response :
 * ${type}_SUCCESS for a success response
 * ${type}_ERROR for an error response
 */
const fetchMiddleware = () => dispatch => async action => {
  const { type, url, params } = action;
  let { data } = action;
  const method = get(action, 'method', 'get');
  const headers = get(action, 'headers', {});
  if (!action || !type || !url || !type.includes(':') || !type.includes('API:'))
    return dispatch(action);
  const baseType = last(get(action, 'type').split(':'));
  const requestUrl = url.charAt(0) === '/' ? config.apiUrl + url : url;

  dispatch({ type: `${baseType}_PENDING` });

  data = method !== 'get' ? { ...data, type: config.appType } : data;

  axios({ method, url: requestUrl, params, headers, data })
    .then(res => {
      dispatch({
        type: `${baseType}_SUCCESS`,
        payload: { ...action.payload, data: res.data },
      });
      if (action.onSuccess) return action.onSuccess(res.data);
    })
    .catch(err => {
      dispatch({ type: `${baseType}_ERROR` });
      if (action.onError)
        return action.onError(err.response ? err.response.data : err, err);
      return err;
    });
};

export default fetchMiddleware;
