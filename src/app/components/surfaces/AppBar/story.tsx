import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from './index';
import Providers from 'app/Providers';

storiesOf('Surfaces', module).add('AppBar', () => (
  <Providers>
    <AppBar />
  </Providers>
));
