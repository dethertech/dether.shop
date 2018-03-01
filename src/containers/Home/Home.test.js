/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import fakeStore from '../../constants/test/fakeStore';
import Home from './index';

configure({ adapter: new Adapter() });

const store = fakeStore({});

describe('Container Home', () => {
  it('should be render without crash', () => {
    const component = renderer.create(<Home store={store} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
