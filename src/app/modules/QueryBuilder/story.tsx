import React from 'react';
import { storiesOf } from '@storybook/react';
import QueryBuilder from '.';
import Providers from 'app/Providers';

storiesOf('Modules|Query Builder', module).add('Query Builder', () => (
  <Providers>
    <QueryBuilder />
  </Providers>
));
