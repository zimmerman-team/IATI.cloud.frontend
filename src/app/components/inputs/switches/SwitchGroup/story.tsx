import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';

storiesOf('Inputs|Switches/', module).add('Switch Group', () => (
  <Providers>
    <Component />
  </Providers>
));
