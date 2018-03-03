import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import '../src/styles/globalStyles';
import { MemoryRouter } from 'react-router';
import configureStore from '../src/bootstrap/configureStore';

import chaptersAddon from 'react-storybook-addon-chapters';

setAddon(chaptersAddon);
addDecorator(story => <div style={{ height: '100vh', overflow: 'auto' }}>{story()}</div>);
addDecorator(story => <MemoryRouter initialEntries={['/settings']}>{story()}</MemoryRouter>);

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
