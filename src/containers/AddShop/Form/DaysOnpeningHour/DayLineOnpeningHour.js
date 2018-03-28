import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tokens from '../../../../styles/tokens';
import { Select } from '../../../../components/Inputs';
import { SwitchButton } from '../../../../components/Button';
import { hours } from '../../../../helpers';

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
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    openAt: PropTypes.string,
    closeAt: PropTypes.string,
    open: PropTypes.bool,
  };

  static defaultProps = {
    openAt: '08:00',
    closeAt: '18:00',
    open: false,
  };

  onSelectDay = () => {
    const { open } = this.props;
    this.callParent({ open: !open });
  };

  onChange = ({ target: { name, value } }) => {
    this.callParent({ [name]: value, open: true });
  };

  callParent = changedParams => {
    const { onChange, name, ...day } = this.props;
    onChange({ ...day, ...changedParams, name });
  };

  render() {
    const { name, open, openAt, closeAt } = this.props;
    return (
      <Wrapper>
        <div>
          <SwitchButton onClick={this.onSelectDay} checked={open} fullWidth>
            {name}
          </SwitchButton>
        </div>
        <div>
          <Select
            name="openAt"
            fakeDisable={!open}
            onChange={this.onChange}
            value={openAt}
            data={hours}
          />
        </div>
        <div>
          <Select
            name="closeAt"
            fakeDisable={!open}
            onChange={this.onChange}
            value={closeAt}
            data={hours}
          />
        </div>
      </Wrapper>
    );
  }
}

export default DayLineOnpeningHour;
