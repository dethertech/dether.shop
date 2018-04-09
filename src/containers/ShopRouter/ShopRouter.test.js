/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { GeocodeAPI } from '../../helpers';

import fakeStore from '../../constants/test/fakeStore';
import ShopRouter from './index';
import jsdom from 'jsdom'
const { JSDOM } = jsdom;


/*** Set up test environment to run in a browser-like environment ***/
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

global.document = document;
global.window = global.document.defaultView

GeocodeAPI.positionToAddress = async () => 'Paris 2';
GeocodeAPI.postalCode = async () => '75002';

configure({ adapter: new Adapter() });

const store = fakeStore({});
  jest.mock('axios', () => ({
    CancelToken: {
      source: () => ({
        token: '',
      }),
    },
  }));


describe('Container ShopRouter', () => {
  it('should be render without crash', () => {
    const component = TestUtils.renderIntoDocument(
        <Provider store={store}><Router><ShopRouter hasShop={false} isUserVerified /></Router></Provider>
    );
    expect(component).not.toBe(null);
  });
});
