/* global jest */

const BOOKS_ENDPOINT = 'https://google.com/';

module.exports = jest.fn(data => {
  switch (data.url) {
    case BOOKS_ENDPOINT:
      return Promise.resolve({
        data,
      });
    default:
      return Promise.reject(new Error('something bad happened'));
  }
});

// module.exports = jest.fn((url) => Promise.resolve({ data: url }));
