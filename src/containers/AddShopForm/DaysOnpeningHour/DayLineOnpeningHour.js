import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tokens from '../../../styles/tokens';
import { Select } from '../../../components/Inputs';
import { SwitchButton } from '../../../components/Button';
import { hours } from '../../../helpers/calendar';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: ${tokens.spaces.s};

  > div {
    flex: 0 0 33.333%;
  }

  > div + div {
    padding-left: ${tokens.spaces.xs};
  }
`;

class DayLineOnpeningHour extends PureComponent {
  static propTypes = {
    day: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      openAt: '08:00',
      closeAt: '18:00'
    };
  }

  onSelectDay = () => {
    this.setState(prevState => ({ open: !prevState.open }), this.callParent);
  };

  onChange = ({ target: { name, value: val } }) => {
    this.setState(() => ({ [name]: val }), this.callParent);
  };

  callParent = () => {
    const { openAt, closeAt, open } = this.state;
    const { onChange } = this.props;
    onChange({ open, openAt, closeAt });
  };

  render() {
    const { open, openAt, closeAt } = this.state;
    const { day } = this.props;
    return (
      <Wrapper>
        <div>
          <SwitchButton onClick={this.onSelectDay} checked={open} fullWidth>
            {day}
          </SwitchButton>
        </div>
        <div>
          <Select
            name="openAt"
            disabled={!open}
            onChange={this.onChange}
            selected={openAt}
            data={hours}
          />
        </div>
        <div>
          <Select
            name="closeAt"
            disabled={!open}
            onChange={this.onChange}
            selected={closeAt}
            data={hours}
          />
        </div>
      </Wrapper>
    );
  }
}

export default DayLineOnpeningHour;
