import tr from '../translate';

const NUMBER_OF_CATEGORIES = 20;

export default [...Array(NUMBER_OF_CATEGORIES).keys()].map(i =>
  tr(`categories.${i}`),
);
