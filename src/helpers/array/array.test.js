import { uniqueArray } from './array';

const sort = array => array.sort((a, b) => a.name < b.name);

describe('helpers::uniqueArray', () => {
  it('should return the the array without doublons', () => {
    const array = [
      { name: 'Toto' },
      { name: 'Tata' },
      { name: 'Titi' },
      { name: 'Tyty' },
      { name: 'Tata' },
      { name: 'Tutu' },
      { name: 'Toto' },
    ];

    const arrayResult = [
      { name: 'Toto' },
      { name: 'Tata' },
      { name: 'Titi' },
      { name: 'Tyty' },
      { name: 'Tutu' },
    ];

    expect(sort(uniqueArray(array, 'name'))).toEqual(sort(arrayResult))
  })
})
