/* global describe it expect */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import tr from './index';

configure({ adapter: new Adapter() });

describe('Translate function', () => {
  it('should be return key with brackets', () => {
    const trad = tr('test-translate-module');
    expect(trad).toBe('{{ test-translate-module }}');
  });

  // TODO: Test with all locales
});
