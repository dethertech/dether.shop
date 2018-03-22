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
      days: props.days.map((e, i) => ({ ...e, name: daysName[i] })),
      autoComplete: true
    };
  }

  componentDidMount() {
    this.callParent();
  }

  onChange(idx) {
    return obj => {
      const { days, autoComplete } = this.state;
      let copy = [...days];
      copy[idx] = { ...obj };
      if (idx === 0 && autoComplete)
        copy = copy.map(day => ({ ...day, openAt: obj.openAt, closeAt: obj.closeAt }));
      else if (days[idx].open)
        this.setState({ autoComplete: false });
      this.setState(() => ({ days: copy }), this.callParent);
    };
  }

  callParent() {
    const { days } = this.state;
    this.props.onChange(days.map(d => convertDay(d)).join(''));
  }

  render() {
    return (
      <div>
        <Padding bottom="m">
          <H3>Select Oppenning days of your shop :</H3>
        </Padding>
        {this.state.days.map((day, idx) => (
          <DayLineOnpeningHour
            key={idx}
            onChange={this.onChange(idx)}
            {...day}
          />
        ))}
      </div>
    );
  }
}

export default DaysOnpeningHour;
