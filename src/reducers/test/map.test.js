/* global beforeEach describe it expect */
import deepFreeze from 'deep-freeze';

import reducer from '../map';

describe('reducer::maps', () => {
  let defaultAction;

  beforeEach(() => {
    defaultAction = {
      userPosition: { lat: 48.8628, lng: 2.3292 },
    };
    deepFreeze(defaultAction);
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultAction);
  });
});
