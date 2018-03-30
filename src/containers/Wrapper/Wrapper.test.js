/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import fakeStore from '../../constants/test/fakeStore';
import Wrapper from './index';


const store = fakeStore({});
describe('Container Wrapper', () => {
  it('should be render without crash', () => {
    const component = TestUtils.renderIntoDocument(
        <Provider store={store}><Router><Wrapper /></Router></Provider>
    );
    expect(component).not.toBe(null);
  });
});
