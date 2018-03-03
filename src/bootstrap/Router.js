import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
  Containers
 */
import { Home } from '../containers';

/**
 * RouterComponent contains all routes
 */
const RouterComponent = () => (
  <Router>
    <Switch>
      <Route path="*" component={Home} />
    </Switch>
  </Router>
);

export default RouterComponent;
