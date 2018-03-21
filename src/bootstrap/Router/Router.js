import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/*
  Containers
 */
import Wrapper from '../../containers/Wrapper';

/**
 * RouterComponent contains all routes
 */
const RouterComponent = () => (
  <Router>
    <Wrapper />
  </Router>
);

export default RouterComponent;
