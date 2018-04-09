import React from 'react';
import { PropTypes } from 'prop-types';
import { isMobile } from '../../constants/browser';

const onlyMobile = Component => {
  class Comp extends React.Component {
    state = {
      enabled: isMobile(),
    };
    componentWillMount() {
      if (window) window.removeEventListener('resize', this.resize);
    }
    componentDidMount() {
      if (window) window.addEventListener('resize', this.resize);
    }
    resize = () => {
      const enabled = isMobile();
      if (this.state.enabled !== enabled) {
        this.setState({ enabled });
      }
    };
    render() {
      if (!this.state.enabled) return this.props.children;
      return <Component {...this.props}>{this.props.children}</Component>;
    }
  }
  Comp.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return Comp;
};

export default onlyMobile;
