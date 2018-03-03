import React from 'react';

import { H1, H3 } from '../../components/Headings';
import { LabeledInput } from '../../components/Inputs';
import { Padding } from '../../components/Spaces';
import Mention from '../../components/Mention';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';

import DayLineOnpeningHour from './DayLineOnpeningHour';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const FormShop = () => (
  <div>
    <H1>Register your shop</H1>
    <Mention>Step 3 of 3</Mention>
    <ProgressBar progress={1} />
    <Padding vertical="xl">
      <LabeledInput
        toggleShake={0}
        fillInfos="16 car max"
        value="Roberto"
        componentName="input"
        type="text"
        label="Name :"
        error=""
        handleChange={() => {}}
        name="name"
      />

      <LabeledInput
        toggleShake={0}
        fillInfos="16 car max"
        value="Google"
        componentName="input"
        type="text"
        label="Company :"
        error=""
        handleChange={() => {}}
        name="Company"
      />

      <LabeledInput
        toggleShake={0}
        value="31 rue de Cotte 75012 Paris"
        type="text"
        componentName="input"
        label="Address :"
        error=""
        handleChange={() => {}}
        name="Address"
      />

      <LabeledInput
        toggleShake={0}
        fillInfos="32 car max"
        value="Description"
        componentName="textarea"
        label="Address :"
        error=""
        handleChange={() => {}}
        name="Address"
      />
    </Padding>
    <Padding bottom="m">
      <H3>Select Oppenning days of your shop :</H3>
    </Padding>
    {days.map(day => <DayLineOnpeningHour day={day} />)}

    <Padding vertical="m">
      <Button fullWidth theme="primary">
        Add your shop
      </Button>
    </Padding>
  </div>
);

export default FormShop;
