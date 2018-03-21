/* global describe it expect */

import { timeSince, phoneVerificationTime } from './timers';

describe('helpers::timers', () => {
  let time;

  beforeEach(() => {
    time = new Date();
  })

  it('should get time since a phone verification', () => {
    expect(timeSince(time)).toEqual(0)
  })

  it('should check if the phone verification time is valid', () => {
    expect(phoneVerificationTime(time)).toEqual(true)
    expect(phoneVerificationTime(time - 14999)).toEqual(true)
    expect(phoneVerificationTime(time - 15000)).toEqual(false)
    expect(phoneVerificationTime(time - 150000)).toEqual(false)
  })
})
