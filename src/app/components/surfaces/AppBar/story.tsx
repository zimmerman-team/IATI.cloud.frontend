import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from './index';
import Providers from 'app/Providers';

// TODO: Made a ticket for this to revert it back to the old state once webpack doesn't look at story files
storiesOf('Surfaces', module).add('AppBar', () => (
  <Providers>
    <AppBar />
  </Providers>
));
