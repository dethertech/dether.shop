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
import { ShowShop } from './ShowShop';
import jsdom from 'jsdom'
const { JSDOM } = jsdom;


/*** Set up test environment to run in a browser-like environment ***/
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

global.document = document;
global.window = global.document.defaultView

configure({ adapter: new Adapter() });

const store = fakeStore({});

GeocodeAPI.positionToAddress = async () => 'Paris 2';
GeocodeAPI.postalCode = async () => '75002';

describe('Container ShowShop', () => {
  it('should be render without crash', () => {
    const component = TestUtils.renderIntoDocument(
        <ShowShop
          shop={{
            name: 'test',
            cat: 'more test',
            description: 'more more test',
            opening: '0000000',
            lat: '48.8628',
            lng: '2.3292'
          }}
          addShopToStore={() => {}}
          addShopToContract={() => {}}
          isTransactionPending={false}
          deleteContractShop={() => {}}
        />
    );
    expect(component).not.toBe(null);
  });
});
