import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Home } from './Home';

describe.skip('Containers::Home', () => {
  let wrapper;

  let props = {
    isMetamaskInstalled: true,
    hasEnoughEth: true,
    hasEnoughDth: true,
    minEth: 40,
    minDth: '100',
    toggleTermsModal: () => null,
    acceptTerms: () => null,
    hasGoodNetwork: true,
  }
  const component = props => <Home {...props} />

  it('should match shallow snapshop', () => {
    expect(shallow(component(props))).toMatchSnapshot('Home::shallow');
  });
  it('should match mounted snapshop', () => {
    expect(toJson(component(props))).toMatchSnapshot('Home::mount');
  });
});
