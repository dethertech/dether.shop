import React from 'react';
import { withRouter } from 'react-router-dom';

import Map from '../Map';
import LeftPanel from '../LeftPanel';
import Panels from '../../components/Panels';

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
