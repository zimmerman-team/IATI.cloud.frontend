import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';

storiesOf('Data Display|Lists/', module).add('ListControls', () => (
  <Providers>
    <Component />
  </Providers>
));
