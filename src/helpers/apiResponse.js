import tr from '../translate';

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
