import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

/**
 * Home containers
 * @extends PureComponent
 */
export class Home extends PureComponent {
  state = {}

  render = () => {
    console.log('Home containers');

    return (
      <div>
        Form + Map
      </div>
    );
  }
}

export default connect(null, null)(Home);
