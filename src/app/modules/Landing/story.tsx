import React from 'react';
import { storiesOf } from '@storybook/react';
import Landing from 'app/modules/Landing';
import AppBar from 'app/components/surfaces/AppBar';
import Providers from 'app/Providers';

storiesOf('Modules|Pages', module).add('Landing', () => (
  <Providers>
    <div>
      <AppBar />
      <Landing />
    </div>
  </Providers>
));
