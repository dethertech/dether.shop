import last from './last';

describe('helpers::test', () => {
  it('should return undefined', () => {
    expect(last(null)).toEqual(undefined);
  });
  it('should return the only element of array', () => {
    expect(last([1])).toEqual(1);
  });
  it('should return the last element of array', () => {
    expect(last([1, 2, 3, 4])).toEqual(4);
  });
})
