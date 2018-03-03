import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Marker extends PureComponent {
  static propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  };

  static defaultProps = {
    handleClick: () => {},
  };

  render() {
    const { handleClick, children } = this.props;

    return (
      <div onClick={handleClick} >
        {children}
      </div>
    );
  }
}

export default Marker;
