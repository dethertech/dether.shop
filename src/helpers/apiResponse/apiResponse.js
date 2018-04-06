import tr from '../../translate';

/**
 * Parse api response to return formatted error
 * @param  {Array|String} errors   errors returned by api
 * @param  {Object} response response returned by api
 * @return {String} error message
 */
export const getErrorMessage = (errors, { response }) => {
  const { status } = response;
  if (status === 429) {
    return tr('api.errors.too_many_requests');
  } else if (Array.isArray(errors.message)) {
    return errors.message.join('; ');
  } else if (errors.message) {
    return errors.message;
  }
  return response.statusText;
};
