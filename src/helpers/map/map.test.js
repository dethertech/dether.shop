/* global describe it expect */

import {
  isEqu,
  toRadians,
  distance,
} from './map';

describe('helpers::map', () => {
  const pos1 = {
    lat: 1.13,
    lng: 23.4334,
  }
  const pos2 = {
    lat: 1.13,
    lng: 23.4334,
  }
  const pos3 = {
    lat: 12.13,
    lng: 13.4334,
  }

  beforeEach(() => {
  })

  it('should check if position is equl', () => {
    expect(isEqu(pos1, pos2)).toEqual(true)
    expect(isEqu(pos1, pos3)).toEqual(false)
  })

  it('should get the radians', () => {
    expect(toRadians(1.2)).toEqual(0.020943951023931952)
  })

  it('should return the distance between two points', () => {
    expect(distance(pos1, pos2)).toEqual(0)
    expect(distance(pos1, pos3)).toEqual(1223144.193090146)
  })
})
