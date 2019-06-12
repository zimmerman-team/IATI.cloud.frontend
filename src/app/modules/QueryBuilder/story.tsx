import React from 'react';
import { storiesOf } from '@storybook/react';
import QueryBuilder from '.';
import AppBar from 'app/components/surfaces/AppBar';
import Providers from 'app/Providers';

storiesOf('Modules|Query Builder', module).add('Query Builder', () => (
  <Providers>
    <div>
      <AppBar />
      <QueryBuilder />
    </div>
  </Providers>
));
