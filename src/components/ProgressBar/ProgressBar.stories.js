/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './index';


storiesOf('03 - Components', module).addWithChapters('ProgressBar', {
  subtitle: 'Show progress when the user enter a series of steps',
  chapters: [
    {
      sections: [
        {
          title: 'ProgressBar 1/5',
          sectionFn: () => (
            <ProgressBar progressRatio={1/5} />
          ),
          options: {
            showSource: true,
            showPropTables: true
          }
        },{
          title: 'ProgressBar 4/6',
          sectionFn: () => (
            <ProgressBar progressRatio={4/6} />
          ),
          options: {
            showSource: true,
            showPropTables: true
          }
        }
      ]
    }
  ]
})
