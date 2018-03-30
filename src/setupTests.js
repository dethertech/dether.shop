/* eslint-disable */
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/** * Set up test environment to run in a browser-like environment ** */
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;

global.document = document;
global.window = global.document.defaultView;

const google = {
  maps: {
    places: {
      AutocompleteService: class AutocompleteService {},
      PlacesServiceStatus: {
        OK: 'OK',
      },
    },
  },
};
global.google = google;
global.window.google = google;
global.localStorage = {
  getItem: () => 0,
};
