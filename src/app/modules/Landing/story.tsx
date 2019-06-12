import React from 'react';
import { storiesOf } from '@storybook/react';
import Landing from 'app/modules/Landing';
import Providers from 'app/Providers';

storiesOf('Modules|Landing', module).add('Landing', () => (
  <Providers>
    <Landing />
  </Providers>
));
