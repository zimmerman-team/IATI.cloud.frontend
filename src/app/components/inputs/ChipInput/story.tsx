import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';

storiesOf('Data display|Chip', module).add('Chip Input', () => (
  <Providers>
    <Component />
  </Providers>
));
