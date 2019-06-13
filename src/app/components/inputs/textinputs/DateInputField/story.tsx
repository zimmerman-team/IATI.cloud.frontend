import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from 'app/components/inputs/DateField/index';
import Providers from 'app/Providers';

storiesOf('Inputs|DateFields', module).add('Date input field', () => (
  <Providers>
    <Component />
  </Providers>
));
