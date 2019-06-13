import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from 'src/app/components/inputs/DateField/index';
import Providers from 'src/app/Providers';

storiesOf('Inputs|DateFields', module).add('Date input field', () => (
  <Providers>
    <Component />
  </Providers>
));
