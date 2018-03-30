import get from './get';

describe('helpers::get', () => {
  it('should return default value', () => {
    expect(get(null, 'name', 'toto')).toEqual('toto');
  });
  it('should return the object value', () => {
    expect(get({ name: 'tata' }, 'name', 'toto')).toEqual('tata');
  });
});
