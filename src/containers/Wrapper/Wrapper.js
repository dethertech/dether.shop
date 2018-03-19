import React from 'react';
import { withRouter } from 'react-router-dom';

/*
  Components
 */
import Panels from '../../components/Panels';

/*
  Containers
 */
import LeftPanel from '../LeftPanel';
import Map from '../Map';

/**
 * Home container
 */
const Home = () => (
  <Panels>
    <Panels.Left>
      <LeftPanel />
    </Panels.Left>
    <Panels.Right>
      <Map />
    </Panels.Right>
  </Panels>
);

export default withRouter(Home);
