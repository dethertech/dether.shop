import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

/*
  Redux store
 */
import store, { persistor } from '../configureStore';

/*
  Router
 */
import Router from '../Router';
import ReportABug from '../ReportABug/ReportABug';

/**
 * App
 */

class App extends PureComponent {
  state = {
    error: false,
  };
  componentDidCatch(error, info) {
    console.warn(error, info);
    this.setState({
      error: true,
    });
  }
  render = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {!this.state.error && <Router />}
        {this.state.error && <ReportABug />}
      </PersistGate>
    </Provider>
  );
}

export default App;
