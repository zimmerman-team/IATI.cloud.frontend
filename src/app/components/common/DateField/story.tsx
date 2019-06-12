import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|DateFields', module).add('Date input field', () => (
  <Providers>
    <Component />
  </Providers>
));
