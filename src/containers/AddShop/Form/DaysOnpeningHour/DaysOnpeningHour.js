import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Padding } from '../../../../components/Spaces';
import { H3 } from '../../../../components/Headings';
import { convertDay } from '../../../../helpers';

import DayLineOnpeningHour from './DayLineOnpeningHour';

const daysName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const defaultDay = { open: false };

export class DaysOnpeningHour extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    days: PropTypes.array
  };

  static defaultProps = {
    days: [defaultDay, defaultDay, defaultDay, defaultDay, defaultDay, defaultDay, defaultDay]
  };

  constructor(props) {
    super(props);
    this.state = {
      days: props.days.map(e => convertDay(e))
    };
  }

  componentDidMount() {
    this.callParent();
  }

  onChange(idx) {
    return obj => {
      const { days } = this.state;
      const arrayCopy = [...days];
      arrayCopy[idx] = convertDay(obj);
      this.setState(() => ({ days: arrayCopy }), this.callParent);
    };
  }

  callParent() {
    const { days } = this.state;
    this.props.onChange(days.join(''));
  }

  render() {
    return (
      <div>
        <Padding bottom="m">
          <H3>Select Oppenning days of your shop :</H3>
        </Padding>
        {daysName.map((dName, idx) => (
          <DayLineOnpeningHour key={idx} onChange={this.onChange(idx)} day={dName} />
        ))}
      </div>
    );
  }
}

export default DaysOnpeningHour;
