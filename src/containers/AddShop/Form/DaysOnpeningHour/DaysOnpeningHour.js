import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Padding } from '../../../../components/Spaces';
import { H3 } from '../../../../components/Headings';
import { convertDay } from '../../../../helpers';
import tr from '../../../../translate';

import DayLineOnpeningHour from './DayLineOnpeningHour';

const daysName = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const defaultDay = { open: false };

export class DaysOnpeningHour extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    days: PropTypes.array,
  };

  static defaultProps = {
    days: [
      defaultDay,
      defaultDay,
      defaultDay,
      defaultDay,
      defaultDay,
      defaultDay,
      defaultDay,
    ],
  };

  constructor(props) {
    super(props);

    let isNewCalendar = true;
    this.state = {
      days: props.days.map((e, i) => {
        if (e.open) isNewCalendar = false;
        return { ...e, name: daysName[i] };
      }),
      autoComplete: isNewCalendar,
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
      if (idx === 0 && autoComplete) {
        copy = copy.map(
          (day, i) =>
            i < 5 ? { ...day, openAt: obj.openAt, closeAt: obj.closeAt } : day,
        );
      } else if (days[idx].open) {
        this.setState({ autoComplete: false });
      }
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
          <H3>{tr('add.form.inputs.opening.label')}</H3>
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
