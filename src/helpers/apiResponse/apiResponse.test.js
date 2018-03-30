import { getErrorMessage } from './apiResponse';

import tr from '../../translate';

describe('helpers::apiResponse', () => {

  it('should return too_many_requests error', () => {
    const errors = null;
    const body = { response: { status: 429 } };

    expect(getErrorMessage(errors, body)).toEqual(tr('api.errors.too_many_requests'));
  });

  it('should return all errors joined', () => {
    const errors = { message: ['error1', 'error2', 'error3'] };
    const body = { response: { status: 400 } };

    expect(getErrorMessage(errors, body)).toEqual('error1; error2; error3');
  })

  it('should return the error', () => {
    const errors = { message: 'error message' };
    const body = { response: { status: 400 } };

    expect(getErrorMessage(errors, body)).toEqual('error message');
  })

});
