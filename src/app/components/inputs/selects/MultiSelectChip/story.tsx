import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|Selects/', module).add('Multi Select Chips Two', () => (
  <Providers>
    <Component label="e,[dksdjlfsakhjdfkjhdfs" />
  </Providers>
));
