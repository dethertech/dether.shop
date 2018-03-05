import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/*
  Containers
 */
import Home from '../containers/Home';

/**
 * RouterComponent contains all routes
 */
const RouterComponent = () => (
  <Router>
    <Home />
  </Router>
);

export default RouterComponent;
