import React, { PureComponent } from 'react';

import Form from './Form';
import Verification from './Verification';

class AddShop extends PureComponent {
  state = {
    verify: false,
  };

  toggleVerify = () => this.setState({ verify: !this.state.verify });

  render() {
    const { verify } = this.state;

    return (verify
      ? <Verification goBack={this.toggleVerify} />
      : <Form onSubmit={this.toggleVerify} />
    );
  }
}

export default AddShop;
