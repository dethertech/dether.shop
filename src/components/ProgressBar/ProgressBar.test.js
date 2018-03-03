/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProgressBar from './index';

configure({ adapter: new Adapter() });

describe('Component ProgressBar', () => {
  const component = renderer
    .create(<ProgressBar progressRatio={1/5} />);
  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
