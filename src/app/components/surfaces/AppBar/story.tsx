import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from '.';
import Providers from 'app/Providers';

storiesOf('Surfaces', module).add('AppBar', () => (
  <Providers>
    <AppBar />
  </Providers>
));
