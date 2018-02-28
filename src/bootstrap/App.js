import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

/*
  Redux store
 */
import store, { persistor } from './configureStore';

/*
  Router
 */
import Router from './Router';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
