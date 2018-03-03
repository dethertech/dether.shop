import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
  Routes
 */
import { routes } from '../constants';

/*
  Containers
 */
import { Map } from '../containers';

/**
 * RouterComponent contains all routes
 */
const RouterComponent = () => (
  <Router>
    <Switch>
      <Route exact path={routes.Home} component={Map} />
    </Switch>
  </Router>
);

export default RouterComponent;
