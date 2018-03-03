/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Message from './index';

configure({ adapter: new Adapter() });

describe('Component Message', () => {
  const component = renderer
    .create(
      <Message theme="info">
        Hello je suis un Message. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consequuntur quaerat, doloremque neque voluptas ut laudantium similique nulla consequatur
        nesciunt labore enim, at numquam dolor fugit maxime commodi facere odio cupiditate.
      </Message>
    );
  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
