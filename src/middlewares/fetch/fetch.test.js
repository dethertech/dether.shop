/* global describe it expect */
import fetchMiddleware from './fetch';

describe('middleware::fetch', () => {
  it('should dispatch a success action', async () => {
    const dispatch = jest.fn(action => action)

    const expectedAction = {
      type: 'API:SEND_SMS',
      url: 'https://google.com/',
      method: 'get',
      data: {},
      params: null,
      onSuccess: () => {},
      onError: () => {}
    }

    const fetch = await fetchMiddleware()(dispatch)(expectedAction)

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'SEND_SMS_SUCCESS',
      payload: {
        data: {
          method: 'get',
          url: 'https://google.com/',
          params: null,
          headers: {},
          data: {},
        }
      }
    })
  })

  it('should dispatch a error action', async () => {
    const dispatch = jest.fn(action => action)

    const expectedAction = {
      type: 'API:SEND_SMS',
      url: 'https://facebook.com/',
      method: 'get',
      data: {},
      params: null,
      onSuccess: () => {},
      onError: () => {}
    }

    const fetch = await fetchMiddleware()(dispatch)(expectedAction)

    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'SEND_SMS_PENDING'
    })

  })
})
