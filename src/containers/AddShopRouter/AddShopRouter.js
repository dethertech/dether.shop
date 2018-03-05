import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddShopHome from '../AddShopHome';
import PhoneVerification from '../PhoneVerification';
import AddShopForm from '../AddShopForm';

/**
 * AddShopRouter containers
 * @extends PureComponent
 */
export class AddShopRouter extends Component {
  static propTypes = {
    history: PropTypes.shape({
      listen: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    isUserVerified: PropTypes.bool.isRequired
  };

  componentDidMount() {
    const { history } = this.props;
    this.unlisten = history.listen(this.redirect);
    this.redirect();
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  redirect = () => {
    const { history, isUserVerified } = this.props;
    if (isUserVerified && history.location.pathname.startsWith('/add-phone')) {
      history.replace('/');
    }
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={AddShopHome} />
          <Route exact path="/add-phone" component={PhoneVerification} />
          <Route exact path="/add-form" component={AddShopForm} />
          <Route exact path="/add-form/verification" component={AddShopHome} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isUserVerified: user.isCertified
});

export default withRouter(connect(mapStateToProps, null)(AddShopRouter));
