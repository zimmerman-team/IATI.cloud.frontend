import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';

storiesOf('Common|FragmentDivider', module).add('Fragment Divider', () => (
  <Providers>
    <Component />
  </Providers>
));
