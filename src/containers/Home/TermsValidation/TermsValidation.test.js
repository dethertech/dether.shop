/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import TermsValidation from './index';

configure({ adapter: new Adapter() });

describe('Component TermsValidation', () => {
  it('should be render without crash', () => {
    const component = renderer.create(<TermsValidation
      toggleTermsModal={() => {}}
      shake={0}
      handleCheck={() => {}}
      checked={false}
      > button
    </TermsValidation>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
