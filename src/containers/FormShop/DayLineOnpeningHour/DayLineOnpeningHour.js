import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tokens from '../../../styles/tokens';
import { Select } from '../../../components/Inputs';
import { SwitchButton } from '../../../components/Button';

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

const hours = [
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30'
];

class DayLineOnpeningHour extends PureComponent {
  static propTypes = {
    day: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isDaySelected: false
    };
  }

  onSelectDay = () => {
    this.setState(prevState => ({ isDaySelected: !prevState.isDaySelected }));
  };

  render() {
    const { isDaySelected } = this.state;
    const { day } = this.props;
    return (
      <Wrapper>
        <div>
          <SwitchButton onClick={this.onSelectDay} checked={isDaySelected} fullWidth>
            {day}
          </SwitchButton>
        </div>
        <div>
          <Select disabled={!isDaySelected} selected="08:00" data={hours} />
        </div>
        <div>
          <Select disabled={!isDaySelected} selected="18:00" data={hours} />
        </div>
      </Wrapper>
    );
  }
}

export default DayLineOnpeningHour;
