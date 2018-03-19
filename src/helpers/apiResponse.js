import tr from '../translate';

/**
 * [getErrorMessage description]
 * @param  {[type]} errors   [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
export const getErrorMessage = (errors, { response }) => {
  const { status } = response;
  if (status === 429) {
    return tr('tooManyRequests');
  } else if (Array.isArray(errors.message)) {
    return errors.message.join('; ');
  } else if (errors.message) {
    return errors.message;
  }
  return response.statusText;
};
