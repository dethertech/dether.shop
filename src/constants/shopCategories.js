import tr from '../translate';

const NUMBER_OF_CATEGORIES = 21;

export default [...Array(NUMBER_OF_CATEGORIES).keys()]
  .map(i => tr(`categories.${i}`))
  .sort();
