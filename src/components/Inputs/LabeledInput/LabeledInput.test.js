/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components'

import LabeledInput from './index';

configure({ adapter: new Adapter() });

const fn = jest.fn()

describe('Component LabeledInput', () => {

  it('should render LabeledInput', () => {
    const component = renderer.create(
      <LabeledInput
        toggleShake={0}
        name="name"
        value="hello"
        componentName="input"
        type="password"
        label="Choose a password :"
        fillInfos="Fill it that way or that way"
        onChange={()=>{}}
        handleChange={()=>{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render LabeledInput with an error', () => {
    const component = renderer.create(
      <LabeledInput
        toggleShake={0}
        componentName="input"
        name="name"
        value="hello"
        type="password"
        label="Choose a password :"
        fillInfos="Fill it that way or that way"
        onChange={()=>{}}
        error="it's a big mistake"
        handleChange={()=>{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a validated LabeledInput', () => {
    const component = renderer.create(
      <LabeledInput
        toggleShake={0}
        name="name"
        value="hello"
        type="password"
        label="Choose a password :"
        fillInfos="Fill it that way or that way"
        onChange={()=>{}}
        isValid
        handleChange={()=>{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
